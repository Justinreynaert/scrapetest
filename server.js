const express = require('express');
const app = express();
const osmosis = require('osmosis');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/wowprogtracker');

//Character Schema
const Character = new mongoose.Schema({
    name: String,
    dateupdated: String,
    info: {
        style:  String,
        realm: String,
        guild: String,
        commetary: String,
        class:String,
        ilvl: Number,
        dateupdated: String
    }
},{
    versionKey: false
});

const characterModel = mongoose.model('Character', Character); // pluralization

app.get('/scrape', (req,res) => {

    let totalExisting = 0;
    let timestamp = JSON.stringify(Date.now());

    res.send(timestamp);
    for (let i = 0; i < 42; i++) {

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
                'dateupdate':'span.datetime'
            }

        })
        .data(function(data) {

            //track exisiting users in DB


            //console.log(data);


            /// DATA FORMATTING --
            //remove "ITEM LEVEL" --
            if ( data.info.ilvl) {
            data.info.ilvl = data.info.ilvl.replace('Item Level: ','');
            }

            //PUSH TO MONGODB
            // Check if character exists
            characterModel.count({name: data.name}, function (err,count) {
                //character exists - do nuthing
                if(count>0){
                    console.log('exisiting user');
                    totalExisting++;

                }
                else // new char -- add to db
                    {
                    const character = new characterModel({
                        name: data.name,
                        info: {
                            style:  data.info.style,
                            realm: data.info.realm,
                            guild: data.info.guild,
                            class: data.info.class,
                            ilvl: data.info.ilvl,
                            dateupdate: data.info.dateupdate
                        },
                        dateupdated: timestamp
                    })

                    character.save(function(err) {
                        if (!err) {
                            return console.log('Character added');
                        } else {
                            return console.log(err);
                        }
                    })

                }




            })
        })

        .log(console.log)
        .error(console.log)
        .debug(console.log);



    }

    console.log('finished');

    res.send('done');


});



app.listen('5000');

exports = module.exports = app;
