// ==UserScript==
// @name      fix-springernature-outlook-white-theme
// @version   0.1
// @grant     none
// @namespace https://github.com/asadmanji-springer
// @author    asadmanji-springer
// @description The default theme options on Outlook all seem to be white background on white text so I can't see anything in
//              the calendar or in the email preview panel to name but a few. This script fixes it!
// @match     https://owa.springernature.com/owa/*
// @run-at    document-end
// ==/UserScript==

var readyStateCheckInterval = setInterval(function() {
  if (document.readyState === "complete") {
    clearInterval(readyStateCheckInterval);
    
    fixWhiteOnWhiteFontColour();
  }
}, 10);

function fixWhiteOnWhiteFontColour() {
  document.styleSheets[0].insertRule('.ms-font-s { color: #666 !important; }');
  document.styleSheets[0].insertRule('.ms-font-color-neutralSecondary { color: #666 !important; }');

  document.styleSheets[0].insertRule('.ms-bg-color-themeLight .ms-font-s { color: #fff !important; }');
  document.styleSheets[0].insertRule('.ms-bg-color-themeLight .ms-font-color-neutralSecondary { color: #fff !important; }');  
}
