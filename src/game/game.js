import { PlotItems } from './data/plot';
import { Tabs } from './data/tabs';
import { Story } from './data/story';
import { ResourceItems } from './data/resources';
import { UpgradeItems } from './data/upgrades';
import { ShopItems } from './data/shop';
import { VillageItems } from './data/village';
import { QuestItems } from './data/quests';
import Checks from './logic/checks';
import Calculator from './logic/calculator';
import PlayerActions from './logic/playerActions';
import ResourceTick from './logic/resourceTick';
var Game = (function () {
    function Game() {
        this.actions = new PlayerActions();
        this.initalize = function () {
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
            if (localStorage.getItem("baseData") == null) {
                var saveData = {
                    plot: PlotItems,
                    tabs: Tabs,
                    story: Story,
                    resources: ResourceItems,
                    upgrades: UpgradeItems,
                    shop: ShopItems,
                    village: VillageItems,
                    quests: QuestItems
                };
                localStorage.setItem("baseData", btoa(JSON.stringify(saveData)));
            }
            var data = localStorage.getItem('gameData');
            if (data != null) {
                this.load(data);
            }
            else {
                data = localStorage.getItem("baseData");
                this.load(data);
            }
            this._loaded = true;
        };
        this._run = function () {
            if (this._running) {
                var that = this;
                setTimeout(function () {
                    that._tickCount++;
                    that._updateResourceValues();
                    if (that._tickCount % 2 === 0) {
                        Checks.purchasable(that);
                    }
                    if (that._tickCount % 7 === 0) {
                        Checks.available(that);
                    }
                    if (that._tickCount % 10 === 0) {
                        that._updateResourceCalculations();
                    }
                    //once a minute
                    if (that._tickCount % (5 * 60) === 0) {
                        if (that.resources.battery.value > 0) {
                            that.save();
                        }
                        that._tickCount = 0;
                    }
                    that._run();
                }, 200);
            }
        };
        this._load();
    }
    Game.prototype._updateResourceValues = function () {
        for (var key in this.resources) {
            if (this.resources.hasOwnProperty(key)) {
                ResourceTick.tick(this, this.resources[key]);
            }
        }
    };
    Game.prototype._updateResourceCalculations = function () {
        for (var key in this.resources) {
            if (this.resources.hasOwnProperty(key)) {
                Calculator.updateCache(this, this.resources[key]);
            }
        }
    };
    Game.prototype.save = function () {
        console.log('saving...');
        var data = {
            plot: this.plot,
            tabs: this.tabs,
            story: this.story,
            resources: this.resources,
            upgrades: this.upgrades,
            shop: this.shop,
            village: this.village,
            quests: this.quests,
            tickCount: this._tickCount
        };
        localStorage.setItem('gameData', btoa(JSON.stringify(data)));
    };
    Game.prototype.load = function (data) {
        var gameData = JSON.parse(atob(data));
        this.plot = gameData.plot;
        this.tabs = gameData.tabs;
        this.story = gameData.story;
        this.resources = gameData.resources;
        this.upgrades = gameData.upgrades;
        this.shop = gameData.shop;
        this.village = gameData.village;
        this.quests = gameData.quests;
        this._tickCount = gameData.tickCount;
        if (this._tickCount == null) {
            this._tickCount = 0;
        }
    };
    Game.prototype.reset = function () {
        localStorage.removeItem('gameData');
        this.plot = PlotItems;
        this.tabs = Tabs;
        this.story = Story;
        this.resources = ResourceItems;
        this.upgrades = UpgradeItems;
        this.shop = ShopItems;
        this.village = VillageItems;
        this.quests = QuestItems;
        this._tickCount = 0;
    };
    return Game;
}());
export default Game;
//# sourceMappingURL=game.js.map