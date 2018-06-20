import React from 'react';
import { Link } from 'react-router';
import Axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {Grid,Row,Col,Carousel} from 'react-bootstrap';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
// import RaisedButton from 'material-ui/RaisedButton';

const style={
  paperStyle:{
  width: "500px",
  height: "500px",
  
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

export default class Home extends React.Component {

  state={
    sex:'',
    items:[],
    name:'',
    age:"",
    country:""
  }
  radioChange=(e,value)=>{
    this.setState({sex:value});
  }
  name=(e)=>{
    this.setState({name:e.target.value})
  }

  age=(e)=>{
    this.setState({age:e.target.value})
  }


  country = (event, index, value) => {
    this.setState({country:value})
  }
  componentDidMount=()=>{
    
    Axios.get('https://restcountries.eu/rest/v1/region/Europe')
      .then(function (data) {
        console.log('AddCellConstruct connected to server');
        console.log(data);
        console.log(data.data.message);
      
        data.data.forEach((data,i)=>{
          this.state.items.push(<MenuItem value={data.name} key={i} primaryText={data.name} />);
        })
       
      }.bind(this))
      .catch(function (error) {
        console.log(error+"error in AddCellConstruct");
      });
  }

  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired
    }
  }

  submit=()=>{
    var monthName=["Jan", "Feb","March","April","May","Jun","July","Aug","Sept","Oct","Nov","Dec"];
var date=new Date();
var latestDate=date.getDate()+"-"+monthName[date.getMonth()]+"-"+date.getFullYear()+" "+ date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
    let obj={
      appID:Date.now(),
      name:this.state.name,
      age:this.state.age,
      sex:this.state.sex,
      country:this.state.country,
      dateCreated:latestDate
    }
    console.log(obj);
    // this.context.router.push('/confirmation/'+this.state.name+'/'+obj.appID);
    Axios({
      method:'post',
      url:'/submitData',
      data:obj,
      headers: {
          
          'Content-Type': 'application/json'
      }
      })
      .then((data) => {
      console.log(data);
            if(data.data=="success"){
              console.log('inside if');
              this.context.router.push('/confirmation/'+this.state.name+'/'+obj.appID);
            }
      })
      .catch((error) => {
      console.log(error);
      console.log(error+"error in new Trade");
      });
  }

  reset=()=>{
    this.setState({name:'', age:"", sex:'', country:""});
  }

  render() {
  
    
      return (
        <div style={{marginTop:"90px"}}>
       <center>
        <div style={style.paperStyle}>
        <div style={style.header}>
          <p style={style.headerLabel}> Apply for Government Service </p>
          </div>
          <div style={style.mainBody}>
          <TextField  autoComplete="off"
           hintText="Your good name"
          floatingLabelText="Enter Your Name"
          value={this.state.name}
          onChange={this.name}
          fullWidth={true}
          />
          <br />
          {/* <RadioButtonGroup  labelPosition="left" onChange={this.radioChange} fullWidth={true}>
      <RadioButton
        value="Male"
        label="Male"
        
      />
      <RadioButton
        value="Female"
        label="Female"
      />
    </RadioButtonGroup> */}
    <br />

<RadioButtonGroup name="shipSpeed"  onChange={this.radioChange} fullWidth={true}>
      <RadioButton
     
        value="Male"
        label="Male"
       
      />
      
      <RadioButton
      
        value="Female"
        label="Female"
        
       />
      </RadioButtonGroup>
    <br />

           <TextField  autoComplete="off"
            hintText="How old you are"
            type="number"
          floatingLabelText="Enter Your Age"
          value={this.state.age}
          onChange={this.age}
          fullWidth={true}
          />
          <br />
          <br />
       <SelectField name="Select Country Name"
       fullWidth={true}

           hintText="I live in"
          floatingLabelText="Select Country Name"
          value={this.state.country}
          onChange={this.country}
        >
          {this.state.items}
        </SelectField>
        <br />
        <Row style={{position:"relative", bottom:"0px"}}>
          <Col xs={3}>
          </Col>
          <Col xs={3}>
        <RaisedButton label="Submit" primary={true}  onTouchTap={this.submit}/>
        </Col>
        <Col xs={3}>
          </Col>
        <Col xs={3}>
    <RaisedButton label="Reset" secondary={true} onTouchTap={this.reset} />
    </Col>
    </Row>
            </div>
        </div>
       </center>
          </div>
      )
    }
  }



