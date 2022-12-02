import {ILaboratory} from "./ILaboratory";

export interface ICourse {
  id: string,
  title: string,
  author: string,
  description: string,
  labs: ILaboratory[]
}
