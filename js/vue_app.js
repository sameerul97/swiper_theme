// // Locally Registered Component
// var localComponent = {
//     props: ["test"],
//     template: `
//       <div class="local-component">
//         <div class="row">
//           <div class="col-xs-12">
//             <h2>Local Component</h2>
//             <p>{{test}}</p>
//           </div>
//         </div>
//       </div>
//     `
// };


myObject = new Vue({
    components: {
        // <local-component> will only be available in this parent template
        // "local-component": localComponent
    },
    el: '#app',
    data: {
        selectedId: null,
        swiper_list: null,
        bgOpacity: "linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),"

    },
    methods: {
        sendData: function(id) {
            console.log(id);
            this.selectedId = id;
        }
    },
    mounted: function() {
        this.swiper_list = store.getters.getSwiperInitialData;
        // var imgDate;





        // store.dispatch('addToArray')
        // store.commit('addToArray', 10)
        // console.log(store.getters.getData);
        // console.log(store.getters.getSwiperAnimData);

        // store.dispatch('addToArray', 20)
        // store.actions.addToArray;
        // console.log(store.state.data[0].imageId_classname);
    },
})