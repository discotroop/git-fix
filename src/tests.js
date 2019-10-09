let testObj = {
    arr: ["one", "two"],
    func: function () {
        console.log(this.arr[1]);
    },
    extend: function () {
        this.arr.push("tests");
    }
}

export {testObj};


// function drawApp() {
//     /* Populate Screen */
//     let content = document.querySelector("#content");
//     let container = document.createElement("div");
//     content.appendChild(container);

//     /* Draw sidebar */
//     let sidebar = document.createElement("div");
//     container.appendChild(sidebar);

//     let sidebarHeader = document.createElement("div");
//     sidebar.appendChild(sidebarHeader);

//     let sidebarTitle = document.createElement("h3");
//     sidebarTitle.innerText = "Projects";
//     sidebarHeader.appendChild(sidebarTitle);

//     let sidebarButton = document.createElement("button");
//     sidebarButton.innerText = "New";
//     sidebarHeader.appendChild(sidebarButton);


//     let sidebarProjects = document.createElement("div");
//     sidebar.appendChild(sidebarProjects);

//     let sidebarProjectsAll = document.createElement("div");
//     sidebarProjectsAll.innerText = "All";
//     sidebarProjects.appendChild(sidebarProjectsAll);

//     /* general styling */
//     let buttonStyle = document.createElement("style");
//     buttonStyle.setAttribute("type", "text/css");
//     buttonStyle.innerHTML = (".button {background-color: whitesmoke;" +
//         "border-radius: 25px;" +
//         "border-style: solid;}" +
//         "button:hover {background-color:lightsteelblue}"
//         );
//     content.appendChild(buttonStyle);

//     let projectsStyle = document.createElement("style");
//     projectsStyle.setAttribute("type", "text/css");
//     projectsStyle.innerHTML = (".project {padding: 3%;}" +
//         ".project:hover {background-color: #DEB0C4;" +
//         "border-radius: 25px; text-align: center;" +
//         "width: 75%;}"
//     );
//     content.appendChild(projectsStyle);

//     /* Sidebar Styling */
//     content.setAttribute("style", "font-family: arial");
//     container.setAttribute("style", "display: grid;" + 
//         "grid-template-columns: repeat(20, 1fr);" + 
//         "grid-template-rows: repeat(10, 1fr);height: 100vh;"
//         );
//     sidebar.setAttribute("style", "padding: 20px;" + 
//         "grid-column-start: 1;" +
//         "grid-column-end: 5;" +
//         "grid-row-start: 1;" +
//         "grid-row-end: 10;"
//         );
//     sidebarHeader.setAttribute("style", "display: grid;" +
//         "grid-template-columns: 5;" +
//         "grid-template-rows: 1;)"
//         );
//     sidebarTitle.setAttribute("style", "grid-column-start: 1;" +
//         "grid-column-end: 2"
//         );
//     sidebarButton.setAttribute("style", "grid-column-start: 4;" +
//         `${buttonStyle}`
//         );
//     sidebarButton.setAttribute("class", "button");
//     sidebarProjects.setAttribute("style", "padding: 20px;" );
//     sidebarProjectsAll.setAttribute("class", "project");
    
//     /* draw todos Container */ 
//     let todosContainer = document.createElement("div");
//     container.appendChild(todosContainer);

//     let todosHeader = document.createElement("div");
//     todosContainer.appendChild(todosHeader);

//     let todosTitle = document.createElement("h3");
//     todosTitle.innerText = "To Do";
//     todosHeader.appendChild(todosTitle);

//     let todosButton = document.createElement("button");
//     todosButton.innerText = "New";
//     todosHeader.appendChild(todosButton);

//     let todoList = document.createElement("div");
//     todoList.id = "todoList";
//     todosContainer.appendChild(todoList);

//     /* todos container styling */
//     todosContainer.setAttribute("style", "padding: 20px;" +
//         "grid-column-start: 5;" +
//         "grid-column-end: 15;" +
//         "grid-row-start: 1;" +
//         "grid-row-end: 10;" +
//         "border-left-style: solid;" +
//         "border-left-color: black;" +
//         "border-left-width: 3px;"
//         );
//     todosHeader.setAttribute("style", "display: grid;" +
//         "grid-template-columns: 11;" +
//         "grid-template-rows: 1;"
//         );
//     todosTitle.setAttribute("style", "grid-column-start: 5;" +
//         "grid-column-end: 5;"
//         );
//     todosButton.setAttribute("style", "grid-column-start: 9;" +
//         "grid-column-end: 11;"
//         );
//     todosButton.setAttribute("class", "button");
    
    


// }