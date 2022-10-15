import type { IStoryFlag } from "@/types/IStore"

export default class {
  public text: IStoryFlag
  public order: number

  constructor(text: IStoryFlag, order: number){
    this.text = text
    this.order = order
  }
}