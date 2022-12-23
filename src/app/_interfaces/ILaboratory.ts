import {IExercise} from "./IExercise";

export interface ILaboratory {
  id: string,
  exercise: IExercise,

  title: string,
  content: string,
  labNumber: string
}
