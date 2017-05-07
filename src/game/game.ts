import Plot, { PlotItems } from './data/plot'
import Tab, { Tabs } from './data/tabs'
import { Story } from './data/story'
import { ResourceItems } from './data/resources'
import Checks from './logic/checks'
import Calculator from './logic/calculator'
import PlayerActions from './logic/playerActions'




    public load = function () {
        // TODO check for saved data


        this.tabs.story.visible = true
        this.plot.wait.visible = true

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
    }

    public stop = function () {
    }

    public isRunning = function () {
    }

            var that = this;
            setTimeout(function () {


                    Checks.purchasable(that)
                }

                    Checks.available(that)
                }

                }

            }, 200)
        }
    }
}