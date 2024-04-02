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
        ]
    }
  },
  methods: {
    removeList: function(listIndex) {
        this.todo.splice(listIndex, 1)
    }
  },
}).mount('#app')