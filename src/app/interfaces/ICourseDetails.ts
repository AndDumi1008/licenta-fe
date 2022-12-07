import {ILaboratory} from "./ILaboratory";

export interface ICourseDetails {
  id: string,
  title: string,
  author: string,
  description: string,
  labs: ILaboratory[]
}
