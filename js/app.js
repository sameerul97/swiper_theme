// GSAP Animation
var chosenColumn;
var selectedItemId;
var imgData = {
    "imgHeight": "",
    "imgWidth": "",
    "imgTop": "",
    "imgLeft": "",
    "imgBgPosition": "",
    "imgScale": ""
}
var wrapperId, swiper_slider_id;
// Move previous three slides and the next three slides before animating the clicked Image
var firstThree, nextThree;
var testArr = [
    [],
    [],
    []
];
var global_brow_height, global_brow_width;
// Above is 2d Array 
var initOnce;
// Above is for hero image animating



// Resize listerner 
document.addEventListener("DOMContentLoaded", function(event) {

    var previousCss;
    var global_TimelineMax = new TimelineMax();
    var gallerySceneAction = new ScrollMagic.Scene({
        triggerElement: '#gallery',
        triggerHook: 0.6,
        reverse: true
    })
    global_brow_height = window.innerHeight,
        global_brow_width = window.innerWidth;
    console.log($(".gridA").innerHeight())
    showInfoSlide()
    var tempHeight = $("#gallery").outerHeight();

    function resizeContents() {
        if (window.innerWidth >= 992) {
            // Setting Grid content
            var marginTop = $(".gridA").innerHeight() - $(".gridB").innerHeight();
            console.log(marginTop)
            $(".pushUp").css({
                "margin-top": +marginTop + "px"
            })
            $("#gallery").css({ "height": tempHeight * 1.3 + "px" })
            $("#js-scene").css({ "height": tempHeight * 1.3 + "px" })
        }
        // else if (global_brow_width > 1200) {

        // var scene = document.getElementById('js-scene');
        // parallax = new Parallax(scene, {
        //     selector: '.layer',
        //     hoverOnly: true
        // });
        // console.log(optionHeight, $("#js-scene").height())
        // Setting Parallax for Gallery Section

        // var tempHeight = $("#gallery").outerHeight();
        // $("#gallery").css({ "height": tempHeight * 2 + "px" })
        // $("#js-scene").css({ "height": tempHeight * 2 + "px" })
        // $("#gallery").css({ "margin-top": tempHeight / 7 + "px" })
        // $("#gallery").css({ "margin-bottom": tempHeight / 7 + "px" })
        // } 
        else {
            // console.log(optionHeight, $("#js-scene").height())
            // Setting Parallax for Gallery Section
            $(".pushUp").css({
                    "margin-top": "0" + "px"
                })
                // var tempHeight = $("#gallery").outerHeight();
            $("#gallery").css({ "height": "auto" })
            $("#js-scene").css({ "height": "auto" })
                // $("#gallery").css({ "margin-top": tempHeight / 7 + "px" })
                // $("#gallery").css({ "margin-bottom": tempHeight / 7 + "px" })
        }
    }
    window.onresize = resizeContents;

    // Vibrant JS
    // var v = new Vibrant();
    // console.log(Vibrant.from("/swiper_theme/img/nike2.jpg").getPalette(function(err, palette) {
    //         console.log(palette)
    //     }))
    // var rellax = new Rellax('.rellax');
    // var image = document.getElementsByClassName('thumbnail');
    // new simpleParallax(image);
    // Your code to run since DOM is loaded and ready
    var image = document.getElementsByClassName('bg1');
    $img = $("body").find('.hero .img-bg-props');
    console.log(store.getters.getSwiperInitialData);


    // Gallery init
    console.log($("#gallery").outerHeight())
    var previousCss = $(".slideContainer").attr("style");
    $(".slideContainer").css({
        // position: 'absolute', // Optional if #myDiv is already absolute
        visibility: 'hidden',
        display: 'block'
    });
    optionHeight = $("#gallery").height();
    resizeContents()
    if (global_brow_width > 1200) {

        var scene = document.getElementById('js-scene');
        parallax = new Parallax(scene, {
            selector: '.layer',
            hoverOnly: true
        });
        // console.log(optionHeight, $("#js-scene").height())
        // Setting Parallax for Gallery Section

        // var tempHeight = $("#gallery").outerHeight();
        // $("#gallery").css({ "height": tempHeight * 2 + "px" })
        // $("#js-scene").css({ "height": tempHeight * 2 + "px" })
        // $("#gallery").css({ "margin-top": tempHeight / 7 + "px" })
        // $("#gallery").css({ "margin-bottom": tempHeight / 7 + "px" })
    } else {
        // console.log(optionHeight, $("#js-scene").height())
        // Setting Parallax for Gallery Section

        var tempHeight = $("#gallery").outerHeight();
        $("#gallery").css({ "height": "auto" })
        $("#js-scene").css({ "height": "auto" })
            // $("#gallery").css({ "margin-top": tempHeight / 7 + "px" })
            // $("#gallery").css({ "margin-bottom": tempHeight / 7 + "px" })
    }


    $(".slideContainer").attr("style", previousCss ? previousCss : "");
    hideInfoSlide();

    // Animating heroSliderImage
    initOnce = false;
    var pixelToInit = -(window.outerWidth / 9);
    var controller = new ScrollMagic.Controller();
    // ####### BUGGY causing performance issue and glitch whilst clicking the swiper
    // Solution: Initiate this function once the slide is loaded and one 9th is scrolled to top. 
    $(".infoSection").on('scroll', function(e) {
        if ($(document.getElementById("infoSlideBackgroundimage")).offset().top <= pixelToInit && !initOnce) {

            initOnce = true;
            scrollMagicAndGsapInit2();
        }
    });

    function scrollMagicAndGsapInit2() {
        // Scene Action2 
        // Remove this transition once the slide close button is pressed, as this cause transition to take palce when clicking the swiper slide
        $("#infoSlideBackgroundimage").css({ "transition": "all 0.3s ease 0s" })
        var tlSceneAction2 = new TimelineMax();
        tlSceneAction2.to("#infoSlideBackgroundimage", .3, {
            scale: 1.1,
            yPercent: "10%"
        });
        tlSceneAction2.to("#infoSlideBackgroundimage", .3, {
            scale: 1.2,
            yPercent: "15%"
        });
        tlSceneAction2.to("#infoSlideBackgroundimage", .3, {
            scale: 1.3,
            yPercent: "20%"
        });
        var slideHeroImageScene = new ScrollMagic.Scene({
                triggerElement: ".contentHeroImageContainer",
                duration: "70%",
                triggerHook: 0.80
            })
            // .addIndicators()
            .setTween(tlSceneAction2)
            .addTo(controller);
    }
    // });

    // Scrollmagic Init trigger contentHeroImage once
    // var scene = new ScrollMagic.Scene({
    //         triggerElement: '.contentHeroImage'
    //     })
    //     .setPin(slides[i])
    //     .addIndicators()
    //     .addTo(controller)
    //     .triggerHook(0.10)
    //     .reverse(true)
    //     .on('enter', function(e) {
    //         // panel = $(e.target.triggerElement()).prop('id');
    //         $('.contentHeroImage').css({
    //             "transform": 'rotate(50deg)'
    //         });
    //         // $('.circle.c-'+panel).addClass('active');
    //     });
    // var controller = new ScrollMagic.Controller();

    // var tween_1 = TweenMax.to('.contentHeroImage', 0.5, {
    //     left: '53%',
    //     delay: .1
    // });

    // var containerScene = new ScrollMagic.Scene({
    //         triggerElement: '#infoSlideBackgroundimage',
    //         offset: -100,
    //         reverse: false
    //     })
    //     .setTween(tween_1)
    //     .addIndicators()
    //     .addTo(controller);







    $('.Backgroundimage').each(function() {
        // console.log(this);
        $('#' + this.id).on('click', function() {
            chosenColumn = document.querySelector("#" + this.id);
            chosenColumn = chosenColumn.dataset.columns;
            chosenColumn = $("#" + this.id).attr("data-columns");
            selectedItemId = this.id;
            // console.log($("#" + this.id).attr("data-columns"));
            wrapperId = document.getElementById(this.id).parentNode.id;
            console.log(wrapperId)
            swiper_slider_id = document.getElementById(wrapperId).parentNode.id; //Get the swiper-slide-id and move the next two element
            // console.log(swiper_slider_id)
            var imgSrc = $('#' + this.id).css("background-image");
            // var src = imgSrc.match(/"([^]+)"/)[1]
            // console.log(src);
            $("#infoSlideBackgroundimage").css({
                    "background-image": $('#' + this.id).css("background-image")
                })
                // console.log($('#' + this.id).height(), $('#' + this.id).width(), $('#' + swiper_slider_id).width())
            imgData.imgHeight = $('#' + this.id).height();
            imgData.imgWidth = $('#' + swiper_slider_id).width();
            imgData.imgLeft = $(document.getElementById(swiper_slider_id)).offset().left;
            imgData.imgTop = $(document.getElementById(swiper_slider_id)).offset().top;
            // console.log($(document.getElementById(swiper_slider_id)).offset().left)
            imgData.imgBgPosition = $('#' + this.id).css("background-position");
            imgData.imgScale = document.getElementById(this.id).getBoundingClientRect().width / document.getElementById(this.id).offsetWidth;
            // console.log(imgData.imgHeight + " , " + imgData.imgLeft)


            // console.log($(document.getElementById(this.id)).offset().left)
            var tl0 = new TimelineMax();
            tl0.set('.infoSection', {
                overflowY: "hidden"
            })
            tl0.set('#infoSlideBackgroundimage', {
                height: $('#' + swiper_slider_id).height() + 'px',
                width: ($('#' + swiper_slider_id).width()) + 'px',
                // left: $(document.getElementById(swiper_slider_id)).offset().left + "px",
                backgroundPosition: $('#' + this.id).css("background-position"),
                scale: imgData.imgScale,
            })
            tl0.set(".infoSectionImageWrapper", {
                width: $('#' + swiper_slider_id).width() + 'px',
                height: $('#' + swiper_slider_id).height() + 'px',
                left: imgData.imgLeft + "px",
                top: imgData.imgTop + "px",

            })
            var swiperIds = [];
            swiperIds[3] = swiper_slider_id;

            // Grab all three prev elements
            for (i = 3; i > 0; i--) {
                if ($('#' + swiperIds[i]).prev().attr("id") != undefined) {
                    var tempHolder = $('#' + swiperIds[i]).prev().attr("id");
                    i--;
                    swiperIds[i] = tempHolder;
                    i++;
                } else {
                    i--;
                    swiperIds[i] = undefined;
                    i++;
                }
            }
            // Grab all three next elements
            for (i = 3; i < 6; i++) {
                if ($('#' + swiperIds[i]).next().attr("id") != undefined) {
                    var tempHolder = $('#' + swiperIds[i]).next().attr("id");
                    i++;
                    swiperIds[i] = tempHolder;
                    i--;
                } else {
                    i++;
                    swiperIds[i] = undefined;
                    i--;
                }
            }
            // console.log(swiperIds)
            firstThree = swiperIds.slice(0, 3);
            nextThree = swiperIds.slice(4);
            store.commit('setCssProps', {
                "imgHeight": imgData.imgHeight,
                "imgWidth": imgData.imgWidth,
                "imgTop": imgData.imgTop,
                "imgLeft": imgData.imgLeft,
                "imgBgPosition": imgData.imgBgPosition,
                "imgScale": imgData.imgScale
            })
            store.commit('setChosenSwiperId', swiper_slider_id);
            store.commit('setPrevAndNextThreeSlides', [
                [firstThree],
                [nextThree]
            ]);

            for (i = 0; i < nextThree.length; i++) {
                tl0.to('#' + nextThree[i], 1, {
                    duration: 2.5,
                    ease: Expo.easeInOut,
                    x: "200%"
                }, "-=1")
            }
            for (i = 0; i < firstThree.length; i++) {
                tl0.to('#' + firstThree[i], 1, {
                    duration: 2.5,
                    ease: Expo.easeInOut,
                    x: "-200%"
                }, "-=1")
            }

            tl0.to('#infoSlideBackgroundimage , .infoSectionImageWrapper', 1, {
                duration: 2,
                ease: Expo.easeInOut,
                height: "100vh",
                width: "100%",
                left: "0px",
                top: "0px",
                // scale: 1.1,
                backgroundPosition: $('#' + this.id).css("background-position"),
                scale: 1
            }, "-=1")
            tl0.to(".textId", 1, {
                duration: 2,
                ease: Expo.easeInOut,
                fontSize: 150
            }, "-=1")
            tl0.to('.infoSection', 0, {
                opacity: 1,
                zIndex: 1,
            }, "-=1")

            tl0.set('.hero', {
                opacity: 0,
                zIndex: -1
            })
            tl0.to('.infoSection', 0, {
                overflowY: "scroll"
            })

        });
    });
});

// Global function

function showInfoSlide() {
    previousCss = $(".slideContainer").attr("style");
    $(".slideContainer").css({
        // position: 'absolute', // Optional if #myDiv is already absolute
        visibility: 'hidden',
        display: 'block'
    });
    optionHeight = $("#gallery").height();
}

function hideInfoSlide() {
    $(".slideContainer").attr("style", previousCss ? previousCss : "");
}