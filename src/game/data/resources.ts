import Resource from '../models/resources'
import { Bonus } from '../models/enums/bonus'

export const ResourceItems: object = {
    'minutes': new Resource(
        'Minutes',
        'How long your friend has been waiting'
    ),
    'people': new Resource(
        'People',
        'How many people are in line with your friend'
    )
}