// // export default App
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/navbar/Navbar'; 
// import Homepage from './components/Home/homepage';


// const Home = () => <div>Home Page</div>;
// const PastEvents = () => <div>Past Events Page</div>;
// const ContactUs = () => <div>Contact Us Page</div>;
// const AboutUs = () => <div>About Us Page</div>;
// const SignIn = () => <div>Sign In Page</div>;
// const SignUp = () => <div>Sign Up Page</div>;

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Homepage/>
//       <Routes>
//         <Route exact path="./components/Home/homepage" component={Home} />
//         <Route path="/past-events" component={PastEvents} />
//         <Route path="/contact-us" component={ContactUs} />
//         <Route path="/about-us" component={AboutUs} />
//         <Route path="/sign-in" component={SignIn} />
//         <Route path="/sign-up" component={SignUp} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import React from 'react';
import './App.css';
import PastEvents from './PastEvents';
// import Filter from './Filter';
// import FilterOption from './components/FilterOption';

const App = () => {
  return (     
    <div className="App">
      <PastEvents />
      {/* <Filter /> */}
      {/* <FilterOption /> */}
    </div> 
  );
}

export default App;