import { Bonus } from '../models/enums/bonus'

export default class Calculator {

    public static bonusFunc = function (resources: object, resource: string, type: Bonus, amount: number) {
        switch(type){
            case Bonus.add:
                resources[resource].value += amount
                resources[resource].visible = true
                break
        }



        return resources
    }

    public static buy = function (resources: object, cost: Array<[string, number, number]>) {
        var result = true
        var disable = false
        var temp = []

        for(var i = 0; i < cost.length; i++) {

            if(cost[i][1] <= resources[cost[i][0]].value){
                temp.push([cost[i][0]], cost[i][1])
                resources[cost[i][0]].value -= cost[i][1]
                if(cost[i][1] > resources[cost[i][0]].value) disable = true
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
    
}