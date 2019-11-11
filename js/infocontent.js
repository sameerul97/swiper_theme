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
        }
    }
    // props: ['task']
});