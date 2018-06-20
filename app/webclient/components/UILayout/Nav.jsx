import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import Divider from 'material-ui/Divider';


import {Image} from 'react-bootstrap';
const style = {
  labelStyle: {
      width: 'auto',
      height: '22px',
      family: 'Helvetica',
      size: '18px',
      weight: 'bold',
      style: 'normal',
      stretch: 'normal',
      height: 'normal',
      spacing: 'normal',
      align: 'left',
      color: '#ffffff',
      textTransform: 'lowercase'
     },
     labelStyle1: {
      width: 'auto',
      height: '22px',
      family: 'Helvetica',
      size: '18px',
      marginLeft:"-100px",
      weight: 'bold',
      style: 'normal',
      stretch: 'normal',
      height: 'normal',
      spacing: 'normal',
      align: 'left',
      color: '#ffffff',
      textTransform: 'lowercase'
     },
  buttonBorder:{
    width: '167px',
    height: '48px',
    radius: '6px',
    margin: '8px',
    border: 'solid 1px #ffffff',
    color:'#FFFFFF'
  }
} ;
import {
  blue300,
} from 'material-ui/styles/colors';
// import Divider from 'material-ui/Divider/Divider';
export default class Nav extends React.Component{
	state={
		openDrawer:false
  };
  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired
    }
  }

	handleClose = () => this.setState({openDrawer: false});
  handleToggle = () => this.setState({openDrawer: !this.state.openDrawer});
  
  // newTradeNavigation=()=>{
  //   this.context.router.push('/newTrade');
  // }
  upcomingNavigation=()=>{
    this.context.router.push('/upcomingProjects');
  }
  scrumNavigation=()=>{
    this.context.router.push('/scrumReport');
  }
  networkTestingNavigation=()=>{
    this.context.router.push('/networkTesting');
  }
  homeNavigation=()=>{
    this.context.router.push('/');
  }
  // confirmParcelNavigation=()=>{
  //   this.context.router.push("/confirmParcel");
  // }
  // pendingParcelNavigation=()=>{
  //   this.context.router.push("/pendingParcel");
  // }
  // createParcelNavigation=()=>{
  //   this.context.router.push("/confirmParcel");
  // }
  handleLogout=()=>{
    sessionStorage.removeItem('userLoginDetails');
    this.context.router.push("/login");
  }
	render(){
    
		return(
			<div>
			 <AppBar
             title="Digital Government Serivces"
             iconClassNameRight="muidocs-icon-navigation-expand-more"
             onLeftIconButtonTouchTap={this.handleToggle}
             style={{position: "fixed",top:'0'}}
            >
            
           </AppBar>
         
           <Drawer
          docked={false}
          width={200}
          open={this.state.openDrawer}
         
          onRequestChange={(openDrawer) => this.setState({openDrawer})}
          >

          <MenuItem onTouchTap={this.handleClose}>
           <Link to="/"> Home </Link>
          </MenuItem>
          <Divider />
          <MenuItem onTouchTap={this.handleClose}>
           <Link to="/playOnline"> New Opportunity </Link>
          </MenuItem>     
          <Divider />   
          <MenuItem onTouchTap={this.handleClose}>
          <Link to ="/myProfile">See Application Status</Link>
          </MenuItem>
          <Divider />
          <MenuItem onTouchTap={this.handleClose}>
          <Link to ="/myProfile">Notifications</Link>
          </MenuItem>
         
         
        </Drawer>
        </div>
      )
    }
    
	
}