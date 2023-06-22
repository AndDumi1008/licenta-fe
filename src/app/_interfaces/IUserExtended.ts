import {ICourseSummary} from "./ICourseSummary";

export interface IUserExtended {
  id: string | null
  name: string,
  photoURL?: string,
  uniqueId: string,
  userRole: string,
  courseArr: ICourseSummary[],
}
