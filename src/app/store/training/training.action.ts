
import { Action} from '@ngrx/store';

export enum ActionTypes {
    GetTraningList ='[Training] GetTrainingList',
    LoadTraningList='[Training] LoadTraningList'
  }

export class LoadTraningList implements Action {
    readonly type = ActionTypes.LoadTraningList;
    constructor(public payload: any) {}
  }
 
  export class GetTraningList implements Action {
    readonly type = ActionTypes.GetTraningList;
  }

  export type ActionsUnion = GetTraningList | LoadTraningList; 