import Plot, { PlotItems } from './data/plot'
import Tab, { Tabs } from './data/tabs'

export default class Game {
    loaded: boolean = false;
    running: boolean = false;
    tickCount: number = 0;

    plot: object

    public load = function () {
        // TODO stuff
        console.log('loading game')
        this.plot = PlotItems
        this.tabs = Tabs

        this.tabs.story.visible = true
        this.loaded = true; 
    }

    public game = function () {
        if(this.loaded){
            console.log('starting game')
            this.start()
        }
        else {
            throw new Error("cannot start game until data is loaded");
        }
    }

    public start = function () {
        this.running = true
        this.run()
    }

    public stop = function () {
        this.running = false
    }

    public isRunning = function () {
        return this.running
    }

    run = function () {
        if(this.running){
            var that = this;
            setTimeout(function () {
                that.tickCount++

                that.updateResourceValues()

                if(that.tickCount % 10 === 0){
                    that.updateResourceCalculations()
                    that.tickCount = 0
                }

                that.run()
            }, 200)
        }
    }

    updateResourceValues = function () {
        // console.log('update resource values')
    }

    updateResourceCalculations = function () {
        // console.log('update resource calculations')
    }
}