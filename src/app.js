let app = { 
    todos: [],

    getTitle: function () {
        let title = document.querySelector("#title");
        let result = title.innerText;
        return result;
    },

    getDescription: function () {
        let description = document.querySelector("#description");
        let result = description.innerText;
        return result;
    },

    getDate: function () {
        let dueDate = document.querySelector("#datepicker");
        let date = dueDate.value;
        console.log(typeof date);
        return date;
    },

    getPriority: function () {
        let priority = document.querySelector("#priority");
        let priorityText = priority.selectedOptions[0].innerText;
        return priorityText;
        },

    getPriorityValue: function () {
        let priority = document.querySelector("#priority");
        let optionValue = priority.selectedOptions[0].value;
        return optionValue;
        },

    createTodo: function () {
        return {
            title: this.getTitle(),
            description: this.getDescription(),
            dueDate: this.getDate(),
            priority: this.getPriority(),
            priorityValue: this.getPriorityValue(),
            };
        },
    buildTodo: function () {
        return this.todos.push(this.createTodo());
    },

    deleteTodo: function (index) {
        this.todos.splice(index, 1);
    }
}

export {app};