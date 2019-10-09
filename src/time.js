const moment = require ('moment');
let now = moment()

let time = {
    test: function () {
        let day = now.get('day');
        console.log(day);
    }
}

export { time }