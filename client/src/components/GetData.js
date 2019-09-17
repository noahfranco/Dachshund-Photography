import React, { useEffect } from "react"; 
import { connect } from "react-redux"; 
import api from "../actions"; 

const GetData = (props) => {

    useEffect(() => {
        api()
    }, [])

    return (
        <>
        <img src={props.message} />
        <button onClick={props.api}> </button> 
        </>
    )
}

const mapStateToProps = state => {
    return { 
        message: state.message, 
        isLoading: state.isLoading, 
        error: state.error
    };
};

export default connect(mapStateToProps, {api})(GetData)