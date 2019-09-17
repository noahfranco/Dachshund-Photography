const initialState = {
    message: [], 
    compiled: false, 
    error: "This is an error"

}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "FETCH_DATA":
        return {
            ...state, 
            isLoading: true, 
            error: ""
        }
        case "FETCH_DATA_SUCCESS":
        return {
            ...state, 
            isLoading: false, 
            message: action.payload,
            error: ""
        }
        default: 
            return state; 
    }
}