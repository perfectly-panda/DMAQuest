import type { IStoryFlag } from "@/types/IStoryFlag"

export default class {
  public text: IStoryFlag
  public order: number

  constructor(text: IStoryFlag, order: number){
    this.text = text
    this.order = order
  }
}