@echo off

SET ORIGIN=build\static
COPY  "%ORIGIN%\js\main*.js" "%ORIGIN%\js\main.js"
COPY  "%ORIGIN%\js\2*.chunk.js" "%ORIGIN%\js\2.js"
COPY  "%ORIGIN%\js\runtime-main*.js" "%ORIGIN%\js\runtime-main.js"
COPY  "%ORIGIN%\css\main*.css" "%ORIGIN%\css\main.css"