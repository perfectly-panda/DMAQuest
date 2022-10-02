import type Resource from "@/models/Resource"

export default interface IResourceStore{
  resources: {
    [key: string]: Resource
  }
}