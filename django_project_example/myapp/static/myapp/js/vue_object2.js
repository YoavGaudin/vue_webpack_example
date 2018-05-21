new Vue({
    delimiters: ['[[', ']]'],
    el: '#app2',
    data: {
        title: 'World!'
    },
    methods: {
        changeTitle: function(event){
            this.title = event.target.value;
        }
    }
});