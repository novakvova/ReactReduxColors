let defaulState = {
    color:"yellow"
}

const mainReducer = (state=defaulState, action) => {
    if(action.type=='CHANGE_COLOR') {
        return {
            ...state,
            color: action.color
        }
    }
    else {
        return {
            ...state
        }
    }
}

export default mainReducer;