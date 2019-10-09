import { app } from "./app";
import { render } from "./render.js";
let todos = app.todos;

let handlers = {
    consolelogger: function () {
        console.log(todos);
    },
    // todoModal: function () {
    //     let modal = document.querySelector(".todoModal");
    //     let closeButton = document.querySelector(".close-button");

    //     function toggleModal() {
    //         modal.classList.toggle("show-modal");
    //     }
    //     // function windowClick(event) {
    //     //     if (event.target === this.modal) {
    //     //         this.toggleModal();
    //     //     }
    //     // }
    //     closeButton.addEventListener("click", toggleModal());
    //     // window.addEventListener("click", windowClick(e));
    //     // return this;

    // },
    removeModal: function () {
        let modal = document.querySelector(".todoModal");
        modal.classList.remove("show-modal");
    },

    todoCloseButton: function () {
        let closeButton = document.querySelector(".close-button");
        closeButton.addEventListener("click", function () {
            handlers.removeModal();
        });
    },

    windowClick: function () {
        let modal = document.querySelector(".todoModal");
        window.addEventListener("click", function(e) {
            if (e.target === modal) {
                handlers.removeModal();
            }
        })
    },

    newToDoButton: function () {
        let button = document.querySelector("#todosButton");
        let popup = document.querySelector(".todoModal");
        button.addEventListener("click", function() {
            popup.classList.add("show-modal");
            handlers.todoCloseButton();
            handlers.submitTodo();
            handlers.windowClick();
        });
    },

    submitTodo: function () {
        let submit = document.querySelector("#submit");
        submit.addEventListener("click", function() {
            app.buildTodo();
            render.renderToDos(app.todos);
            handlers.expandTodo();
            handlers.removeModal();
        })
    },
    /* to do expansion */
    expandTodo: function () {
        let todos = document.querySelectorAll(".todo");
        todos.forEach(function(todo) {
            todo.addEventListener("click", function (e) {
                render.renderTodoDetails(e.target.data);
            })
        })
    },
    deleteTodo: function ()  {
        let button = document.querySelector("#delete");
        let index = document.querySelector("#num");
        button.addEventListener("click", function () {
            app.deleteTodo(index.valueAsNumber);
            render.renderToDos(app.todos);
        })
    }
}

export {handlers};