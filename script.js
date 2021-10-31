"use strict";
const VALID_PAGES = ["home", "environment", "health", "history", "wildlife"]; // We don't want them loading any old file with a custom location.hash!

function loadPage(pageId) {
    
    if (VALID_PAGES.indexOf(pageId) != -1) {
        document.getElementById("content-frame").src = `page-${pageId}.html`;
    }
}

function checkHashLocation() {
    if (location.hash == "" || VALID_PAGES.indexOf(location.hash.slice(1)) == -1) {
        location.hash = "#home";
    }
}

$( document ).ready(function() {
    $(window).on('hashchange',function(){ 
        checkHashLocation();
        loadPage(location.hash.slice(1));
    });
    
    checkHashLocation();
    loadPage(location.hash.slice(1));
});

