import Resource from '../models/resources'
import Tab from '../models/tab'
import { Bonus } from '../models/enums/bonus'
import Identifier from "../models/identifier"
import { Type } from "../models/enums/type"
import { Conditional } from '../models/enums/conditional'

export const VillageItems: object = {
    questBoard: new Tab(
        "Quest Board",
        'QuestBoard', 
        "Get work",
        new Identifier(Type.village, 'questBoard'),
        [[new Identifier(Type.resource, "huts", ''), 1]])
}