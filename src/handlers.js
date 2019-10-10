import { app } from "./app";
import { render } from "./render.js";
let todos = app.todos;

let handlers = {
    consolelogger: function () {
        console.log(todos);
    },

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
            console.log(app.todos);
            popup.classList.add("show-modal");
            handlers.todoCloseButton();
            // handlers.submitTodo();
            handlers.windowClick();
        });
    },

    submitTodo: function () {
        let submit = document.querySelector("#submit");
        submit.addEventListener("click", function() {
            console.log(app.todos);
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
        let buttons = document.querySelectorAll(".deleteButton")
        for (let i = 0; i<buttons.length; i++) {
            buttons[i].data = i;
            buttons[i].addEventListener("click", function(e) {
                app.deleteTodo(e.target.data);
                render.renderToDos();
            });
        }
    },
    newProjectButton: function () {
        let button = document.querySelector("#newProjectButton");
        let inputDiv = document.querySelector("#sidebarInput");
        button.addEventListener("click", function() {
            console.log("clicked");
            inputDiv.classList.remove("invisible");

        }) 
    }
}

export {handlers};
