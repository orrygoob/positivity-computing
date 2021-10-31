"use strict";
const VALID_PAGES = ["home", "environment", "health", "history", "wildlife"]; // We don't want them loading any old file with a custom location.hash!

function loadPage(pageId) {
    
    if (VALID_PAGES.indexOf(pageId) != -1) {
        $("#content-div").load(`page-${pageId}.html`);
    }
}

function checkHashLocation() {
    if (location.hash == "" || VALID_PAGES.indexOf(location.hash.slice(1)) == -1) {
        location.hash = "#home";
    }
}

$( document ).ready(function() {
    // Generate list items to go in navbar from VALID_PAGES array
    let contents = ''
    for (let page of VALID_PAGES) {
        contents += '<li class="nav-item"><a class="nav-link" aria-current="page" href="#' + page + '">' + page[0].toUpperCase() + page.slice(1) + '</a></li>'
    }

    // Fill container with list items
    $("#navbarLinkContainer").html(contents)

    
    $(window).on('hashchange',function(){ 
        checkHashLocation();
        loadPage(location.hash.slice(1));
    });
    
    checkHashLocation();
    loadPage(location.hash.slice(1));
});

