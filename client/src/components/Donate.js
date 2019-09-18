import React from "react"; 
import Styled from "styled-components"; 

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
const Color = Styled.div`
color: #ffffff; 
`

const Donate = () => {

    return(
        <>
        <Color> 
        <h2> Give Back </h2>
        <p> Your contributions can go a long ways to helping our little furry friends </p>
        </Color> 
        <Button> 
        <a href="https://support.bestfriends.org/site/Donation2?df_id=1949&mfc_pref=T&1949.donation=form1"> Donate </a> 
        </Button>
        </>
    )
}

export default Donate; 