// /* eslint-disable no-unused-vars */
// import React from "react";
// import Platforms from "./Platforms";
// import Recently from "./Recently";
// import { withAuth0 } from "@auth0/auth0-react";
// import Category from "./Category";
// import Swal from 'sweetalert2'



// class sideBar extends React.Component{
    
//     constructor(props){
//         super(props);
//         this.state={
//             pcHref:``,
//             mobileHref:"",
//            playstationHref:" ",
//            RecentlyHref:" ",


          
//         }
//     }
// isNotAuth=(e)=>{
//     e.preventDefault();
//     Swal.fire({
//         icon: 'error',
//         title: 'Oops...',
//         text: 'you should log in ',
//         confirmButtonColor: '#ffbe33',
//         background:'#212529',
//         iconColor:'#ffbe33',
//         color:'rgb(248, 239, 239)'
//       })
// }
// isAuth=(e)=>{
//     this.setState({
//         pcHref:'/pc',
//        playstationHref:'/playStation',
//        mobileHref:'/Mobile',
//        RecentlyHref:'/Recently'
//     })
// }
//     render(){
//         const { isAuthenticated} = this.props.auth0;
//         return(
//             <>
//             <div className="container">
//             <div className="row">
//             <div className="col-12">
//             <div className="card">
//             <div className="card-body">
//             <h5 className="card-title">Platforms</h5>
//             <ul className="list-group list-group-flush">
//             <li className="list-group-item"><a href={isAuthenticated?this.state.pcHref:this.isNotAuth()}>pc 🖥️</a></li>
//             <li className="list-group-item"><a href={isAuthenticated?this.state.mobileHref:this.isNotAuth()}>Mobile 📱</a></li>
//             <li className="list-group-item"><a href={isAuthenticated?this.state.playstationHref:this.isNotAuth()}>playStation 🎮</a></li>
//             <li className="list-group-item"><a href={isAuthenticated?this.state.RecentlyHref:this.isNotAuth()}>Recently 📧</a></li>
//             </ul>
//             </div>
//             </div>
//             </div>
//             </div>
//             </div>
//             <Category/>
//             </>
//         )
//     }
// }
// export default sideBar;