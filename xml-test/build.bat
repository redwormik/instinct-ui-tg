@echo off
call "%~dp0\..\run.bat" "%~dp0\all.xml" "%~dp0\..\components.tpl" > "%~dp0\all.js"
call "%~dp0\..\run.bat" "%~dp0\all.xml" "%~dp0\..\html-all.tpl" > "%~dp0\all.html"

call "%~dp0\..\run.bat" "%~dp0\components.xml" "%~dp0\..\components.tpl" > "%~dp0\components.js"
call "%~dp0\..\run.bat" "%~dp0\data.xml" "%~dp0\..\components.tpl" > "%~dp0\data.js"
call "%~dp0\..\run.bat" "%~dp0\data.xml" "%~dp0\..\html-data.tpl" > "%~dp0\data.html"

call "%~dp0\..\run.bat" "%~dp0\Box.xml" "%~dp0\..\components.tpl" > "%~dp0\Box.js"
call "%~dp0\..\run.bat" "%~dp0\Box.xml" "%~dp0\..\html.tpl" > "%~dp0\Box.html"

call "%~dp0\..\run.bat" "%~dp0\XMLTest.xml" "%~dp0\..\components.tpl" > "%~dp0\XMLTest.js"
call "%~dp0\..\run.bat" "%~dp0\XMLTest.xml" "%~dp0\..\html.tpl" > "%~dp0\XMLTest.html"

call "%~dp0\..\run.bat" "%~dp0\List.xml" "%~dp0\..\components.tpl" > "%~dp0\List.js"
call "%~dp0\..\run.bat" "%~dp0\List.xml" "%~dp0\..\html.tpl" > "%~dp0\List.html"


