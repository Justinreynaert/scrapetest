const express = require('express');
const fs = require('fs');
const app = express();
const osmosis = require('osmosis');

const lfgdata = [];

app.get('/scrape', (req,res) => {

    osmosis
        .get('https://www.wowprogress.com/gearscore/?lfg=1')
        .find('a.character')
        .follow('@href')
        .set({



            'name':  'h1',
            'info': {
                'style':  '.raiding_style',
                'realm': 'a.nav_link',
                'guild': 'a.guild',
                'commetary': 'div.charCommetary',
                'class':'i span',
            }
            //'subcategory':  'div.breadbox > span[4]',
            //'date':         'time@datetime',
            //'latitude':     '#map@data-latitude',
            //'longitude':    '#map@data-longitude',
            //'images':       ['img@src']
        })
        .data(function(data) {
            console.log(data);
            lfgdata.push(data);

            //write json to file
            fs.writeFile("./tmp/test.txt",JSON.stringify(lfgdata), function(err) {
                if (err)
                {
                    return console.log(err)
                }
            });




        })
        .log(console.log)
        .error(console.log)
        .debug(console.log);

        res.send('done');


});



app.listen('5000');

exports = module.exports = app;
