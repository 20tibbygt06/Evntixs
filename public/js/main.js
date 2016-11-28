var config = {
    apiKey: "AIzaSyD3WTYC3FGiaxBJ0JgRAzDoZqmGVuac9Vc",
    authDomain: "evntixs.firebaseapp.com",
    databaseURL: "https://evntixs.firebaseio.com",
};
firebase.initializeApp(config);

var evntsRef = firebase.database().ref('evnts');

var app = new Vue({
    el: '#app',
    data: {
        newEvnt: {
            name: '',
            description: '',
            venue: '',
            zipcode: '',
            date: '',
            time: '',
            email: '',
        }
    },
    firebase: {
        evnts: evntsRef
    },
    methods: {
      addEvnt: function () {
          evntsRef.push(this.newEvnt)
          this.newEvnt.name = ''
          this.newEvnt.description = ''
          this.newEvnt.venue = ''
          this.newEvnt.zipcode = ''
          this.newEvnt.date = ''
          this.newEvnt.time = ''
          this.newEvnt.email = ''
      },
    }
})
