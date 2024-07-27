import { createContext, useContext, useMemo, useReducer } from 'react'

const firestore = require('firebase/firestore')
const auth = require('firebase/auth')

const MyContext = createContext();
MyContext.displayName = 'My store';

//Reducer
const reducer = (state, action) => {
    switch (action.type) {
        case 'USER_LOGIN': return {...state, userLogin:action.value};
    }
}

const initialState = {
    user: {userName: 'Ninh'},
    role: "admin_1"
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
const login = (dispatch, email, password, fullname) => {
    // auth().signInWithEmailAndPassword(email, password).then(()=> {
    //     users.doc(email).onSnapshot(document => {
    //         if(document.exists) {
    //             console.log("Dang nhap thanh cong voi: " + document.id)
    //             dispatch({type: 'USER_LOGIN', value: document.data()})
               
    //         }
    //     })
    // }).catch(error => Alert.alert('Sai email va password'))
}

const reLogin = (dispatch) => {
    // firestore().collection("users").doc(auth().currentUser.email).get().then(document =>{
    //     console.log('gia tri user login trong relogin: '+document.data())
    //     dispatch({type: 'USER_RELOGIN', value: document.data()})
    // });
  
  
}

//Dinh nghia action - dang xuat
const logout = (dispatch) => {
    auth().signOut().then(()=>dispatch({type:'USER_LOGOUT'}))
}



// định nghĩa action - add service
    const AddService = (controller,dispatch, name, price) => {
        // const time = Date.now();
        // item = {
        //     name:name,
        //     price:price,
        //     creator: controller.userLogin.fullName,
        //     date_created:time,
        //     date_modified:time,
        // }
        // firestore().collection('services').add({ ...item, })
        // dispatch({type: 'ADD_SERVICE', value:controller.userLogin})
    }


export {
    MyContextControllerProvider,
    useMyContextProvider,
    login,
    logout,
    AddService,
    reLogin,
}