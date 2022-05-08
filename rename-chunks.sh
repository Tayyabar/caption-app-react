#!/bin/bash
ORIGIN=build/static

cp $ORIGIN/js/main*.js $ORIGIN/js/main.js
cp $ORIGIN/js/2*.chunk.js $ORIGIN/js/2.js
cp $ORIGIN/js/runtime-main*.js $ORIGIN/js/runtime-main.js
cp $ORIGIN/css/main*.css $ORIGIN/css/main.css