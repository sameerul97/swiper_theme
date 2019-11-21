var myTask = Vue.component('infocontent-template', {
    // template: '#task-template',
    props: ['project'],
    // projectTitle: {
    //     type: String,
    //     // required: true
    // },
    // imgData: {
    //     type: String,
    //     // required: true
    // },
    // props: {
    //     projectTitle: {
    //         type: String,
    //         // required: true
    //     }
    // },
    data: function() {
        // if (this.project) {
        // console.log(this.project)
        return {
            projectTitle: this.project,
            count: 0,
            galleryAnimated: true,
            initCarouselOnce: false
                // imgData: store.getters.getSwiperAnimData
                // required: true
        } //Notice: in components data should return an object. For example "return { someProp: 1 }"
        // } else {
        // return {};
        // }
    },
    computed: {
        // imgData: {
        //     get: function() {
        //         return store.getters.getSwiperAnimData
        //     },
        //     set: function() {
        //         imgData = store.getters.getSwiperAnimData;
        //     }
        // }
    },
    content: {},
    watch: {
        galleryAnimated: function() {
            if (!galleryAnimated) {
                this.smgInitGallery();
            }
        },
        project: function(newVal, oldVal) { // watch it


            console.log('Prop changed: ', newVal, ' | was: ', oldVal, this.project);
            // console.log(store.getters.getInfoData);
            this.projectTitle = store.getters.getInfoData(this.project);
            this.gridContentInit();
            this.galleryInit();
            this.smgInitContentHeroImage();
            // this.cursorInit();
            this.smgInitGallery();
            this.carouselInit();

            // Testing this 
            // this.smgInitGallery2();

            // Initiate gallery once the project is loaded
            console.log($("#gallery").outerHeight())
        }
    },
    mounted: function() {
        console.log("Created")
            // this.imgData = store.getters.getSwiperAnimData;
        if (this.project) {
            // this.imgData = store.getters.getSwiperAnimData;

            // console.log(store.getters.getInfoData);
            // store.getters.getInfoData(this.project)
            // this.project = store.getters.getInfoData.header;
        }

    },
    methods: {
        greet: function(event) {

            // Call Mutation method
            // if (this.count === 0) {
            //     store.commit('testMutation', "TEST");
            //     this.count++;
            //     // this.imgData = store.getters.getSwiperAnimData;
            // } // Call Mutation method
            // else {
            // store.commit('testMutation', "TEST 222")
            //         // this.imgData = store.getters.getSwiperAnimData;
            // }

            var imageData = store.getters.getSwiperAnimData;
            var imgData = imageData.cssProps;
            var selectedItemId = imageData.swiper_slider_id;
            var firstThree = imageData.firstThree;
            var nextThree = imageData.nextThree;
            $("#infoSlideBackgroundimage").css({ "transition": "" })
            initOnce = false;
            console.log(imgData, selectedItemId, firstThree, nextThree)
                // Get info section back to top.
            var elmnt = document.getElementById("infoSlideBackgroundimage");
            elmnt.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" }); // Top

            // function scrollToTop() {
            // }
            var tl0 = new TimelineMax();
            // console.log(imgData.imgHeight.imgData.imgLeft)
            tl0.set('.hero', {
                opacity: 1,
                zIndex: 1
            })
            tl0.set('.infoSection', {
                overflowY: "hidden"
            })
            tl0.to(".infoSectionImageWrapper", 1, {
                duration: 2,
                ease: Expo.easeInOut,
                width: $('#' + selectedItemId).width() + 'px',
                height: $('#' + selectedItemId).height() + 'px',
                left: imgData.imgLeft + "px",
                top: imgData.imgTop + "px",

            }, "-=1")
            tl0.to('#infoSlideBackgroundimage', 1, {
                duration: 2,
                ease: Expo.easeInOut,
                backgroundPosition: imgData.imgBgPosition,
                height: $('#' + selectedItemId).height() + 'px',
                // top: imgData.imgTop + "px",
                scale: imgData.imgScale
            }, "-=1")
            for (i = 0; i < nextThree.length; i++) {
                tl0.to('#' + nextThree[i], 1, {
                    duration: 2.5,
                    ease: Expo.easeInOut,
                    x: "0%"
                }, "-=1")
            }
            for (i = 0; i < firstThree.length; i++) {
                tl0.to('#' + firstThree[i], 1, {
                    duration: 2.5,
                    ease: Expo.easeInOut,
                    x: "0%"
                }, "-=1")
            }
            tl0.to(".textId", 1, {
                duration: 2,
                ease: Expo.easeInOut,
                fontSize: 50
            }, "-=1")
            tl0.set('.infoSection', {
                opacity: 0,
                zIndex: -1
            })
            $(".onepage-pagination").css({
                "opacity": 1
            })
            imgData = {
                    "imgHeight": "",
                    "imgWidth": "",
                    "imgTop": "",
                    "imgLeft": "",
                    "imgBgPosition": "",
                    "imgScale": ""
                }
                // global_TimelineMax.clear();
            global_TimelineMax.set('.imageWrapper', { clearProps: "left,top,height,padding" });
            var previousCss = $(".slideContainer").attr("style");
            $(".slideContainer").css({
                // position: 'absolute', // Optional if #myDiv is already absolute
                visibility: 'hidden',
                display: 'block'
            });
            optionHeight = $("#gallery").height();
            // console.log(optionHeight, $("#js-scene").height())
            // Setting Parallax for Gallery Section
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
            // var tempHeight = $("#gallery").outerHeight();
            // $("#gallery").css({ "height": tempHeight * 2 + "px" })
            // $("#js-scene").css({ "height": tempHeight * 2 + "px" })
            // $("#gallery").css({ "margin-top": tempHeight / 7 + "px" })
            // $("#gallery").css({ "margin-bottom": tempHeight / 7 + "px" })
            $(".slideContainer").attr("style", previousCss ? previousCss : "");
            // })
        },
        gridContentInit: function() {
            console.log("@Grid Content Initialising");
            showInfoSlide();
            var controller = new ScrollMagic.Controller();
            // Set Scene
            var gridA_Width = $(".gridA").innerWidth();
            var gridA_Height = $(".gridA").innerHeight();
            var gridB_Width = $(".gridB").innerWidth() * 2;
            var gridB_height = $(".gridB").innerHeight();

            var gridC_Width = $(".gridC").innerWidth();
            var gridC_Height = $(".gridC").innerHeight();
            var gridD_Width = $(".gridD").innerWidth() * 2;
            var gridD_height = $(".gridD").innerHeight();
            console.log(gridA_Width);
            hideInfoSlide();
            var tlsetScene = new TimelineMax();
            tlsetScene.set(".gridA", { backgroundPosition: "-" + gridA_Width + "px 0px" });
            tlsetScene.set(".gridB", { backgroundPosition: "-" + gridB_Width + "px -" + gridA_Height + "px" });
            tlsetScene.set(".gridD", { backgroundPosition: gridD_Width + "px 0px" });
            tlsetScene.set(".gridC", { backgroundPosition: gridC_Width + "px " + gridC_Height + "px" });

            $('.gridA .textWrapper, .gridD .textWrapper').children().each(function(index, el) {
                tlsetScene.set(el, { opacity: 0 });
            });
            $('.gridB .heroContentImageWrapper , .gridC .heroContentImageWrapper').children().each(function(index, el) {
                console.log(el);
                tlsetScene.set(el, { opacity: 0, y: -100 });
            });
            var containerSetScene = new ScrollMagic.Scene({
                    triggerElement: '.contentHeroImageContainer',
                    triggerHook: 0.5,
                    reverse: true
                })
                .setTween(tlsetScene)
                .addTo(controller);
            var val = gridB_height - gridA_Height;

            // Scene Action
            var tlSceneAction = new TimelineMax();
            tlSceneAction.to(".gridA", .5, { ease: Expo.easeIn, backgroundPosition: "0px 0px" });
            tlSceneAction.to(".gridB", .5, { ease: Expo.easeIn, backgroundPosition: "-" + gridB_Width / 2 + "px -" + val + "px" }, "-=.5");
            tlSceneAction.to(".gridB", .5, { backgroundPosition: "0px -" + val + "px" });
            tlSceneAction.to(".gridB", .5, { ease: Expo.easeOut, backgroundPosition: "0px 0px" });
            $('.gridA .textWrapper').children().each(function(index, el) {
                tlSceneAction.to(el, .5, { ease: Expo.easeIn, opacity: 1 });
            });
            $('.gridB .heroContentImageWrapper').children().each(function(index, el) {
                console.log(el);
                tlSceneAction.to(el, 1, { ease: Expo.easeIn, opacity: 1, y: 0 }, "-=1");
            });

            var containerSceneAction = new ScrollMagic.Scene({
                    triggerElement: '.gridA',
                    triggerHook: 0.5,
                    reverse: true
                })
                .setTween(tlSceneAction)
                // .addIndicators()
                .addTo(controller);

            var tlSceneAction2 = new TimelineMax();
            var val = gridC_Height - gridD_height;
            tlSceneAction2.to(".gridD", .5, { ease: Expo.easeIn, backgroundPosition: "0px 0px" });
            tlSceneAction2.to(".gridC", .5, { ease: Expo.easeIn, backgroundPosition: gridB_Width / 2 + "px " + val + "px" }, "-=.5");
            tlSceneAction2.to(".gridC", .5, { backgroundPosition: "0px " + val + "px" });
            tlSceneAction2.to(".gridC", .5, { ease: Expo.easeOut, backgroundPosition: "0px 0px" });
            $('.gridD .textWrapper').children().each(function(index, el) {
                tlSceneAction2.to(el, .5, { ease: Expo.easeIn, opacity: 1 });
            });
            $('.gridC .heroContentImageWrapper').children().each(function(index, el) {
                console.log(el);
                tlSceneAction2.to(el, 1, { ease: Expo.easeIn, opacity: 1, y: 0 }, "-=1");
            });
            var containerSceneAction = new ScrollMagic.Scene({
                    triggerElement: '.gridA',
                    triggerHook: -1,
                    reverse: true
                })
                .setTween(tlSceneAction2)
                // .addIndicators()
                .addTo(controller);
        },
        galleryInit: function() {
            // var scene = document.getElementById('js-scene');
            // parallax = new Parallax(scene);
            document.getElementById("gallery").addEventListener("click", function() {
                // var scene = document.getElementById('js-scene');
                // parallax = new Parallax(scene);
                parallax.destroy();
                // parallax = null;
                this.galleryAnimated = false;
                global_TimelineMax = new TimelineMax();
                $(".heroImageAnim").removeClass("heroImageAnim")

                global_TimelineMax.to('#gallery .imageWrapper', 1, {
                    duration: 1,
                    ease: Expo.easeInOut,
                    left: "0px",
                    top: "0px",
                    height: "auto",
                    padding: "1%"
                        // position: "",
                }, "-=1");
                for (i = 0; i < testArr.length; i++) {
                    for (j = 0; j < testArr[i].length; j++) {
                        testArr[i][j].reverse(false);
                    }
                }
            });
        },
        smgInitContentHeroImage: function() {
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
                    triggerHook: 0.5,
                    reverse: true
                })
                .setTween(tlSceneAction)
                // .addIndicators()
                .addTo(controller);


        },
        smgInitGallery: function() {
            // Make contorller global within the componenet 
            var controller = new ScrollMagic.Controller();
            // Set Scene
            var tlsetScene = new TimelineMax();
            // console.log($(".imageWrapper"))
            var galleryImages = $("#gallery").find(".imageWrapper");
            // $("#gallery").find(".imageWrapper")[0];
            // console.log(galleryImages, elLen)
            // if (global_brow_width > 992) {

            for (i = 0; i < galleryImages.length; i++) {
                console.log(galleryImages[i]);
                global_TimelineMax = new TimelineMax();

                if (i % 2 == 0) {
                    global_TimelineMax.set(galleryImages[i], { rotation: 20, yPercent: "200%" });
                } else {
                    global_TimelineMax.set(galleryImages[i], { rotation: -20, yPercent: "180%" });
                }
                gallerySceneAction = new ScrollMagic.Scene({
                        triggerElement: '.contentHeroImageContainer',
                        triggerHook: 0.95,
                        reverse: true
                    })
                    .setTween(global_TimelineMax)
                    // .addIndicators()
                    .addTo(controller);
                testArr[0].push(gallerySceneAction);

            }


            //   Scene Action
            for (i = 0; i < galleryImages.length; i++) {
                if (i % 2 == 0) {
                    // Delay
                    global_TimelineMax = new TimelineMax({ delay: i - i * 0.9 + 0.055 });
                } else {
                    global_TimelineMax = new TimelineMax();
                }
                // var reverse = (this.galleryAnimated) ? false : true;
                // console.log(reverse)
                global_TimelineMax.to(galleryImages[i], 1.5, { rotation: 0, yPercent: "0%" });
                gallerySceneAction = new ScrollMagic.Scene({
                        triggerElement: '#gallery',
                        triggerHook: 0.6,
                        reverse: this.galleryAnimated
                    })
                    .setTween(global_TimelineMax)
                    // .addIndicators()
                    .addTo(controller);
                testArr[1].push(gallerySceneAction);
            }
            // }
        },
        smgInitGallery2: function() {
            console.log("@Gallery 2 Initialising")
            var controller = new ScrollMagic.Controller();
            // Set Scene
            var tlsetScene = new TimelineMax();
            var galleryImages = $("#gallery2").find(".imageWrapper");
            for (i = 0; i < galleryImages.length; i++) {
                console.log(galleryImages[i]);
                global_TimelineMax = new TimelineMax();
                if (i % 2 == 0) {
                    global_TimelineMax.set(galleryImages[i], { rotation: -20, yPercent: "200%" });
                } else {
                    global_TimelineMax.set(galleryImages[i], { rotation: 20, yPercent: "180%" });
                }
                gallerySceneAction = new ScrollMagic.Scene({
                        triggerElement: '.contentHeroImageContainer',
                        triggerHook: 0.95,
                        reverse: true
                    })
                    .setTween(global_TimelineMax)
                    .addTo(controller);
                testArr[0].push(gallerySceneAction);
            }
            //   Scene Action
            for (i = 0; i < galleryImages.length; i++) {
                if (i % 2 == 0) {
                    // Delay
                    global_TimelineMax = new TimelineMax({ delay: i - i * 0.9 + 0.055 });
                } else {
                    global_TimelineMax = new TimelineMax();
                }
                global_TimelineMax.to(galleryImages[i], 1.5, { rotation: 0, yPercent: "0%" });
                gallerySceneAction = new ScrollMagic.Scene({
                        triggerElement: '#gallery2',
                        triggerHook: 0.6,
                        reverse: this.galleryAnimated
                    })
                    .setTween(global_TimelineMax)
                    .addTo(controller);
                testArr[1].push(gallerySceneAction);
            }
            // Animating Gallery on Scroll 
            var tlSceneAction2 = new TimelineMax();
            tlSceneAction2.set("#gallery2", {
                onCompleteParams: [tlSceneAction2],
                onComplete: function() {
                    setTimeout(function() {
                        $("#gallery2").addClass("carousel1TempClass")
                    }, 2000)
                }
            });
            tlSceneAction2.to("#gallery2 .imageWrapper:nth-child(1)", .1, {
                left: "0px",
                top: "0px",
                height: "auto",
                padding: "1%"
            });
            tlSceneAction2.to("#gallery2 .imageWrapper:nth-child(2)", .1, {
                left: "0px",
                top: "0px",
                height: "auto",
                padding: "1%"
            }, "-=.1");

            var scene0 = new ScrollMagic.Scene({
                    triggerElement: "#gallery2",
                    triggerHook: ".0",
                    duration: "100%"
                })
                .setPin("#gallery2")
                .setTween(tlSceneAction2)
                // .addIndicators({ name: "Gallery2  pin Trigger" })
                .addTo(controller);
        },
        cursorInit: function(event) {
            $(document).on('mousemove', function(e) {
                // $('.myDiv').css('top', e.pageY);
                // $('.myDiv').css('left', e.pageX);
                var x = e.clientX;
                var y = e.clientY;
                var newposX = x;
                var newposY = y;
                $(".myDiv").css("transform", "translate3d(" + newposX + "px," + newposY + "px,0px)");
            });
        },
        carouselInit: function(event) {
            if (global_brow_width > 992 && !this.initCarouselOnce) {
                this.initCarouselOnce = true;
                // need this function to take place only once
                var controller = new ScrollMagic.Controller();


                // Set Scene carousel 1
                // $(".carousel-inner1").addClass("m-auto")
                var tlsetScene = new TimelineMax();
                tlsetScene.set("#carousel1", {
                    opacity: 0.6,
                    scale: 0.5,
                    // // perspective(500px) translateZ(-30px) rotateY(8deg) rotateX(6deg)
                    transformPerspective: 2500,
                    translateZ: 150,
                    rotationX: 10,
                    rotationY: 30,
                    onCompleteParams: [tlsetScene],
                    onComplete: function() {
                        setTimeout(function() {
                            $("#carousel1").addClass("carousel1TempClass")
                        }, 2000)
                    }
                });
                tlsetScene.set(".carousel-inner", { boxShadow: "0 20px 20px -20px rgba(69, 44, 44, 0.85)" });
                var containerSetScene = new ScrollMagic.Scene({
                        triggerElement: '.carousel-container1',
                        triggerHook: 1.1,
                        reverse: true
                    })
                    .setTween(tlsetScene)
                    .addTo(controller);
                var tlSceneAction2 = new TimelineMax();
                tlSceneAction2.to("#carousel1", .5, {
                    ease: Linear.easeIn,
                    scale: 1,
                    opacity: 1,
                    translateZ: 0,
                    rotationX: 0,
                    rotationY: 0,
                });
                tlSceneAction2.to(".carousel-inner", .5, {
                    ease: Linear.easeIn,
                    boxShadow: "0 40px 40px -20px rgba(56, 54, 54, 0.85)"
                }, "-=.5");
                var scene0 = new ScrollMagic.Scene({
                        triggerElement: "#carousel1",
                        triggerHook: "-1",
                        duration: "100%"
                    })
                    .setPin("#carousel1", { pushfollowers: true })
                    .setTween(tlSceneAction2)
                    .addTo(controller);

                // Set Scene for second carousel
                // $(".carousel-inner2").addClass("m-auto")
                var tlSceneAction2 = new TimelineMax();
                tlSceneAction2.set("#carousel2", {
                    onCompleteParams: [tlSceneAction2],
                    onComplete: function() {
                        setTimeout(function() {
                            $("#carousel2").addClass("carousel1TempClass")
                        }, 2000)
                    }
                });
                tlSceneAction2.to(".div-left", 2.5, {
                    duration: 2.5,
                    ease: Linear.easeIn,
                    x: "-100%",
                });
                tlSceneAction2.to(".div-right", 2.5, {
                    duration: 2.5,
                    ease: Linear.easeIn,
                    x: "100%"
                }, "-=2.5");
                var scene0 = new ScrollMagic.Scene({
                        triggerElement: "#carousel2",
                        triggerHook: "-1",
                        duration: "100%"
                    })
                    .setPin("#carousel2")
                    .setTween(tlSceneAction2)
                    // .addIndicators({ name: "Carousel pin Trigger" })
                    .addTo(controller);
            }
        },
    }
    // props: ['task']
});