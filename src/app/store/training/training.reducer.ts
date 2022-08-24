
import { ActionsUnion, ActionTypes } from './training.action';




export const initialState ={};

export function TrainingReducer(state = initialState, action: ActionsUnion) {
  switch (action.type) {
    case ActionTypes.LoadTraningList:
      state = action.payload; 
      return state;
    case ActionTypes.GetTraningList:
      return state;
    default:
      return state;
  }
}