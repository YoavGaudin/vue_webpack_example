new Vue({
    delimiters: ['[[', ']]'],
    el: '#app',
    data: {
        title: 'Hello World!'
    },
    methods: {
        changeTitle: function(event){
            this.title = event.target.value;
        }
    }
});