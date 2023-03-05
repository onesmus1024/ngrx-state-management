import { createReducer ,createSelector, on, createFeatureSelector} from '@ngrx/store';
import { User,LoginSuccess } from 'src/app/Interfaces';
import * as UserActions from '../Actions/user.actions'


export interface UserInterface{
    user:User
    error:string
    loginSuccess:LoginSuccess
    loginError:string
    registerSuccess:string
    registerError:string
    updateSuccess:string
    updateError:string
}

const initialState:UserInterface={
    user:{
        Name:'',
        Email:'',
        Password:'',
    },
    error:'',
    loginSuccess:{
        message:'test',
        token:'test',
        role:'test',
        name:'test'
    },
    loginError:'',
    registerSuccess:'',
    registerError:'',
    updateSuccess:'',
    updateError:''
}

const userSliceState= createFeatureSelector<UserInterface>('user')

export const myUser= createSelector(userSliceState, state=>state.user)

export const myLoginSuccess= createSelector(userSliceState, state=>state.loginSuccess)

export const myLoginError= createSelector(userSliceState, state=>state.loginError)

export const myRegisterSuccess= createSelector(userSliceState, state=>state.registerSuccess)

export const myRegisterError= createSelector(userSliceState, state=>state.registerError)



export const userReducer=createReducer(
    initialState,
    on(UserActions.loginSuccess,(state,action)=>{
        return{
            ...state,
            loginSuccess:action
        }
    }
    ),
    on(UserActions.loginFailure,(state,action)=>{
        return{
            ...state,
            loginError:action.error
        }
    }
    ),
    on(UserActions.registerSuccess,(state,action)=>{
        return{
            ...state,
            registerSuccess:action.message
        }
    }
    ),
    on(UserActions.registerFailure,(state,action)=>{
        return{
            ...state,
            registerError:action.error
        }
    }
    ),
    on(UserActions.UpdateUserSuccess,(state,action)=>{
        return{
            ...state,
            updateSuccess:action.message
        }
    }
    ),
    on(UserActions.UpdateUserFailure,(state,action)=>{
        return{
            ...state,
            updateError:action.error
        }
    }
    )
)

