@echo off
call "%~dp0\..\run.bat" "%~dp0\all.xml" "%~dp0\..\components.tpl" > "%~dp0\all.js"
call "%~dp0\..\run.bat" "%~dp0\all.xml" "%~dp0\..\html-all.tpl" > "%~dp0\all.html"

call "%~dp0\..\run.bat" "%~dp0\components.xml" "%~dp0\..\components.tpl" > "%~dp0\components.js"
call "%~dp0\..\run.bat" "%~dp0\data.xml" "%~dp0\..\components.tpl" > "%~dp0\data.js"
call "%~dp0\..\run.bat" "%~dp0\data.xml" "%~dp0\..\html-data.tpl" > "%~dp0\data.html"

call "%~dp0\..\run.bat" "%~dp0\Everything.xml" "%~dp0\..\components.tpl" > "%~dp0\Everything.js"
call "%~dp0\..\run.bat" "%~dp0\Everything.xml" "%~dp0\..\html.tpl" > "%~dp0\Everything.html"

call "%~dp0\..\run.bat" "%~dp0\Table.xml" "%~dp0\..\components.tpl" > "%~dp0\Table.js"
call "%~dp0\..\run.bat" "%~dp0\Table.xml" "%~dp0\..\html.tpl" > "%~dp0\Table.html"

call "%~dp0\..\run.bat" "%~dp0\TableRow.xml" "%~dp0\..\components.tpl" > "%~dp0\TableRow.js"
call "%~dp0\..\run.bat" "%~dp0\TableRow.xml" "%~dp0\..\html.tpl" > "%~dp0\TableRow.html"

call "%~dp0\..\run.bat" "%~dp0\TableCell.xml" "%~dp0\..\components.tpl" > "%~dp0\TableCell.js"
call "%~dp0\..\run.bat" "%~dp0\TableCell.xml" "%~dp0\..\html.tpl" > "%~dp0\TableCell.html"

call "%~dp0\..\run.bat" "%~dp0\Box.xml" "%~dp0\..\components.tpl" > "%~dp0\Box.js"
call "%~dp0\..\run.bat" "%~dp0\Box.xml" "%~dp0\..\html.tpl" > "%~dp0\Box.html"

call "%~dp0\..\run.bat" "%~dp0\Boxes.xml" "%~dp0\..\components.tpl" > "%~dp0\Boxes.js"
call "%~dp0\..\run.bat" "%~dp0\Boxes.xml" "%~dp0\..\html.tpl" > "%~dp0\Boxes.html"

call "%~dp0\..\run.bat" "%~dp0\Boxes2.xml" "%~dp0\..\components.tpl" > "%~dp0\Boxes2.js"
call "%~dp0\..\run.bat" "%~dp0\Boxes2.xml" "%~dp0\..\html.tpl" > "%~dp0\Boxes2.html"

call "%~dp0\..\run.bat" "%~dp0\Figure.xml" "%~dp0\..\components.tpl" > "%~dp0\Figure.js"
call "%~dp0\..\run.bat" "%~dp0\Figure.xml" "%~dp0\..\html.tpl" > "%~dp0\Figure.html"

call "%~dp0\..\run.bat" "%~dp0\Container.xml" "%~dp0\..\components.tpl" > "%~dp0\Container.js"
call "%~dp0\..\run.bat" "%~dp0\Container.xml" "%~dp0\..\html.tpl" > "%~dp0\Container.html"

call "%~dp0\..\run.bat" "%~dp0\RList.xml" "%~dp0\..\components.tpl" > "%~dp0\RList.js"
call "%~dp0\..\run.bat" "%~dp0\RList.xml" "%~dp0\..\html.tpl" > "%~dp0\RList.html"
