var store = new Vuex.Store({
    state: {
        myVariable: "Test data 1",
        swiper_anim_data: {
            // Imgdata holds the selected item CSS props
            cssProps: {
                imgHeight: "",
                imgWidth: "",
                imgTop: "",
                imgLeft: "",
                imgBgPosition: "",
                imgScale: ""
            },
            fontSize: "",
            // Chosen swiperId
            swiper_slider_id: "",
            // Move previous three slides and the next three slides before animating the clicked Image
            firstThree: [],
            nextThree: [],
        },
        data: [{
            // imgSrc: 'img/seoul2.jpg',
            imgSrc: 'img/seoul2.jpg',
            swiper_id: 'swiper-slide-1',
            wrapper_id: 'wrapper1',
            imageId_classname: 'bg1',
            header: "Seoul"
        }, {
            imgSrc: 'img/ny_city2.jpeg',
            swiper_id: 'swiper-slide-2',
            wrapper_id: 'wrapper2',
            imageId_classname: 'bg2',
            header: "New York"
        }, {
            imgSrc: 'img/france2.jpg',
            swiper_id: 'swiper-slide-3',
            wrapper_id: 'wrapper3',
            imageId_classname: 'bg3',
            header: "France"
        }, {
            imgSrc: 'img/airplane.jpg',
            swiper_id: 'swiper-slide-4',
            wrapper_id: 'wrapper4',
            imageId_classname: 'bg4',
            header: "New Jersey"
        }, {
            imgSrc: 'img/granc_c2.jpg',
            swiper_id: 'swiper-slide-5',
            wrapper_id: 'wrapper5',
            imageId_classname: 'bg5',
            header: "Grand Canyon"
        }, {
            imgSrc: 'img/nike2.jpg',
            swiper_id: 'swiper-slide-6',
            wrapper_id: 'wrapper6',
            imageId_classname: 'bg6',
            header: "Nike"
        }, {
            imgSrc: 'img/granc_c2.jpg',
            swiper_id: 'swiper-slide-7',
            wrapper_id: 'wrapper7',
            imageId_classname: 'bg7',
            header: "Grand Canyon"
        }]
    },
    getters: {
        getData: function(state) {
            return state.myVariable;
        },
        getSwiperInitialData: function(state) {
            return state.data;
        },
        getSwiperAnimData: function(state) {
            return state.swiper_anim_data;
        },
        getInfoData: function(state) {
            return function(param) {
                for (var i = 0; i < state.data.length; i += 1) {
                    if (state.data[i]["imageId_classname"] === param) {
                        return state.data[i].header;
                    }
                }
                return -1;
            };
        },
    },
    mutations: {
        addToArray: function(state, value) {
            state.myVariable = value;
        },
        // Requires payload as params
        setCssProps: function(state, payload) {
            Vue.set(state.swiper_anim_data, 'cssProps', payload)
        },
        setChosenSwiperId: function(state, payload) {
            Vue.set(state.swiper_anim_data, 'swiper_slider_id', payload)
        },
        setPrevAndNextThreeSlides: function(state, payload) {
            Vue.set(state.swiper_anim_data, 'firstThree', payload[0][0])
            Vue.set(state.swiper_anim_data, 'nextThree', payload[1][0])
        }
    },
    // actions: {
    //     addToArray: function(context) {
    //         console.log(context);
    //         context.commit('addToArray');
    //     }
    // }
});