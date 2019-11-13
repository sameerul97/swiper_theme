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

        project: function(newVal, oldVal) { // watch it


            console.log('Prop changed: ', newVal, ' | was: ', oldVal, this.project);
            // console.log(store.getters.getInfoData);
            this.projectTitle = store.getters.getInfoData(this.project);
            this.galleryInit();
            this.smgInitContentHeroImage();
            this.cursorInit();
            this.smgInitGallery();
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

            $(".imageWrapperGridStyle").addClass("imageWrapper");
            $(".imageWrapper").removeClass("imageWrapperGridStyle")

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

            // })
        },
        galleryInit: function() {
            document.getElementById("gallery").addEventListener("click", function() {
                    // var scene = document.getElementById('js-scene');
                    // parallax = new Parallax(scene);
                    parallax.destroy();
                    parallax = null;
                    // this.galleryAnimated = false;
                    var tl0 = new TimelineMax();
                    $(".heroImageAnim").removeClass("heroImageAnim")

                    $(".imageWrapper").addClass("imageWrapperGridStyle");


                    // $(".imageWrapper").css({
                    //         transition: "all 0.3s ease",
                    //         left: "0px",
                    //         top: "0px",
                    //         height: "auto",
                    //         padding: "1%",
                })
                // tl0.to('.imageWrapper', 1, {
                //     duration: 1,
                //     ease: Expo.easeInOut,
                //     left: "0px",
                //     top: "0px",
                //     height: "auto",
                //     padding: "1%",
                //     // position: "",
                // }, "-=1");
                // });

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
                var tlSceneAction = new TimelineMax();

                if (i % 2 == 0) {
                    tlsetScene.set(galleryImages[i], { rotation: 20, yPercent: "200%" });
                } else {
                    tlsetScene.set(galleryImages[i], { rotation: -20, yPercent: "180%" });
                }
                var containerSetScene = new ScrollMagic.Scene({
                        triggerElement: '.contentHeroImageContainer',
                        triggerHook: 0.95,
                        reverse: true
                    })
                    .setTween(tlsetScene)
                    // .addIndicators()
                    .addTo(controller);
            }


            //   Scene Action
            for (i = 0; i < galleryImages.length; i++) {
                if (i % 2 == 0) {
                    // Delay
                    var tlSceneAction = new TimelineMax({ delay: i - i * 0.9 + 0.055 });
                } else {
                    var tlSceneAction = new TimelineMax();
                }
                // var reverse = (this.galleryAnimated) ? false : true;
                // console.log(reverse)
                tlSceneAction.to(galleryImages[i], 1.5, { rotation: 0, yPercent: "0%" });
                var containerSceneAction = new ScrollMagic.Scene({
                        triggerElement: '#gallery',
                        triggerHook: 0.6,
                        reverse: this.galleryAnimated
                    })
                    .setTween(tlSceneAction)
                    // .addIndicators()
                    .addTo(controller);

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
        }

    }
    // props: ['task']
});