import Resource from '../models/resources'
import Game from '../game'
import { Conditional } from '../models/enums/conditional'

export default class ResourceTick {
    public static tick = function(game: Game, resource: Resource) {
        if(resource.perTick != null && resource.perTickCache != 0){
            if(resource.condition != null) {
                var cond = resource.condition
                var value = game[cond[0].type][cond[0].element][cond[0].item]

                var result: boolean

                switch(cond[2]){
                    case Conditional.greaterThan:
                        result = value > cond[1]
                    break
                    case Conditional.lessThan:
                        result = value < cond[1]
                    break
                    case Conditional.equalTo:
                        result = value == cond[1]
                    break
                    default:
                        result = false
                    break
                }

                if(result) {
                    this.perTick(resource)
                }

            }
            else {
                this.perTick(resource)
            }
        }
    }

    private static perTick(resource: Resource){
        if((resource.value + resource.perTickCache) <= 0){
            resource.value = 0
        } 
        else if (resource.maxValue != -1 && (resource.value + resource.perTickCache) >= resource.maxValue ){
            resource.value = resource.maxValue
        }
        else {
            resource.value += resource.perTickCache
        }
    }
}