function loadPage(pageId) {
    const VALID_PAGES = ["home", "environment", "health", "history", "wildlife"]; // We don't want them loading any old file with a custom location.hash!
    if (VALID_PAGES.indexOf(pageId) != -1) {
        $("#content-div").load(`page-${pageId}.html`);
    }
}

$( document ).ready(function() {
    $(window).on('hashchange',function(){ 
        loadPage(location.hash.slice(1));
    });

    if (location.hash.slice(1) == "") {
        location.hash = "#home"
    }
});

