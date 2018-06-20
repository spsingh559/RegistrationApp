import React from 'react';
const style={
    paperStyle:{
    width: "500px",
    height: "300px",
    
    backgroundColor: "#ffffff",
    border: "solid 1px #d5d5d5"
    },
    header:{
      width: "500px",
      height: "50px",
     fontSize:'20px',
     color:'white',
      backgroundColor: "black",
      
    },
    mainBody:{
      marginTop:"20px"
    }
  }
export default class Confirmation extends React.Component{

    render(){

        return(
            <div style={{marginTop:"90px"}}>
       <center>
        <div style={style.paperStyle}>
        <div style={style.header}>
          <p style={style.headerLabel}> Registration Confirmation </p>
          </div>
          <div style={style.mainBody}>
          <p>
              <b> {this.props.params.name}</b> Thankyou for applying to Digital Government Service
              </p>
              <br />
              <p> Your application ID is <b> {this.props.params.appID}</b> </p>
          </div>
          </div>
          </center>
          </div>
         

        )
    }
}