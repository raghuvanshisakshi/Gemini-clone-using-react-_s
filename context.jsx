import { createContext} from "react";
export const Context = createContext();
const ContextProvider = (props) =>{
    const onSent = async(prompt)=>{
        
    }
    const contextValue = {

    }
    return(
        <Context.Provider value = {contextValue}>
            {props.children}
        </Context.Provider>
    )
}