import{DOM} from "./initial.js";
import {render} from "./render.js";
import{app} from "./app.js"
import{handlers} from "./handlers.js";
import{time} from "./time.js";
let moment = require ('moment');
console.log(moment().toString())
DOM.init();
time.test();

render.renderToDos(app.todos);
handlers.newToDoButton();
handlers.submitTodo();
handlers.deleteTodo();

// time.test();

// handlers.expandTodo();

// app.deleteTodo(1);


// To Do
// set priority
// set date/time
    // use moment.js 
    /// https://www.sitepoint.com/managing-dates-times-using-moment-js/