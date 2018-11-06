'use strict';

const fs = require('fs');
const clean = require('./clean');

function writeFile(destination, fileContents, message) {
  fs.writeFile(destination, fileContents, (err) => {
    if (err) { throw err; }
    console.log(message + destination);
  });
}

function buildFile(type, filename, language) {
  fs.readFile(type + '/' + language + '/' + filename, 'utf8', (err, data) => {
    if (err) { throw err; }

    writeFile(type + '_prompts/' + language + '/' + filename,
      clean.prompt(data), type + ' prompt generated for: ');
    writeFile(type + '_solutions/' + language + '/' + filename,
      clean.solution(data), type + ' solution generated for: ');
  });
}

function specialBuildFile(type, filename, language) {
  fs.readFile(type + '/' + language + '/' + filename, 'utf8', (err, data) => {
    if (err) { throw err; }

    writeFile(type + '_prompts_temp/' + language + '/' + filename,
      clean.prompt(data), type + ' prompt generated for: ');
    writeFile(type + '_solutions_temp/' + language + '/' + filename,
      clean.solution(data), type + ' solution generated for: ');
  });
}


function run(languages) {
  languages.forEach((language) => {
    fs.readdir('homework/' + language, (err, files) => {
      if (err) { throw err; }
      console.log(files);
      files.forEach((file) => {
        buildFile('homework', file, language);
      });
    });
    fs.readdir('target_practice/' + language, (err, files) => {
      if (err) { throw err; }
      console.log(files);
      files.forEach((file) => {
        buildFile('target_practice', file, language);
      });
    });
    fs.readdir('warm_up/' + language, (err, files) => {
      if (err) { throw err; }
      console.log(files);
      files.forEach((file) => {
        buildFile('warm_up', file, language);
      });
    });
    fs.readdir('foundation/' + language, (err, files) => {
      if (err) { throw err; }
      console.log(files);
      files.forEach((file) => {
        specialBuildFile('foundation', file, language);
      });
    });
  });
}

run(['java','js','rb','py','swift']);
