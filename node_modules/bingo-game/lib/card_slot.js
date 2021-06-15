/* global module */

var shared = require('./shared');

var CardSlot = function (str, column_numbers) {
    column_numbers = column_numbers || [];
    if (typeof str !== 'string') {
        throw(Error(shared.errors.missing_argument));
    }

    if (shared.types().indexOf(str.toUpperCase()) === -1) {
        throw(Error(shared.errors.wrong_type));
    }

    if (column_numbers.length > 15) {
        throw(Error(shared.errors.max_num_slots));
    }

    var type = str.toUpperCase();
    var range = shared.ranges[type];
    var number = generateNumber();
    var is_active = false;

    this.getType = function () {
        return type;
    };

    this.getNumber = function () {
        return number;
    };

    this.getState = function () {
        return is_active;
    };

    this.activate = function () {
        is_active = true;
    };

    this.deactivate = function () {
        is_active = false;
    };

    function generateNumber() {
        var num;
        do {
            num = generateRandomWithInRange(range.min, range.max);
        } while (column_numbers.indexOf(num) > -1);
        return num;
    }
};

function generateRandomWithInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
;

module.exports = CardSlot;