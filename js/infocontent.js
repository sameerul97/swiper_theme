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
            this.galleryInit();
            this.smgInitContentHeroImage();
            // this.cursorInit();
            this.smgInitGallery();
            this.carouselInit();
            // Initiate gallery once the project is loaded
            console.log($("#gallery").outerHeight())

            // $("#gallery").css({ "height": $("#gallery").outerHeight() * 1.2 + "px" })
            // $("#gallery").css({ "margin-top": $("#gallery").height() / 7 + "px" })
            // $("#gallery").css({ "margin-bottom": $("#gallery").height() / 7 + "px" })
            // this.imgData = store.getters.getSwiperAnimData;
            // console.log(store.getters.getSwiperAnimData)
            // console.log(this.imgData, this.projectTitle)
            // console.log(store.getters.getInfoData(this.project))
            // console.log(store.getters.getSwiperAnimData.imgData.imgBgPosition);
            // this.project = store.getters.getInfoData.header;
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
        // this.swiper_list = store.getters.getSwiperInitialData;
        // console.log(store.state.data[0].imageId_classname)
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
            var scene = document.getElementById('js-scene');
            parallax = new Parallax(scene, {
                selector: '.layer',
                hoverOnly: true
            });
            var tempHeight = $("#gallery").outerHeight();
            $("#gallery").css({ "height": tempHeight * 2 + "px" })
            $("#js-scene").css({ "height": tempHeight * 2 + "px" })
            $("#gallery").css({ "margin-top": tempHeight / 7 + "px" })
            $("#gallery").css({ "margin-bottom": tempHeight / 7 + "px" })
            $(".slideContainer").attr("style", previousCss ? previousCss : "");
            // })
        },
        galleryInit: function() {
            // var scene = document.getElementById('js-scene');
            // parallax = new Parallax(scene);
            document.getElementById("gallery").addEventListener("click", function() {
                // var scene = document.getElementById('js-scene');
                // parallax = new Parallax(scene);
                parallax.destroy();
                parallax = null;
                this.galleryAnimated = false;
                global_TimelineMax = new TimelineMax();
                $(".heroImageAnim").removeClass("heroImageAnim")

                global_TimelineMax.to('.imageWrapper', 1, {
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
                    triggerHook: 0.7,
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
                        triggerHook: 0.4,
                        reverse: this.galleryAnimated
                    })
                    .setTween(global_TimelineMax)
                    // .addIndicators()
                    .addTo(controller);
                testArr[1].push(gallerySceneAction);


            }
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
            var controller = new ScrollMagic.Controller();

            // var previousCss = $(".slideContainer").attr("style");
            // $(".slideContainer").css({
            //     // position: 'absolute', // Optional if #myDiv is already absolute
            //     visibility: 'hidden',
            //     display: 'block'
            // });
            // var tempCarouselHeight;
            // console.log($(".carousel-container").outerHeight())
            // console.log($(".carousel-inner").outerHeight())
            // console.log($(".carousel-inner").position().left)
            // console.log($(".carousel-inner").position().top);
            // tempCarouselHeight = $(".carousel-inner").outerHeight();
            // $(".slideContainer").attr("style", previousCss ? previousCss : "");



            // Set Scene
            $(".carousel-inner1").addClass("m-auto")

            var tlsetScene = new TimelineMax();
            tlsetScene.set("#carousel1", { scale: "0.45", opacity: 0.3 });
            var containerSetScene = new ScrollMagic.Scene({
                    triggerElement: '.carousel-container1',
                    triggerHook: 0.99,
                    reverse: true
                })
                .setTween(tlsetScene)
                // .addIndicators()
                .addTo(controller);


            var tlSceneAction2 = new TimelineMax();

            tlSceneAction2.to("#carousel1", .5, {
                scale: 1,
                opacity: 1
            });
            var scene0 = new ScrollMagic.Scene({
                    triggerElement: "#carousel1",
                    triggerHook: "-1",
                    duration: "100%"
                })
                .setPin("#carousel1")
                .setTween(tlSceneAction2)
                // .addIndicators({ name: "Carousel pin Trigger" })
                .addTo(controller);


            // Set Scene for second carousel
            $(".carousel-inner2").addClass("m-auto")

            // var tlsetScene = new TimelineMax();
            // tlsetScene.set("#carousel2", { scale: "0.45", opacity: 0.3 });
            // var containerSetScene = new ScrollMagic.Scene({
            //         triggerElement: '.carousel-container2',
            //         triggerHook: 0.99,
            //         reverse: true
            //     })
            //     .setTween(tlsetScene)
            //     // .addIndicators()
            //     .addTo(controller);


            var tlSceneAction2 = new TimelineMax();

            tlSceneAction2.to(".div-left", .5, {
                duration: .5,
                ease: Expo.easeInOut,
                x: "-100%"
                    // opacity: 1
            });
            tlSceneAction2.to(".div-right", .5, {
                duration: .5,
                ease: Expo.easeInOut,
                x: "100%"
                    // opacity: 1
            }, "-=.5");
            var scene0 = new ScrollMagic.Scene({
                    triggerElement: "#carousel2",
                    triggerHook: "-1",
                    duration: "100%"
                })
                .setPin("#carousel2")
                .setTween(tlSceneAction2)
                // .addIndicators({ name: "Carousel pin Trigger" })
                .addTo(controller);




            // $("#infoSlideBackgroundimage").css({ "transition": "all 0.3s ease 0s" })
            // var tlSceneAction2 = new TimelineMax();
            // tlSceneAction2.to("#infoSlideBackgroundimage", .3, {
            //     scale: 1.1,
            //     yPercent: "10%"
            // });
            // tlSceneAction2.to("#infoSlideBackgroundimage", .3, {
            //     scale: 1.2,
            //     yPercent: "15%"
            // });
            // tlSceneAction2.to("#infoSlideBackgroundimage", .3, {
            //     scale: 1.3,
            //     yPercent: "20%"
            // });
            // var slideHeroImageScene = new ScrollMagic.Scene({
            //         triggerElement: ".contentHeroImageContainer",
            //         duration: "70%",
            //         triggerHook: 0.80
            //     })
            //     // .addIndicators()
            //     .setTween(tlSceneAction2)
            //     .addTo(controller);


            // var controller = new ScrollMagic.Controller();
            // // Set Scene
            // var tlsetScene = new TimelineMax();
            // tlsetScene.set(".contentHeroImage", { rotation: 20, yPercent: "90%" });
            // var containerSetScene = new ScrollMagic.Scene({
            //         triggerElement: '.contentHeroImageContainer',
            //         triggerHook: 0.95,
            //         reverse: true
            //     })
            //     .setTween(tlsetScene)
            //     // .addIndicators()
            //     .addTo(controller);

            // // Scene Action
            // var tlSceneAction = new TimelineMax();
            // tlSceneAction.to(".contentHeroImage", 1, { rotation: 0, yPercent: "0%" });
            // var containerSceneAction = new ScrollMagic.Scene({
            //         triggerElement: '.contentHeroImageContainer',
            //         triggerHook: 0.7,
            //         reverse: true
            //     })
            //     .setTween(tlSceneAction)
            //     // .addIndicators()
            //     .addTo(controller);

        },

    }
    // props: ['task']
});