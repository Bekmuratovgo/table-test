const GET_DATA = "GET_DATA";

interface IState {
    values: []
}

const initialState: IState = {
    values: [],
}

export const tableReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_DATA:
            return {...state, values: action.payload}
        
        default:
            return state;
    }
}

export const setData = (payload: any) => ({ type: GET_DATA, payload })
