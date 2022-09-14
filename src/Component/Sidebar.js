// import React from "react";
// import "./styles/siderbar.css";
// import { BrowserRouter } from "react-router-dom";
// import { MdEmail as MailIcon, MdInbox as InboxIcon } from "react-icons/md";
// import { Link} from "react-router-dom"
// import {
//   Drawer as MUIDrawer,
//   ListItem,
//   List,
//   ListItemIcon,
//   ListItemText,
//   makeStyles,
//   Divider,
//   Toolbar,
// } from "@material-ui/core";
// import {
//   FaFireAlt,
//   FaPlaystation,
//   FaStar,
//   FaWindows,
//   FaXbox,
// } from "react-icons/fa";
// import { BsFillSkipForwardFill } from "react-icons/bs";
// import ActionIcon from "../images/actionIcon.jpg";
// import AdventureIcon from "../images/Adventure.jpg";
// import ShooterIcon from "../images/shooter game image.jpg";
// import StrategyIcon from "../images/Strategy.jpg";
// import RacingIcon from "../images/RacingIcon.jpg";
// import FightingIcon from "../images/FightingIcon.jpg";

// const useStyles = makeStyles({
//   drawer: {
   
//     width: "150px",
//     zIndex: "1",
//     ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
//       display:"none"
//     }
//   },
//   toolbar: {
// display:"flex",
//     justifyContent: "center",
   
//   },
//   ListItemIcon: {
// display:"flex",
//     justifyContent: "center",
//   },
//   paper: {
//     top:75,
//     width: "200px",
//     background: "#151515",
//     overflowX: 'hidden',
//     overflowY: 'hidden',
//     '&:hover': {
//       overflowY: 'auto',
//     },
//     '&::-webkit-scrollbar': {
//       display: 'flex',
//     }
//   },
// });

// const Sidebar = (props) => {
//   const { history } = props;
//   const classes = useStyles();

//   const Releases = [
//     {
//       text: "recently",
//       icon: <FaStar />,
//       onClick: () => history.push("/resently"),
//     },
//     {
//       text: "This Week",
//       icon: <FaFireAlt />,
//       onClick: () => history.push("/This Week"),
//     },
//     {
//       text: "Next Week",
//       icon: <BsFillSkipForwardFill />,
//       onClick: () => history.push("/Next Week"),
//     },
//   ];

//   const Platforms = [
//     {
//       text: "PC",
//       icon: <FaWindows />,
//       onClick: () => history.push("/pc"),
      
//     },
//     {
//       text: "Playstation 4",
//       icon: <FaPlaystation />,
//       onClick: () => history.push("/playStation"),
//     },
//     {
//       text: "Mobile",
//       icon: <FaXbox />,
//       onClick: () => history.push("/Mobile"),
//     },
//   ];
//   const Genres = [
//     {
//       text: "Action",
//       icon: ActionIcon,
//       onClick: () => history.push("/Action-games"),
//     },
//     {
//       text: "Shooter",
//       icon: ShooterIcon,
//       onClick: () => history.push("/Shooter-games"),
//     },
//     {
//       text: "Strategy",
//       icon: StrategyIcon,
//       onClick: () => history.push("/Strategy-games"),
//     },
//     {
//       text: "Adventure",
//       icon: AdventureIcon,
//       onClick: () => history.push("/Adventure-games"),
//     },
//     {
//       text: "Racing",
//       icon: RacingIcon,
//       onClick: () => history.push("/Racing-games"),
//     },
//     {
//       text: "Fighting",
//       icon: FightingIcon,
//       onClick: () => history.push("/Fighting-games"),
//     },
//   ];
//   const itemsList = [
//     {
//       text: "Home",
//       icon: <InboxIcon />,
//       onClick: () => history.push("./"),
//     },
//     {
//       text: "About",
//       icon: <MailIcon />,
//       onClick: () => history.push("/"),
//     },
//     {
//       text: "Contact",
//       icon: <MailIcon />,
//       onClick: () => history.push("/"),
//     },
//   ];
//   return (
//     <MUIDrawer
//       variant="permanent"
//       className={classes.drawer}
//       classes={{ paper: classes.paper }}
//     >
//       <Toolbar />
//       <Toolbar />
//       {/* <List>
//         {itemsList.map((item, index) => {
          
//           const { text, icon, onClick } = item;
//           return (
          
//         <Link to={text}><ListItem button key={text} onClick={onClick} className="ListItem" Link to="./pc">
//               {icon && (
//                 <ListItemIcon className={classes.ListItemIcon}>
//                   <div className="iconHolder">{icon}</div>
//                 </ListItemIcon>
//               )}
//               <ListItemText primary={text} />
//             </ListItem>
//             </Link>
//           );
//         })}
//       </List> */}
//       <Toolbar className={classes.toolbar}>
//         <h2>New Releases</h2>
//       </Toolbar>
//       <Divider />
//       <List>
//         {Releases.map((item, index) => {
//           const { text, icon, onClick } = item;
//           return (

//            <Link to={`./${text}`} style={{color:'#ffbe33',textDecoration:'none'}}> <ListItem button key={text}  className="ListItem">
//               {icon && (
//                 <ListItemIcon className={classes.ListItemIcon}>
//                   <div className="iconHolder">{icon}</div>
//                 </ListItemIcon>
//               )}
//               <ListItemText primary={text} />
//             </ListItem>
//             </Link>
//           );
//         })}
//       </List>
//       <Toolbar className={classes.toolbar}>
//         <h2>Platforms</h2>
//       </Toolbar>
//       <Divider />
//       <List>
//         {Platforms.map((item, index) => {
         
//           const { text, icon, onClick } = item;
          
//           return (
//             <ListItem button key={text}className="ListItem">
         
            
           
        
      
//               {icon && (
//                 <ListItemIcon className={classes.ListItemIcon}>
//                   <div className="iconHolder">{icon}</div>
                  
//                 </ListItemIcon>
//               )}
//               <ListItemText primary={text} />
              
//             </ListItem>
//           );
//         })}
//       </List>
//       <Divider />
//       <Toolbar className={classes.toolbar}><h2>Genres</h2></Toolbar>
//       <Divider />
//       <List>
//         {Genres.map((item, index) => {
//           const { text, icon, onClick } = item;
//           return (
//             <ListItem button key={text} onClick={onClick} className="ListItem">
//               {icon && (
//                 <ListItemIcon className={classes.ListItemIcon}>
//                   <div className="iconHolder">
//                     <img src={icon} alt="" />
//                   </div>
            
//                 </ListItemIcon>
//               )}
//               <ListItemText primary={text} />
//             </ListItem>
//           );
//         })}
//       </List>
//     </MUIDrawer>
//   );
// };

// export default (Sidebar);
import React, { useState } from "react";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import { Link, BrowserRouter } from "react-router-dom"
//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import "react-pro-sidebar/dist/css/styles.css";

import "./styles/siderbar.css";
import { useHref } from "react-router";
import { BsFillSkipForwardFill } from "react-icons/bs";
import ActionIcon from "../images/actionIcon.jpg";
import AdventureIcon from "../images/Adventure.jpg";
import ShooterIcon from "../images/shooter game image.jpg";
import StrategyIcon from "../images/Strategy.jpg";
import RacingIcon from "../images/RacingIcon.jpg";
import FightingIcon from "../images/FightingIcon.jpg";


const Sidebar = () => {
  
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id="header">
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p>{menuCollapse ? "Logo" : "Big Logo"}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
                {/* changing menu collapse icon on click */}
              {menuCollapse ? (
                <FiArrowRightCircle/>
              ) : (
                <FiArrowLeftCircle/>
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem active={true} onClick={useHref} >
              <Link to="./"> Home</Link>
              </MenuItem>
              <MenuItem icon={<FaList />}>
                
                
              <Link to="./top">
                top 10
                </Link>
              
              
              </MenuItem>
              <MenuItem icon={<FaRegHeart />}>
                
              <Link to="./recently">
                recently
                </Link>
              
              </MenuItem>
              <MenuItem icon={<RiPencilLine />}>Author</MenuItem>
              <MenuItem icon={<BiCog />}>Settings</MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Sidebar;
