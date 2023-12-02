export const drinkReducer = (state = '',action)=>{
    if(action.type == '@drink/name'){
        state = action.payload
        return state
    }
    return state
}

export const drinkHistoryReducer = (state = [],action)=>{
    if(action.type == '@drink/history'){
        state.push(action.payload) 
        return state
    }
    return state
}