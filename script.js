// Loader

$(".loader").delay(2000).fadeOut("slow");



$(document).ready(function() {

    initTyped();

});











//Typed Animation
function initTyped() {
    $("#typed").typed({
        strings: ["A Student.", "A Freelancer.", "A Developer.", "Single Too."],
        // typing speed
        typeSpeed: 300,
        // time before typing starts
        startDelay: 100,
        // backspacing speed
        backSpeed: 50,
        // time before backspacing
        backDelay: 3000,
        // loop
        loop: true,
        // false = infinite
        loopCount: false,
        // show cursor
        showCursor: true,
        // character for cursor
        cursorChar: "|",
        // attribute to type (null == text)
        attr: null,
        // either html or text
        contentType: 'html',
        // call when done callback function
        callback: function() {
        },
        // starting callback function before each string
        preStringTyped: function() {
        },
        //callback for every typed string
        onStringTyped: function() {
        },
        // callback for reset
        resetCallback: function() {
        }
    });
}
