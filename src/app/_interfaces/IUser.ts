import {ICourseSummary} from "./ICourseSummary";

export interface IUser {
  name: string,
  photoURL?: string,
  uniqueId: string,
  userRole: string,
  courseArr: ICourseSummary[],
}
