/* global module */

var shared = require('./shared');

var NumberPicker = function () {
    var self = this;
    var unpicked = [];
    var picks = [];

    self.pick = function () {
        var index = Math.floor(Math.random() * unpicked.length);
        var picked = {
            number: unpicked[index],
            type: shared.number2type(unpicked[index])
        };
        unpicked.splice(index, 1);
        picks.push(picked);
        return picked;
    };

    self.getPicked = function () {
        return picks;
    };

    self.getPickedNumbers = function () {
        return picks.map(function (picked) {
            return picked.number;
        });
    };

    function init() {
        unpicked = Array(90).fill(0).map((e, i) => i + 1);
        picks = [];
    }
    init();
};

module.exports = NumberPicker;
