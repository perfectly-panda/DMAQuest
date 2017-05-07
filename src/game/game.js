import { PlotItems } from './data/plot';
import { Tabs } from './data/tabs';
import { Story } from './data/story';
import { ResourceItems } from './data/resources';
import Checks from './logic/checks';
import PlayerActions from './logic/playerActions';
var Game = (function () {
    function Game() {
        this.actions = new PlayerActions();
        this.plot = PlotItems;
        this.tabs = Tabs;
        this.story = Story;
        this.resources = ResourceItems;
        this.initalize = function () {
            this._load();
            if (this._loaded) {
                console.log('starting game');
                this.start();
            }
            else {
                throw new Error("cannot start game until data is loaded");
            }
        };
        this.start = function () {
            this._running = true;
            this._run();
        };
        this.stop = function () {
            this._running = false;
        };
        this.isRunning = function () {
            return this._running;
        };
        this._loaded = false;
        this._running = false;
        this._tickCount = 0;
        this._load = function () {
            // TODO check for saved data
            this._loaded = true;
        };
        this._run = function () {
            if (this._running) {
                var that = this;
                setTimeout(function () {
                    that._tickCount++;
                    //that.updateResourceValues()
                    if (that._tickCount % 2 === 0) {
                        Checks.purchasable(that);
                    }
                    if (that._tickCount % 7 === 0) {
                        Checks.available(that);
                    }
                    if (that._tickCount % 10 === 0) {
                        //that.updateResourceCalculations()
                        that._tickCount = 0;
                    }
                    that._run();
                }, 200);
            }
        };
    }
    return Game;
}());
export default Game;
//# sourceMappingURL=game.js.map