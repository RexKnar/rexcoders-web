
import { Action} from '@ngrx/store';

export enum ActionTypes {
    Login = '[Auth] Login',
    Logout = '[Auth] Logout',
    GetUserDetails ='[Auth] GetUserDetails',
    LoadUserDetails='[Auth] LoadUserDetails'
  }
// export const increment = createAction('[Counter Component] Increment');
// export const decrement = createAction('[Counter Component] Decrement');
// export const addToCart = createAction('[CartItem] AddToCart')
// export const getCartItems = createAction('[CartItem] GetCartItems')
  
export class Login implements Action {
  readonly type = ActionTypes.Login;
  constructor(public payload: any) {}
}
export class Logout implements Action {
  readonly type = ActionTypes.Logout;
  constructor() {}
}
  
export class LoadUserDetails implements Action {
    readonly type = ActionTypes.LoadUserDetails;
    constructor(public payload: any) {}
  }
 
  export class GetUserDetails implements Action {
    readonly type = ActionTypes.GetUserDetails;
  }

  export type ActionsUnion = Login |  Logout | GetUserDetails | LoadUserDetails; 