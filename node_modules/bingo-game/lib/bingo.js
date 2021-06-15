/* global module */

var shared = require('./shared');
var Player = require('./player');
var NumberPicker = require('./number_picker');

var Bingo = function (config) {
    config = Array.isArray(config) ? config : [{}, {}];
    if (!Array.isArray(config)) {
        throw(Error(shared.errors.wrong_type_bingo));
    }

    var self = this;
    var numberPicker = new NumberPicker();
    var players = [];
    makePlayers();

    self.getPlayers = function () {
        return players;
    };

    self.getPlayer = function (index) {
        index = parseInt(index);
        if (index < 0 || index > (players.length - 1)) {
            throw(Error(shared.errors.number_out_of_range));
        }
        return players[index];
    };

    self.pick = function () {
        return numberPicker.pick();
    };

    self.getPicked = function () {
        return numberPicker.getPicked();
    };

    self.getPickedNumbers = function () {
        return numberPicker.getPickedNumbers();
    };

    function makePlayers() {
        players = [];
        config.forEach(makePlayer);
    }

    function makePlayer(details, index) {
        details.cards = parseInt(details.cards) || 2;
        details.name = details.name || 'Player #' + (index + 1);
        details.alias = 'Player #' + (index + 1);
        var player = new Player(details.name, details.alias);
        for (var i = 0; i < details.cards; i++) {
            player.pickCard();
        }
        players[index] = player;
    }
};
module.exports = Bingo;