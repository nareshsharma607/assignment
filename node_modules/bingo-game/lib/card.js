/* global module */

var shared = require('./shared');
var CardColumn = require('./card_column');

var Card = function () {
    var self = this;

    var columns = {};
    self.getCardColumns = function () {
        return columns;
    };

    self.getCardSlots = function () {
        var card_slots = [];
        Object.keys(columns).forEach(function (type) {
            columns[type].getCardSlots().forEach(function (card_slot) {
                card_slots.push(card_slot);
            });
        });

        return card_slots;
    };

    self.getNumbers = function () {
        return self.getCardSlots().map(function (card_slot) {
            return card_slot.getNumber();
        });
    };

    self.activateNumber = function (number) {
        return columns[shared.number2type(number)].activateNumber(number);
    };

    self.didWin = function () {
        var arr = cardSlotStateToArray();
        var won = matchesWinningPattern(arr);

        return won;
    };

    self.reset = function () {
        return self.getCardSlots().forEach(function (cardSlot) {
            cardSlot.deactivate();
        });
    };

    function cardSlotStateToArray() {
        var arr = [];
        self.getCardSlots().forEach(function (slot) {
            arr.push(slot.getState() ? 1 : 0);
        });
        return arr;
    }

    function matchesWinningPattern(arr) {
        var won = false;
        shared.winnings.forEach(function (pattern) {
            var matches = true;
            pattern.forEach(function (targetIndex) {
                if (arr[targetIndex] !== 1) {
                    matches = false;
                }
            });
            if (matches) {
                won = true;
            }
        });
        return won;
    }

    function generateColumns() {
        columns = {};
        var column;
        'bingo'.split('').forEach(function (type, index) {
            column = new CardColumn(type);
            columns[column.getType()] = column;
        });
    }

    generateColumns();
};
module.exports = Card;