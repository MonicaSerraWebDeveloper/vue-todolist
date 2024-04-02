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
        newObjectList: {
            text: '',
            done: false
        },

    }
  },
  methods: {
    removeList: function(listIndex) {
        this.todo.splice(listIndex, 1)
    },

    addNewList: function() {
        this.todo.push(this.newObjectList)
    }
  },
}).mount('#app')