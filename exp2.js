#!/bin/node

const path  = require('path');
const fs    = require('fs');

// node experimental.js instatab14/
//
if (!process.argv[2]) return console.log('\nNO PATH! \nexample: \n\tnode experimental.js path/to/dir\n');
from('./' + process.argv[2], '.json');

function from (dir, filter) {
    if (!fs.existsSync(dir)) return console.log('directory does not exist', dir);

    var files = fs.readdirSync(dir);

    for (var i = 0; i < files.length; i++) {

        let file = path.join(dir, files[i]);
        let location = fs.lstatSync(file);

        if (location.isDirectory()){
            from(file, filter);
        } else if (file.indexOf(filter) >= 0) {
            // console.log('FILE ADDED: ' + file );
            parseFile(file);
        }
    }
};

//function parseFile (file) {
//console.log('Loading: ' + file);

//    var records = require('./' + file);
//console.log('contains: ' + records.length + ' records');

//    serialKilla(file);
//}

function serialKilla (file) {
    //console.log('Serial Thrilla!!');

    var fileId = require.resolve('./' + file);

    // clear file from cache
    //
    //console.log('Serious Killa!!', fileId);
    delete require.cache[fileId];

    // remove file contents from this current module.
    //
    //console.log('Succumb to may!! ' + module.children.length);
    module.children = [];
    //console.log('(just murdered children!)');
    //console.log('KILLA!! KILLA!! KILLA!! KILLA!!');
    // console.log(require.cache);
}

function forceGC(){
    if (global.gc) {
        global.gc();
    } else {
        console.warn('No GC hook! Start your program as `node --expose-gc file.js`.');
    }

}

//for (n = 0; n < list.length; n++) {
//console.log(n)
//    json = require(list[n])
//forceGC();
//
//
function arrayToCSV(objArray) {
     const array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
     let str = `${Object.keys(array[0]).map(value => `"${value}"`).join(",")}` + '\r\n';

     return array.reduce((str, next) => {
         str += `${Object.values(next).map(value => `"${value}"`).join(",")}` + '\r\n';
         return str;
        }, str);
 }

function parseFile (file) {
    let json = require('./' + file),
        userAry = json.reduce(function(agg, value) {
            return agg.concat({
                username: value.user.username,
                user_profile_picture: value.user.profile_picture, 
                user_id: value.user.id,
                full_name: value.user.full_name,
                can_delete_comments: value.can_delete_comments,
                code: value.code,
                tags: value.tags,
                low_resolution_url: value.images.low_resolution.url,
                low_resolution_width: value.images.low_resolution.width,
                low_resolution_height: value.images.low_resolution.height,
                thumbnail_url: value.images.thumbnail.url,
                thumbnail_width: value.images.thumbnail.width,
                thumbnail_height: value.images.thumbnail.height, 
                standard_resolution_url: value.images.standard_resolution.url,
                standard_resolution_width: value.images.standard_resolution.width,
                standard_resolution_height: value.images.standard_resolution.height,
                can_view_comments: value.can_view_comments,
                comments_count: value.comments.count,
                likes_count: value.likes.count,
                alt_media_url: value.alt_media_url,
                caption_time: value.caption ? value.caption.created_time : '',
                caption_text: value.caption ? value.caption.text : '',
                caption_from_user: value.caption ? value.caption.from.user : '',
                caption_from_profile_picture: value.caption ? value.caption.from.profile_picture : '',
                caption_from_id: value.caption ? value.caption.from.id : '',
                caption_from_full_name: value.caption ? value.caption.from.full_name : '',
                created_tiime: value.created_time,
                type: value.type,
                idn: value.id,
                link: value.link,
                urls: value.urls[0],
                city: value.location ? value.location.city : '',
                short_name: value.location ? (value.location.place ? value.location.place.city : '') : '',
                lat: value.location ? (value.location.place ? value.location.place.lat : '') : '',
                lng: value.location ? (value.location.place ? value.location.place.lng : '') : '',
            });
    }, []);

    console.log(arrayToCSV(userAry));

    /*
        json.reduce(function(aggregate, value) {
            return {
                username: value.user.username,
                user_projson_picture: value.user.projson_picture, 
                user_id: value.user.id,
                full_name: value.user.full_name,
                can_delete_comments: value.can_delete_comments,
                code: value.code,
                tags: value.tags,
                low_resolution_url: value.images.low_resolution_url,
                low_resolution_width: value.images.low_resolution_width,
                low_resolution_height: value.images.low_resolution_height,
                thumbnail_url: value.images.thumbnail_url,
                thumbnail_width: value.images.thumbnail_width,
                thumbnail_height: value.images.thumbnail_height, 
                standard_resolution_url: value.images.standard_resolution_url,
                standard_resolution_width: value.images.standard_resolution_width,
                standard_resolution_height: value.images.standard_resolution_height,
                can_view_comments: value.can_view_comments
            };
        });

        console.log(aggregate);
        exit();
    }
*/
    serialKilla(file);
}
