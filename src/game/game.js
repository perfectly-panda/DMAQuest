import { PlotItems } from './data/plot';
import { Tabs } from './data/tabs';
var Game = (function () {
    function Game() {
        this.loaded = false;
        this.running = false;
        this.tickCount = 0;
        this.load = function () {
            // TODO stuff
            console.log('loading game');
            this.plot = PlotItems;
            this.tabs = Tabs;
            this.tabs.story.visible = true;
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