/*
SMOOTH SCROLL ANIMATION.
*/

$(document).ready(function() {
    if (window.location.hash) {
        var hash = window.location.hash;
        $('html, body').animate({
            scrollTop :  $(hash).offset().top
        }, 500);
    };
});

/*

Email

*/

