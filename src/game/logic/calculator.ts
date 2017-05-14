import { Bonus } from '../models/enums/bonus'
import { Modifiers } from '../models/enums/modifiers'
import BonusObject from '../models/bonusObject'
import ModifierObject from '../models/modifierObject'
import Identifier from '../models/identifier'
import Game from '../game'
import Resource from '../models/resources'
import { Template } from '../models/template'

export default class Calculator {

    public static bonusFunc = function (resources: object, bonus: BonusObject) {
        switch(bonus.bonusType){
            case Bonus.add:
                resources[bonus.resource].value += this._calculateBonus(bonus)
                resources[bonus.resource].visible = true
            break
            case Bonus.perTick:
                resources[bonus.resource].perTick.additives.push([Identifier.Copy(bonus.identifier), this._calculateBonus(bonus)])
            break
        }
    }

    public static modifyFunc = function (game: object, modifier: ModifierObject) {
        var modifies = modifier.modifies
        var loopBack = modifier.identifier

        switch(modifier.modifierType) {
            case Modifiers.add:
                var item: BonusObject = game[modifies.type][modifies.element][modifies.item]
                item.additives.push([new Identifier(loopBack.type, loopBack.element, loopBack.item), modifier.value])
            break
            case Modifiers.multiply:
                var item: BonusObject = game[modifies.type][modifies.element].bonuses[modifies.item]
                item.multiplier.push([new Identifier(loopBack.type, loopBack.element, loopBack.item), modifier.value])
            break
        }
    }

    public static buy = function (resources: object, cost: Array<[string, number, number]>) {
        var result = true
        var disable = false
        var temp = []

        for(var i = 0; i < cost.length; i++) {

            if(cost[i][1] <= resources[cost[i][0]].value){
                temp.push([cost[i][0]], cost[i][1])
                resources[cost[i][0]].value -= cost[i][1]
            }
            else {
                result = false
                break
            }
        }

        if(result){
            for( var k = 0; k < cost.length; k++)
            {
                cost[k][1] = +(cost[k][1] * cost[k][2]).toFixed(4)

                //do we need to disable this resource
                if(cost[k][1] > resources[cost[k][0]].value) {
                    disable = true
                }
            }

        }
        //we failed somewhere along the line, so put resources back
        else {
            for( var j = 0; j < temp.length; j++)
            {
                resources[temp[i][0]].value += temp[i][1]
            }
        }

        return [result, disable]
    }

    public static updateCache = function(game: Game, resource: Resource) {
        if(resource.perTick != null){
            resource.perTickCache = this._calculateBonus(resource.perTick)
        }
    }

    public static negateOptions(game: Game, item: Template){
        for (var i = 0; i < item.negates.length; i++){
            var mark = item.negates[i]

            game[mark.type][mark.element].flags.negated = true
        }
    }

    private static _calculateBonus(bonus: BonusObject){
        var sum = function (sum, cur) {
            return sum + cur[1]
        }

        var additives = bonus.additives.reduce(sum, bonus.baseValue)
        var multipliers = bonus.multiplier.reduce(sum, 1)

        return additives * multipliers
    }
    
}