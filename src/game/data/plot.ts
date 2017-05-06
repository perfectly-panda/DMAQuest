import Plot from '../models/plot'
import { Bonus } from '../models/enums/bonus'

export const plotItems = {
    'wait': new Plot(
        'Wait',
         'Wait in line.',
         'I was probably waiting in line for {{ resources.minutes }} minutes.',
         [],
         [],
         [],
         [["minutes", Bonus.add , 1]]
    )
}