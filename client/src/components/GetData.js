import React, { useEffect } from "react"; 
import { connect } from "react-redux"; 
import api from "../actions"; 
import Styled from "styled-components"; 
import Donate from "./Donate";

const Button = Styled.div`
background-color: #ffffff; 
  border: none;
  color: #000000;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`
const Margin = Styled.div`
margin: 50px; 
`

const GetData = (props) => {

    useEffect(() => {
        api()
    }, [])

    return (
        <>
        <img src={props.message} />
        <Margin> </Margin>
        <Button> 
        <a onClick={props.api}> View </a> 
        </Button>
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