
import { ActionsUnion, ActionTypes } from './auth.action';




export const initialState =sessionStorage.getItem('currentUser')?JSON.parse(sessionStorage.getItem('currentUser')):{};

export function AuthReducer(state = initialState, action: ActionsUnion) {
  switch (action.type) {
    case ActionTypes.LoadUserDetails:
      state = action.payload; 
      return state;
    case ActionTypes.GetUserDetails:
      return state;
    case ActionTypes.Login:
      state = action.payload;
      return state;
    case ActionTypes.Logout:
      state={};
      return state;
    default:
      return state;
  }
}