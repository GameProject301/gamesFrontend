import React from "react";
import "./styles/siderbar.css";
import { Link } from 'react-router-dom';
import { MdEmail as MailIcon, MdInbox as InboxIcon } from "react-icons/md";
import {
  Drawer as MUIDrawer,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Divider,
  Toolbar,

} from "@material-ui/core";
import {
  FaFireAlt,
  FaPlaystation,
  FaStar,
  FaWindows,
  FaMobile,
  FaCertificate ,
  FaRegObjectGroup,
  FaUmbrellaBeach,
} from "react-icons/fa";
import { BsFillSkipForwardFill } from "react-icons/bs";
import Interested from "./Interested";

const useStyles = makeStyles({
  drawer: {
    width: "250px",
    zIndex: "1",
    ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
      display:"none"
    }
  },
  toolbar: {
    display: "flex",
    justifyContent: "center",
  },
  ListItemIcon: {
    display: "flex",
    justifyContent: "center",
  },
  paper: {
    width: "250px",
    background: "#151515",
    overflowX: 'hidden',
    overflowY: 'hidden',
    '&:hover': {
      overflowY: 'auto',
    },
    '&::-webkit-scrollbar': {
      display: 'none',
    }
  },
});
const Sidebar = (props) => {
  const { history } = props;
  const classes = useStyles();
const Releases = [
  {
    text: "Home",
    icon: <InboxIcon />,
  },
  {
    text: "profile",
    icon: <FaUmbrellaBeach />,
  },
    {
      text: "explore",
      icon: <BsFillSkipForwardFill  />,
    },
    {
      text: "recently",
      icon: <FaFireAlt />,
    },
    {
      text: "top",
      icon: <FaStar />,
    },
    {
      text: "category",
      icon: <FaCertificate  />,
    },
  ];
  const Platforms = [
    {
      text: "PC",
      icon: <FaWindows />,
    },
    {
      text: "Playstation",
      icon: <FaPlaystation />,
    },
    {
      text: "Mobile",
      icon: <FaMobile />,
    },
  ];
  const itemsList = [
    {
      text: "About",
      icon: <FaRegObjectGroup />,
    },
    
    {
      text: "Support",
      icon: <MailIcon />,
    },
  ];
  return (
    <MUIDrawer
      variant="permanent"
      className={classes.drawer}
      classes={{ paper: classes.paper }}
    >
      <Toolbar />
      <Toolbar />
    
      {/* <Toolbar className={classes.toolbar}>
      </Toolbar> */}
      <Divider />
      <List>
        {Releases.map((item, index) => {
          const { text, icon, onClick } = item;
          return (
           <a href={`./${text}`} style={{color:'#fff',textDecoration:'none'}}> <ListItem button  key={text}  className="ListItem">
              {icon && (
                <ListItemIcon className={classes.ListItemIcon}>
                  <div className="iconHolder">{icon}</div>
                </ListItemIcon>
              )}
              <ListItemText primary={text} />
            </ListItem>
            </a>
          );
        })}
      </List>
      {/* <List>
        {itemsList.map((item, index) => {
          const { text, icon, } = item;
          return (
        <a to={text}><ListItem button key={text} onClick={onClick} className="ListItem" Link to="">
              {icon && (
                <ListItemIcon className={classes.ListItemIcon}>
                  <div className="iconHolder">{icon}</div>
                </ListItemIcon>
              )}
              <ListItemText primary={text} />
            </ListItem>
            </a>
          );
        })}
      </List> */}
      <Toolbar className={classes.toolbar}>
        <h2>Platforms</h2>
      </Toolbar>
      <Divider />
      <List>
        {Platforms.map((item, index) => {
          const { text, icon, onClick } = item;
          return (
           <a href={`./${text}`} style={{color:'#fff',textDecoration:'none'}}> <ListItem button  key={text}  className="ListItem">
              {icon && (
                <ListItemIcon className={classes.ListItemIcon}>
                  <div className="iconHolder">{icon}</div>
                </ListItemIcon>
              )}
              <ListItemText primary={text} />
            </ListItem>
            </a>
          );
        })}
      </List>
      <Toolbar className={classes.toolbar}>
        <h2>_____________</h2>
      </Toolbar>
      <Divider />
      <List>
        {itemsList.map((item, index) => {
          const { text, icon, onClick } = item;
          return (
           <a href={`./${text}`} style={{color:'#fff',textDecoration:'none'}}> <ListItem button  key={text}  className="ListItem">
              {icon && (
                <ListItemIcon className={classes.ListItemIcon}>
                  <div className="iconHolder">{icon}</div>
                </ListItemIcon>
              )}
              <ListItemText primary={text} />
            </ListItem>
            </a>
          );
        })}
      </List>
     {/* <Interested></Interested> */}
      <Divider />
    </MUIDrawer>
  );
};
export default Sidebar;
// import React from "react";
// import Button from 'react-bootstrap/Button';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import Dropdown from 'react-bootstrap/Dropdown';
// class Sidebar extends React.Component {
//     render() {
//         return (
//             <>
//                 <div style={{
//                     width: "20%", left: "0", top: "0",
//                     height: "100%", width: "200px",
//                     backgroundColor: "black", position: "fixed", overflow: "auto",
//                 }}>
//                     <div style={{marginTop:"100px"}}></div>
//                     <ButtonGroup vertical>
//         <Button href="./explore">explore</Button>
//     </ButtonGroup>
//                 </div>
//             </>
//         );
//     }
// }
// export default Sidebar;