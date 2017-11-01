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

function parseFile (file) {
    console.log('Loading: ' + file);

    var records = require('./' + file);
    console.log('contains: ' + records.length + ' records');

    serialKilla(file);
}

function serialKilla (file) {
    console.log('Serial Thrilla!!');

    var fileId = require.resolve('./' + file);

    // clear file from cache
    //
    console.log('Serious Killa!!', fileId);
    delete require.cache[fileId];

    // remove file contents from this current module.
    //
    console.log('Succumb to may!! ' + module.children.length);
    module.children = [];
    console.log('(just murdered children!)');
    console.log('KILLA!! KILLA!! KILLA!! KILLA!!');
    // console.log(require.cache);
}
