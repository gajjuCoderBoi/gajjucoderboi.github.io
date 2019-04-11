// Loader

$(".loader").delay(2000).fadeOut("slow");

$(document).ready((function () {
    initTyped();
    initEasyChart();
    initContactForm();

    $(".headerimage").height($(window).height());
    $(window).resize(function(){
        $(".headerimage").height($(window).height());
    });

    $('#nav').onePageNav({
        currentClass: 'active',
        changeHash: true,
        scrollSpeed: 750,
    });

}));

function initContactForm() {

    var contact_form = document.getElementById('contact_form');
    contact_form.onsubmit = function (event) {
        event.preventDefault();

        var formData = new FormData(document.getElementById('contact_form'));
        var arr = [];

        for (let v of formData.entries()) {
            arr.push(v)
        }
        alert("Thank You! I'll be in touch");
        console.log(arr)
    }
}

$(window).scroll(function(){
    if ($(window).scrollTop() >= 100) {
        $('nav').addClass('mynavbar');
    }
    else {
        $('nav').removeClass('mynavbar');
    }
});


function initEasyChart() {
    $('.chart').easyPieChart({
        easing: 'easeOutBounce',
        barColor: '#000',
        onStep: function(from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        }
    });
}




//Typed Animation
function initTyped() {
    $("#typed").typed({
        strings: ["A Student.", "A Learner.","A Freelancer.", "A Developer.", "Single Too."],
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
