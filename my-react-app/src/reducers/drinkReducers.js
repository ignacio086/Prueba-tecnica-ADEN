//reducer para el tipo de busqueda
export const drinkReducer = (state = '',action)=>{
    if(action.type == '@drink/name'){
        state = action.payload
        return state
    }
    return state
}
//reducer para los nombres de tragos buscados
export const drinkHistoryReducer = (state = [],action)=>{
    if(action.type == '@drink/history'){
        state.push(action.payload) 
        return state
    }
    return state
}