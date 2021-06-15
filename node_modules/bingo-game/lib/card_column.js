/* global module */

var shared = require('./shared');
var CardSlot = require('./card_slot');

var CardColumn = function (str) {
    var self = this;
    if (typeof str !== 'string') {
        throw(Error(shared.errors.missing_argument));
    }

    if (shared.types().indexOf(str.toUpperCase()) === -1) {
        throw(Error(shared.errors.wrong_type));
    }

    var type = str.toUpperCase();
    var slots = [];
    var num_slots = (type === 'N') ? 4 : 5;

    self.getType = function () {
        return type;
    };

    self.getCardSlots = function () {
        return slots;
    };

    self.getNumbers = function () {
        return slots.map(function (slot) {
            return slot.getNumber();
        });
    };

    self.activateNumber = function (number) {
        var found = false;
        slots.forEach(function (slot) {
            if (slot.getNumber() === number) {
                found = true;
                slot.activate();
            }
        });
        return found;
    };

    function generateSlots() {
        slots = [];
        for (var i = 0; i < num_slots; i++) {
            slots[i] = new CardSlot(type, self.getNumbers());
        }
        slots = slots.sort(function (a, b) {
            return a.getNumber() - b.getNumber();
        });
    }

    generateSlots();
};
module.exports = CardColumn;