let DOM = {
    /* grab screen */
    content: document.querySelector("#content"),
    container: document.createElement("div"),
    newTodoContainer: document.createElement("div"),

    /* build sidebar */
    sidebar: document.createElement("div"),
    sidebarHeader: document.createElement("div"),
    sidebarTitle: document.createElement("h3"),
    sidebarButton: document.createElement("button"),
    sidebarProjects: document.createElement("div"),
    sidebarProjectsAll: document.createElement("div"),

    /* build todosContainer */
    todosContainer: document.createElement("div"),
    todosHeader: document.createElement("div"),
    todosTitle: document.createElement("h3"),
    todosButton: document.createElement("button"),
    todoList: document.createElement("div"),

    /* set ids for css */
    styleApp: function () {
        this.sidebar.id = "sidebar";
        this.sidebarHeader.id = "sidebarHeader";
        this.sidebarProjects.id = "sidebarProjects";
        this.sidebarProjectsAll.setAttribute("class", "project");
        this.todosContainer.id = "todosContainer";
        this.todosHeader.id = "todosHeader";
        this.todosTitle.id = "todosTitle";
        this.todosButton.id = "todosButton";
        this.newTodoContainer.id = "newTodoContainer";
        this.newTodoContainer.setAttribute("class", "invisible");
    },

    temporaryDelete: function () {
        let cont = document.createElement("div");
        let num = document.createElement("input");
        let button = document.createElement("button");
        num.setAttribute("type", "number");
        num.id = "num";
        button.id = "delete";
        button.innerText = "delete";
        cont.appendChild(num);
        cont.appendChild(button);
        return cont;
    },

    drawApp: function () {
        /* set text */
        this.sidebarTitle.innerText = "Projects";
        this.sidebarButton.innerText = "New";
        this.sidebarProjectsAll.innerText = "All";
        this.todosTitle.innerText = "To Do";
        this.todosButton.innerText = "New";

        this.content.appendChild(this.container);
        /* new todo container might need to be moved */
        /* display none !important worked */
        // this.content.appendChild(this.newTodoContainer);

        this.container.appendChild(this.sidebar);

        /* draw sidebar */
        this.sidebar.appendChild(this.sidebarHeader);
        this.sidebarHeader.appendChild(this.sidebarTitle);
        this.sidebarHeader.appendChild(this.sidebarButton);
        this.sidebar.appendChild(this.sidebarProjects);
        this.sidebarProjects.appendChild(this.sidebarProjectsAll);

        /* draw todosContainer */
        this.container.appendChild(this.todosContainer);
        this.todosContainer.appendChild(this.todosHeader);
        this.todosHeader.appendChild(this.todosTitle);
        this.todosHeader.appendChild(this.todosButton);
        this.todosContainer.appendChild(this.todoList);

        this.styleApp();
        /* temp delete */

        let temp = this.temporaryDelete();
        this.container.appendChild(temp);
    },

    init: function () {
        this.drawApp();
    }
}

export {DOM};
