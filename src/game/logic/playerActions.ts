import Calculator from './calculator'
import Plot from '../models/plot'
import Upgrade from '../models/upgrades'

export default class playerActions {
    public buyPlotItem(game:any, item: Plot){
        var buy = Calculator.buy(game.resources, item.pricing)

        if(buy[0]){
            game.story[item.story].visible = true
            game.plot[item.name].available = !buy[1]
            
            for (var key in item.bonuses) {
                if (item.bonuses.hasOwnProperty(key)) {
                    Calculator.bonusFunc(game.resources, item.bonuses[key])
                }
            }
        }
    }

    public buyUpgradeItem(game:any, item: Upgrade){
        var buy = Calculator.buy(game.resources, item.pricing)

        if(buy[0]){
            item.completed = true

            for (var key in item.bonuses) {
                if (item.bonuses.hasOwnProperty(key)) {
                    Calculator.bonusFunc(game.resources, item.bonuses[key])
                }
            }  

            for (var key in item.modifies) {
                if (item.modifies.hasOwnProperty(key)) {
                    Calculator.modifyFunc(game, item.modifies[key])
                }
            } 
        }
    }

}