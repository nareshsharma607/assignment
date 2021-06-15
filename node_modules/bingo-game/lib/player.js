/* global module */

var shared = require('./shared');
var Card = require('./card');

var Player = function (name, alias) {
    var self = this;
    var cards = [];
    var limit = 10;
    var name = name || null;
    var alias = alias || null;

    self.getName = function () {
        return name;
    };

    self.getAlias = function () {
        return alias;
    };

    self.pickCard = function () {
        if (cards.length >= limit) {
            throw Error(shared.errors.max_cards_player);
        }
        var newCard = new Card();
        cards.push(newCard);
        return newCard;
    };

    self.getCards = function () {
        return cards;
    };

    self.trashCards = function () {
        cards = [];
    };

    self.resetCards = function () {
        cards.forEach(function (card) {
            card.reset();
        });
    };

    self.activateNumber = function (number) {
        return cards.forEach(function (card) {
            card.activateNumber(number);
        });
    };

    self.didWin = function () {
        return cards.some(function (card) {
            return card.didWin();
        });
    };
};
module.exports = Player;