// import React from 'react'
// import './Navbar.css'

// import set from './Assets/set.png'

// const Navbar = () => {
//   return (
//     <div className='navbar'>
//       <div className="nav">

//       <h1>Welcome To Admin Panel</h1>
//       {/* <img src={set}  alt=''></img> */}
//       <p to="/logout" className="menu-link">
//             Logout
//           </p>
//       </div>
        

//     </div>
//   )
// }

// export default Navbar

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav">
        <h1>Welcome To Admin Panel</h1>
        <div>


        <Link to="/logout" className="menu-link logout">
          Logout
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;


