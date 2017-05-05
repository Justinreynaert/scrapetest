// app/routes.js
const path = require('path');
const osmosis = require('osmosis');
const config = require('../config/database');
const request = require('request');


const characterModel = require('../models/character');

module.exports = (app) => {


    // ----- Scrape (Scrape and add characters to DB)
    app.get('/scrape', (req,res) => {

        let pagesToScan = 40;

        let totalExisting = 0;
        let timestamp = JSON.stringify(Date.now());

        for (let i = 0; i < pagesToScan +1; i++) {

            // SCRAPE TIME
            osmosis
                .get('http://www.wowprogress.com/gearscore/eu/char_rating/next/' + i + '/lfg.1/raids_week./lang.en')
                .find('a.character')
                .follow('@href')
                .set({



                    'name':  'h1',
                    'info': {
                        'style':  '.raiding_style',
                        'realm': 'a.nav_link',
                        'guild': 'a.guild',
                        'class':'i span',
                        'ilvl':'div.gearscore',
                        'dateupdate':'span.datetime',
                        'commentary':'div.charCommentary'

                    },
                    'lastupdated': 'span.datetime'


                })
                .data(function(data) {

                    //track exisiting users in DB


                    //console.log(data);

                    // get btag out of commentary
                    if (data.info.commentary) {
                        //console.log(data.info.commentary)

                        let btag = data.info.commentary.match(/([A-Za-z0-9]*)#[0-9]{4,5}/g);

                        if (btag !== null) {


                            data.btag = btag;
                            console.log('btag:' + data.btag);

                        }
                    }

                    /// DATA FORMATTING --
                    //remove "ITEM LEVEL" --
                    if ( data.info.ilvl) {
                        data.info.ilvl = data.info.ilvl.replace('Item Level: ','');
                    }

                    if (data.info.realm) {
                        data.info.zone = data.info.realm.substring(0,2);
                        data.info.realm = data.info.realm.substring(3).replace(' ', '-');
                    }

                    //PUSH TO MONGODB
                    // Check if character exists
                    characterModel.count({name: data.name}, (err,count) => {
                        //character exists - do nuthing
                        if(count>0){
                            //console.log('Existing character.');
                            totalExisting++;

                        }
                        else // new char -- add to db
                        {
                            const newCharacter = new characterModel({
                                name: data.name,
                                btag: data.btag,
                                info: {
                                    style:  data.info.style,
                                    zone: data.info.zone,
                                    realm: data.info.realm,
                                    guild: data.info.guild,
                                    class: data.info.class,
                                    ilvl: data.info.ilvl,
                                    dateupdate: data.info.dateupdate,
                                    commentary: data.info.commentary
                                },
                                dateupdated: timestamp,
                                lastupdated: data.lastupdated

                            });

                           characterModel.addCharacter(newCharacter, (err) => {
                               if(err) {
                                   //console.log(err)
                               } else {
                                   //console.log('Character made.')
                               }
                           });

                        }




                    })
                })

                //.log(console.log)
                .error(console.log)
                //.debug(console.log);



        }

        res.send(timestamp);


    });

    // ----- API -- Get requests
    //get all characters
    app.get('/api/characters', (req,res) => {
        return characterModel.find((err, characters) => {
            if(!err) {
                res.json(characters)
            }
            else {
                console.log(err)
            }
        }).sort({'info.ilvl': -1})

    });

    //get character by class
    app.get('/api/characters/:class', (req, res) => {
        return characterModel.findByClass(req.params.class, (err, character) => {


            if(!err) {

                console.log(character);
                res.json(character)
            } else {
                return console.log(err);
            }
        })
    });

    app.get('/api/update', (req, res) => {



        let counter;
        // fill array with all characters
        characterModel.find((err, characters) => {

            for (let i=0; i < 1/*characters.length*/; i++) {

                // console.log( characters[i].info.realm);
                // console.log( characters[i].name);




                // do an api call for that character
                request('https://eu.api.battle.net/wow/character/' + 'blackrock'/*characters[i].info.realm */+ '/Shavarâ' + /*characters[i].name*/
                    +'?fields=progression&locale=en_GB&apikey=epxa6x4ssz3xwtt9y88fnd8c7z44zst3', (err,res,body) => {


                if(!err && res.statusCode == 200) {

                    //console.log('200');


                    let data = JSON.parse(body);
                    let counter = 0;

                    for (let key in data.progression.raids) {
                        if (key == 37) {

                            for (let i = 0; i < data.progression.raids[key].bosses.length; i++) {

                                if (data.progression.raids[key].bosses[i].hasOwnProperty('mythicKills')) {

                                    if (data.progression.raids[key].bosses[i].mythicKills > 0) {
                                        counter++;
                                    }
                                }
                            }

                            characterModel.findOne({_id: characters[i]._id}, (err, character) => {
                                // if set - don't update
                                if (character.progression) {

                                } else {
                                    character.progression = counter;
                                }
                                character.save()


                            })
                        }


                    }
                }

                if(!err && res.statusCode == 404) {
                    console.log('character not found')
                }

                if(!err && res.statusCode == 504) {
                            console.log('504')
                            console.log(characters[i].name);
                            console.log(characters[i].info.realm);

                }

                if (err) {


                    //console.log(characters[i].name);

                    //console.log('summit wronk');
                    //console.log(err);

                    characterModel.findOne({_id: characters[i]._id}, (err, character) => {

                          //character.remove();
                          //console.log('Character not found - removed from DB - nog ENGB');

                    })
                }



                })
            }

        });

        res.send('done');
    })

    app.get('/api/betterupdate', (req, res) => {

    let char    = 'Shavarâ',
        realm   = 'blackrock',
        key     = 'epxa6x4ssz3xwtt9y88fnd8c7z44zst3',
        url     = 'https://eu.api.battle.net/wow/character/'+realm+'/'+char+'?locale=en_GB&apikey='+key

        request(
            {url: url,
            encoding: 'utf8'}, function(err,res,body){
                console.log(err);
                console.log(res.statusCode);
                console.log(body);
            }
        )
    });

};






