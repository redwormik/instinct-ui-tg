@echo off
call "%~dp0\..\run.bat" "%~dp0\components.xml" "%~dp0\..\components.tpl" > "%~dp0\components.js"

call "%~dp0\..\run.bat" "%~dp0\Homepage.xml" "%~dp0\..\components.tpl" > "%~dp0\Homepage.js"
call "%~dp0\..\run.bat" "%~dp0\Homepage.xml" "%~dp0\..\html.tpl" > "%~dp0\Homepage.html"

call "%~dp0\..\run.bat" "%~dp0\ProductPage.xml" "%~dp0\..\components.tpl" > "%~dp0\ProductPage.js"
call "%~dp0\..\run.bat" "%~dp0\ProductPage.xml" "%~dp0\..\html.tpl" > "%~dp0\ProductPage.html"

call "%~dp0\..\run.bat" "%~dp0\CartPage.xml" "%~dp0\..\components.tpl" > "%~dp0\CartPage.js"
call "%~dp0\..\run.bat" "%~dp0\CartPage.xml" "%~dp0\..\html.tpl" > "%~dp0\CartPage.html"
