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
handlers.deleteTodo();
handlers.submitTodo();

// PRIORITIES //
// 1, set projects
// 2. render todos by project
// 3. make sure you can edit todo from expanded view

/* that's the basic functionality it HAS to have */


// then move on to refining. at this point this project has sucked a lot of time
// and I lost a week to vacation so I just need to be moving on. can always tweak it as time
// goes on ... end story is finalize this by monday at latest and move on!

// set priority
// set date/time
    // use moment.js 
    /// https://www.sitepoint.com/managing-dates-times-using-moment-js/
// add projects
// add local storage memory
// rework css on todoModal.
    // maybe css grid... this shit sucks!