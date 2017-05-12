import { Template } from '../models/template'

export default class Checks {
    public static available = function(game: any) {
        for (var item in game.plot) {
            this.availableLoop(item, game.plot, game)
        }
        for (var item in game.tabs) {
            this.availableLoop(item, game.tabs, game)
        }

        for (var item in game.upgrades) {
            this.availableLoop(item, game.upgrades, game)
        }
    }

    public static purchasable = function(game: any){
        for (var item in game.plot) {
            this.purchasableLoop(item, game.plot, game)
        }

         for (var item in game.upgrades) {
            this.purchasableLoop(item, game.upgrades, game)
        }
    }

    private static availableLoop = function ( item: string, section: Template, game ) {
        if (section.hasOwnProperty(item)) {
            if(!section[item].visible && !section[item].negated) {
                var nowAvailable = true
                var parents = section[item].parents
                for(var i = 0; i < parents.length; i++)
                {
                    var parent = parents[i]
                    if(game[parent[0].type][parent[0].element].value < parent[1]) {
                        nowAvailable = false
                    }
                }

                if(nowAvailable) {
                    section[item].visible = true
                }
            }
        }
    }

    private static purchasableLoop = function (item, section, game) {
        if (section.hasOwnProperty(item)) {
                if(!section[item].available && !section[item].negated) {
                    var nowAvailable = true
                    var pricing = section[item].pricing
                    for(var i = 0; i < pricing.length; i++)
                    {
                        parent = pricing[i]

                         if(game.resources[parent[0]].value < parent[1]) {
                            nowAvailable = false
                        }
                    }

                    if(nowAvailable) section[item].available = true
                }
            }
    } 
}