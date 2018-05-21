new Vue({
    delimiters: ['[[', ']]'],
    el: '#app1',
    data: {
        title: 'Hello!'
    },
    methods: {
        changeTitle: function(event){
            this.title = event.target.value;
        }
    }
});