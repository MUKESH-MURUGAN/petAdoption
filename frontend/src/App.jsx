import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Home from './Pages/Assets2/Home';
import Pets from './Pages/Assets2/Pets';
import PetsCategory from './Pages/Assets2/PetsCategory';
import PetContextProvider from './PetContext/PetContextProvider'; // Import the provider
import AllCategory from './Pages/AllCategory';
import Login from './Login/Login';
import Signup from './Login/signup';
import Save_me from './Pages/Save_me/Save_me'
import Admin from './Pages/Admin';
import Addproduct from './Components/Addproduct/Addproduct';
import Removeproduct from './Components/Removeproduct/Removeproduct';
import Slider from './Components/ANavbar/Slider/Slider';
import ANavbar from './Components/ANavbar/Navbar';

// function LayoutWithNavbar({ children }) {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//           {/* <Route path="/" element={<Login />} /> */}
//           {/* <Route path="/" element={<Home />} /> */}
//             {/* <Route path="/" element={<Login />} /> */}
//             <Route path='/home' element={<Home />} />
//             <Route path='/Dog' element={<PetsCategory category="dog" />} /> 
//             <Route path='/Cat' element={<PetsCategory category="cat" />} />
//             <Route path='/Fish' element={<PetsCategory category="fish" />} />
//             <Route path='/Bird' element={<PetsCategory category="bird" />} />
//             <Route path='/All' element={<AllCategory />} />
//             <Route path='/Save_me' element={<Save_me />} />
//             <Route path="/pets/:productID" element={<Pets />} />
//           </Routes>
//     </>
//   );
// }
function LayoutWithNavbar({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
function Admini({ children }) {
  return (
    <>
      <ANavbar/>
      <Slider/>
      <main>{children}</main>
    </>
  );
}
// function LayoutWithoutNavbar({ children }) {
//   return (<Routes>
//           {/* <Route path="/" element={<Login />} /> */}
//           {/* <Route path="/" element={<Home />} /> */}
//            <Route path="/" element={<Login />} />
//             {/*  <Route path='/home' element={<Home />} />
//             <Route path='/Dog' element={<PetsCategory category="dog" />} /> 
//             <Route path='/Cat' element={<PetsCategory category="cat" />} />
//             <Route path='/Fish' element={<PetsCategory category="fish" />} />
//             <Route path='/Bird' element={<PetsCategory category="bird" />} />
//             <Route path='/All' element={<AllCategory />} />
//             <Route path='/Save_me' element={<Save_me />} />
//             <Route path="/pets/:productID" element={<Pets />} /> */}
//           </Routes>);
// }

function LayoutWithoutNavbar({ children }) {
  return <main>{children}</main>;
}
function App() {
  // const location = useLocation();
  // const showNavbar = location.pathname !== "/";
  return (
    <>
      <PetContextProvider>
        <BrowserRouter>
          {/* <Admin /> */}
          {/* {<Navbar />} */}
          <Routes>
          {/* <Route path="/" element={<Login />} /> */}
          {/* <Route path="/" element={<Home />} /> */}
            <Route path="/" element={ <LayoutWithoutNavbar><Login /></LayoutWithoutNavbar>} />
            <Route path="/logout" element={ <LayoutWithoutNavbar><Login /></LayoutWithoutNavbar>} />
            <Route path="/signup" element={ <LayoutWithoutNavbar><Signup /></LayoutWithoutNavbar>} />
            <Route path='/home' element={<LayoutWithNavbar><Home /></LayoutWithNavbar>} />
            <Route path='/Dog' element={ <LayoutWithNavbar><PetsCategory category="dog" /></LayoutWithNavbar>} /> 
            <Route path='/Cat' element={ <LayoutWithNavbar><PetsCategory category="cat" /></LayoutWithNavbar>} />
            <Route path='/Fish' element={ <LayoutWithNavbar><PetsCategory category="fish" /></LayoutWithNavbar>} />
            <Route path='/Bird' element={ <LayoutWithNavbar><PetsCategory category="bird" /></LayoutWithNavbar>} />
            <Route path='/All' element={ <LayoutWithNavbar><AllCategory /></LayoutWithNavbar>} />
            <Route path='/Save_me' element={ <LayoutWithNavbar><Save_me /></LayoutWithNavbar>} />
            <Route path='/admin' element={<Admin/>} />
            <Route path="/addproduct" element={<Addproduct />} />
            <Route path="/listproduct" element={<Removeproduct />} />
            <Route path="/pets/:productID" element={ <LayoutWithNavbar><Pets /></LayoutWithNavbar>} />
            
          </Routes>
        </BrowserRouter>
      </PetContextProvider>
    </>
  )
}

export default App;
