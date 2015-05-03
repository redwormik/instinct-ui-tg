@echo off
set PATH_TO_GES="%~dp0\..\ReleasePrague"
chcp 1255 > NUL
setlocal enableDelayedExpansion
set LF=^


:: Two blank lines above needed for definition of LF - do not remove
set FILE="%2%"
set "TEMPLATE="
for /f %%N in ('find /c /v "" ^< %FILE%') do set LINE_CNT=%%N
< %FILE% (
  for /l %%N in (1 1 %LINE_CNT%) do (
    set "LN="
    set /p "LN="
    set "TEMPLATE=!TEMPLATE!!LN!!LF!"
  )
)

:: Escaping the quotes
set TEMPLATE=!TEMPLATE:"=""!

:: TGCommandLine.exe interprets input file as Windows-1255
:: The output is in Windows-1255, too
:: cmd transcribes the output to current codepage (still Windows-1255 here)
:: By having the same codepage in input and output, the mojibake in the result is reverted,
:: although it does not show right in the console.
:: (As long as the input code page is ASCII compatible, so the "control" characters are OK.)

"!PATH_TO_GES!\Models\TGCommandLine.exe" Method=Direct SourceFileName="%1" SourceFileType="%3" Template="!TEMPLATE!"
