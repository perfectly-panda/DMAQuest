import Calculator from './calculator'

export default class playerActions {
    public buyPlotItem(game:any, item: any){
        var buy = Calculator.buy(game.resources, item.pricing)

        if(buy[0]){
            game.story[item.name].visible = true
            item.available = !buy[1]

            for (var i = 0; i < item.bonuses.length; i++){
                var bonus = item.bonuses[i]
                Calculator.bonusFunc(game.resources, bonus[0], bonus[1], bonus[2])
            }
        }
    }

}