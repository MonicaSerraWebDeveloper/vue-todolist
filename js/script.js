const { createApp } = Vue;

createApp({
  data() {
    return {
        todo: [
            {
                text: 'Fare i compiti',
                done: true
            },
            {
                text: 'Fare la spesa',
                done: false
            },
            {
                text: 'Fare il bucato',
                done: true
            },
        ],
        textInput: '',
    }
  },
  methods: {
    removeList: function(listIndex) {
        this.todo.splice(listIndex, 1)
    },

    addNewList: function() {
        if (this.textInput.length >= 5) {
            this.todo.push(
                 {
                    text: this.textInput,
                    done: false
                 }
            ),
            this.textInput = ''
        }

    }
  },
}).mount('#app')