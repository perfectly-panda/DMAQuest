import Plot from '../models/plot'
import { Bonus } from '../models/enums/bonus'
import { Type } from '../models/enums/type'

export const PlotItems: object = {
    'wait': new Plot(
        'Wait',
         'Wait in line.',
         [],
         [['people', Type.plot, 10]],
         [],
         [["minutes", Bonus.add , 1]]
    ),
    'people': new Plot(
        'People',
         'People in line.',
         [['minutes', Type.resource, 10]],
         [],
         [['minutes', 10, 1.15]],
         [["people", Bonus.add , 1]]
    )
}