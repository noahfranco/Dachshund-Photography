import axios from "axios"; 

const api = () => dispatch => {
    dispatch({ type: "FETCH_DATA" })
    axios
    .get("https://dog.ceo/api/breed/dachshund/images/random") 
    .then(res => {
        console.log(res)
        dispatch({ type: "FETCH_DATA_SUCCESS", payload: res.data.message})
    })
    .catch(error => {
        dispatch({type:"FETCH_DATA_FAILURE", payload: error.data.message })
    })
}

export default api; 