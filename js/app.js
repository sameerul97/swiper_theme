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
// store.commit('addToArray', 10)
// console.log(store.commit('addToArray', 10))
document.addEventListener("DOMContentLoaded", function(event) {
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
    console.log(optionHeight, $("#js-scene").height())

    var scene = document.getElementById('js-scene');
    console.log(scene)
    parallax = new Parallax(scene, {
        selector: '.layer',
    });

    $("#gallery").css({ "height": $("#gallery").outerHeight() * 1.2 + "px" })
    $("#gallery").css({ "margin-top": $("#gallery").height() / 7 + "px" })
    $("#gallery").css({ "margin-bottom": $("#gallery").height() / 7 + "px" })

    $(".slideContainer").attr("style", previousCss ? previousCss : "");
    console.log(optionHeight, parallax)

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

    var controller = new ScrollMagic.Controller();
    // Set Scene
    var tlsetScene = new TimelineMax();
    tlsetScene.set(".contentHeroImage", { rotation: 20, yPercent: "90%" });
    var containerSetScene = new ScrollMagic.Scene({
            triggerElement: '.contentHeroImageContainer',
            triggerHook: 0.95,
            reverse: true
        })
        .setTween(tlsetScene)
        // .addIndicators()
        .addTo(controller);

    // Scene Action
    var tlSceneAction = new TimelineMax();
    tlSceneAction.to(".contentHeroImage", 1, { rotation: 0, yPercent: "0%" });
    var containerSceneAction = new ScrollMagic.Scene({
            triggerElement: '.contentHeroImageContainer',
            triggerHook: 0.7,
            reverse: true
        })
        .setTween(tlSceneAction)
        // .addIndicators()
        .addTo(controller);


    // Scene Action2
    var tlSceneAction2 = new TimelineMax();
    tlSceneAction2.to("#infoSlideBackgroundimage", 1.5, {
        duration: 2.5,
        ease: Expo.easeInOut,
        scale: 1.1
    });
    tlSceneAction2.to("#infoSlideBackgroundimage", 1.5, {
        duration: 2.5,
        ease: Expo.easeInOut,
        scale: 1.6
    });
    var slideHeroImageScene = new ScrollMagic.Scene({
            triggerElement: ".contentHeroImageContainer",
            duration: "70%",
            triggerHook: 0.80
        })
        // .addIndicators()
        .setTween(tlSceneAction2)
        .addTo(controller);

    document.getElementById("gallery").addEventListener("click", function() {
        // var scene = document.getElementById('js-scene');
        // parallax = new Parallax(scene);
        parallax.destroy();
        parallax = null;

        var tl0 = new TimelineMax();
        $(".heroImageAnim").removeClass("heroImageAnim")
            // $(".imageWrapper").removeClass("imageWrapper")
            // tl0.set('.imageWrapper', {
            //     // position: "relative",
            // })
        tl0.to('.imageWrapper', 1, {
            duration: 1,
            ease: Expo.easeInOut,
            left: "0px",
            top: "0px",
            // height: "auto",
            padding: "1%",
            // position: "",
        }, "-=1")
    });
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