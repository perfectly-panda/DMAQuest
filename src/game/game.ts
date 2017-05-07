import Plot, { PlotItems } from './data/plot'
import Tab, { Tabs } from './data/tabs'
import { Story } from './data/story'
import { ResourceItems } from './data/resources'
import { UpgradeItems } from './data/upgrades'
import Checks from './logic/checks'
import Calculator from './logic/calculator'
import PlayerActions from './logic/playerActions'


export default class Game {

    public actions: PlayerActions = new PlayerActions()
    public plot: object = PlotItems
    public tabs: object = Tabs

    public story: object = Story;
    public resources: object = ResourceItems
    public upgrades: object = UpgradeItems

    public initalize = function () {
        this._load()

        if(this._loaded){
            console.log('starting game')
            this.start()
        }
        else {
            throw new Error("cannot start game until data is loaded");
        }
    }

    public start = function () {
        this._running = true
        this._run()
    }

    public stop = function () {
        this._running = false
    }

    public isRunning = function () {
        return this._running
    }

    private _loaded: boolean = false;
    private _running: boolean = false;
    private _tickCount: number = 0;

    private _load = function () {
        // TODO check for saved data


        this.tabs.story.visible = true
        this.plot.wait.visible = true

        this._loaded = true; 
    }

    private _run = function () {
        if(this._running){
            var that = this;
            setTimeout(function () {
                that._tickCount++

                //that.updateResourceValues()

                if(that._tickCount % 2 === 0){
                    Checks.purchasable(that)
                }

                if(that._tickCount % 7 === 0){
                    Checks.available(that)
                }

                if(that._tickCount % 10 === 0){
                    //that.updateResourceCalculations()
                    that._tickCount = 0
                }

                that._run()
            }, 200)
        }
    }
}