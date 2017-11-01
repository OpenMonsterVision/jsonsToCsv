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
function parseFile (file) {

    // console.log(json)
    var json = require("./" + file) 
    for (i = 0; i < json.length; i++) {
        var username                      = json[i].user.username || '';
        var user_projson_picture          = json[i].user.projson_picture || '';
        var user_id                       = json[i].user.id || '';
        var full_name                     = json[i].user.full_name || '';
        var can_delete_comments           = json[i].can_delete_comments || '';
        var code                          = json[i].user || '';
        var tags                          = json[i].tags || '';
        var low_resolution_url            = json[i].images.low_resolution.url || '';
        var low_resolution_width          = json[i].images.low_resolution.width || '';
        var low_resolution_hight          = json[i].images.low_resolution.height || '';
        var thumbnail_url                 = json[i].images.thumbnail.url || '';
        var thumbnail_width               = json[i].images.thumbnail.width || '';
        var thumbnail_hight               = json[i].images.thumbnail.height || '';
        var standard_resolution_url       = json[i].images.standard_resolution.url || '';
        var standard_resolution_width     = json[i].images.standard_resolution.width || '';
        var standard_resolution_hight     = json[i].images.standard_resolution.height || '';
        var can_view_comments             = json[i].can_view_comments || '';
        var chunk_one                     = "\""    + username +
            "\",\"" + user_projson_picture +
            "\",\"" + user_id +
            "\",\"" + full_name +
            "\",\"" + can_delete_comments +
            "\",\"" + code +
            "\",\"" + tags +
            "\",\"" + low_resolution_url +
            "\",\"" + low_resolution_width +
            "\",\"" + low_resolution_hight +
            "\",\"" + thumbnail_url +
            "\",\"" + thumbnail_width +
            "\",\"" + thumbnail_hight +
            "\",\"" + standard_resolution_url +
            "\",\"" + standard_resolution_width +
            "\",\"" + standard_resolution_hight +
            "\",\"" + can_view_comments + "\"";
        var comments_count                = json[i].comments.count || '';
        var likes_count                   = json[i].likes.count || '';
        var alt_media_url                 = json[i].alt_media_url || '';
        var caption                       = json[i].caption || {} ;
        json[i].caption               = caption
        var caption_time                  = json[i].caption.created_time || '';
        var from                       = json[i].caption.from || {} ;
        json[i].caption.from               = from
        var caption_text                  = json[i].caption.text || '';
        var caption_from_user             = json[i].caption.from.user || '';
        var caption_from_projson_picture  = json[i].caption.from.projson_picture || '';
        var caption_from_id               = json[i].caption.from.id || '';
        var caption_from_full_name        = json[i].caption.from.full_name || '';
        var created_time                  = json[i].created_time || '';
        var type                          = json[i].type || '';
        var idn                           = json[i].id || '';
        var urls                          = json[i].urls[0] || '';
        var link                          = json[i].link || '';
        var chunk_two                     = ",\""   + comments_count +
            "\",\"" + likes_count +
            "\",\"" + alt_media_url +
            "\",\"" + caption_time +
            "\",\"" + caption_text +
            "\",\"" + caption_from_user +
            "\",\"" + caption_from_projson_picture +
            "\",\"" + caption_from_id +
            "\",\"" + caption_from_full_name +
            "\",\"" + created_time +
            "\",\"" + type +
            "\",\"" + idn +
            "\",\"" + link +
            "\",\"" + urls + "\"";


        var locationn                     = json[i].location || {};
        json[i].location		  = locationn

        var place			  = locationn.place || {};
        var ploc			  = place.location || {};
        var city			  = ploc.city || '' ;
        var stringLoc			  = JSON.stringify(json[i].location)
        if(stringLoc == "{}"){
            continue;
        }
        var name			  = ploc.name || '' ;
        var short_name			  = ploc.short_name || '' ;
        var lat			  	  = ploc.lat || '' ;
        var lng			  	  = ploc.lng || '';
        var chunk_three                     = ",\""   + name +
            "\",\"" + city +
            "\",\"" + short_name +
            "\",\"" + lat +
            "\",\"" + lng +
            "\",\"" + stringLoc + "\"";

        console.log(chunk_one + chunk_two + chunk_three)
    }

    serialKilla(file);
}
