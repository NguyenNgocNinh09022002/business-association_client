import { createContext, useContext, useMemo, useReducer } from 'react'



const MyContext = createContext();
MyContext.displayName = 'My store';

//Reducer
const reducer = (state, action) => {
    switch (action.type) {
        case 'USER_LOGIN': return {...state,...action.value};
        case 'USER_LOGOUT': return {...state, ...action.value}
    }
}

const initialState = {
    user: localStorage.getItem('hiephoidoanhnghiep.email') && null,
    role: localStorage.getItem('hiephoidoanhnghiep.role') && ''
}

const customUser = (name, role) => {
    alert(name + ' '+role)
    const user = {user: {userName: name}, role: role};
    return user;
}

//MyContext
const MyContextControllerProvider = ({children}) => {
    
    const [controller, dispatch] = useReducer(reducer, initialState);
    const value = useMemo(()=> [controller,dispatch])
    return (
        <MyContext.Provider value={value}>
            {children}
        </MyContext.Provider>
    )
}

//useContext
const useMyContextProvider = () => {
    const context = useContext(MyContext)
    if(!context) {
        return new Error('userMyContextProvider phai dat trong MyContextControllerProvider');
    }
    return context;
}

//Tham chieu collections:
// const users = firestore().collection("users");


//Dinh nghia action - dang nhap
const login = (dispatch,  fullname, role) => {
    dispatch({type: 'USER_LOGIN', value: customUser(fullname, role)})
   
}


//Dinh nghia action - dang xuat
const logout = (dispatch) => {
    dispatch({type:'USER_LOGOUT', value: initialState })
}




export {
  
    login,
    logout,
    useMyContextProvider,
    MyContextControllerProvider,
}