// app/routes.js
const path = require('path');
const osmosis = require('osmosis');
const config = require('../config/database');
const limit = require("simple-rate-limiter");
const request = limit(require("request")).to(99).per(1000);




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

        let blizzReq = [];

        // fill array with all characters
        characterModel.find((err, characters) => {




            for (let i=0; i < characters.length; i++) {

                // do an api call for that character
                let char    = characters[i].name,
                    realm   = characters[i].info.realm,
                    key     = 'epxa6x4ssz3xwtt9y88fnd8c7z44zst3',
                    url     = 'https://eu.api.battle.net/wow/character/'+ encodeURIComponent(realm) +'/'+ encodeURIComponent(char) +'?fields=progression&locale=en_GB&apikey='+key;


                blizzReq.push((url));
            }

            blizzReq.forEach(function(url) {
                request(url, function(err, res, body) {

                    if (!err && res.statusCode == 200) {
                        console.log(res.statusCode)
                    }

                    if (res.statusCode == 404) {
                        console.log("char not found")
                    }

                    if (res.statusCode == 503) {
                        console.log("Maintenance")
                    }

                    if (res.statusCode == 504) {
                        console.log(body)
                    }

                    if (err) {
                        console.log(err);
                    }
                });
            })




        });





        res.send('done');
    });














}

function updateProgress(current) {
    request({url: current.url, timeout: 10000}, function (err, res, body) {


        if (!err && res.statusCode == 200) {
            console.log('200');
        }

        if (!err && res.statusCode == 404) {
            console.log('404');

        }

        if (!err && res.statusCode == 403) {

        }

        if (!err && res.statusCode !== 200 && res.statusCode !== 404) {
            console.log(res.statusCode);
        }


        if (err) {
            console.log(err)

        }
    })
}




