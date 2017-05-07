import { PlotItems } from './data/plot';
import { Tabs } from './data/tabs';
import { Story } from './data/story';
import { ResourceItems } from './data/resources';
import Checks from './checks';
var Game = (function () {
    function Game() {
        this.loaded = false;
        this.running = false;
        this.tickCount = 0;
        this.plot = PlotItems;
        this.tabs = Tabs;
        this.story = Story;
        this.resources = ResourceItems;
        this.load = function () {
            // TODO check for saved data
            this.tabs.story.visible = true;
            this.plot.wait.visible = true;
            this.loaded = true;
        };
        this.game = function () {
            if (this.loaded) {
                console.log('starting game');
                this.start();
            }
            else {
                throw new Error("cannot start game until data is loaded");
            }
        };
        this.start = function () {
            this.running = true;
            this.run();
        };
        this.stop = function () {
            this.running = false;
        };
        this.isRunning = function () {
            return this.running;
        };
        this.run = function () {
            if (this.running) {
                var that = this;
                setTimeout(function () {
                    that.tickCount++;
                    that.updateResourceValues();
                    if (that.tickCount % 2 === 0) {
                        Checks.purchasable(that);
                    }
                    if (that.tickCount % 7 === 0) {
                        Checks.available(that);
                    }
                    if (that.tickCount % 10 === 0) {
                        that.updateResourceCalculations();
                        that.tickCount = 0;
                    }
                    that.run();
                }, 200);
            }
        };
        this.updateResourceValues = function () {
            // console.log('update resource values')
        };
        this.updateResourceCalculations = function () {
            // console.log('update resource calculations')
        };
    }
    return Game;
}());
export default Game;
//# sourceMappingURL=game.js.map