import Tab from '../models/tab';
import Identifier from "../models/identifier";
import { Type } from "../models/enums/type";
export var VillageItems = {
    questBoard: new Tab("Quest Board", 'QuestBoard', "Get work", new Identifier(Type.village, 'questBoard'), [[new Identifier(Type.resource, "huts", ''), 1]])
};
//# sourceMappingURL=village.js.map