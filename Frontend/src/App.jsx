// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/Profiles/Header'
// import Homepage from './components/Home/homepage';
// import OrgProfile from './pages/OrgProfilePage';
// import Logo from './assets/Rated.png';
// import SeminarNav from './components/navbar/SeminarNav';


// // const OrgProfilePage = () => <Homepage />;
// // const PastEvents = () => <div>PastEvents</div>;
// // const RecievedSeminarsReq = () => <div>RecievedSeminarsReq</div>;
// // const RecievedVolunteerReq = () => <div>RecievedVolunteerReq</div>;
// // const Seminars = () => <div>Seminars</div>;
// // const Statistics = () => <div>Statistics</div>;




// const App =() => {
//   let Array = [
//     {id: "home"},
//     {id: "orgProfile"},
//     {id: "pastEvents"},
//     {id: "recievedSeminarsReq"},
//     {id: "recievedVolunteerReq"},
//     {id: "seminars"}]
    

//   return (
//     <SeminarNav 
//     NavBarArray={Array} 
//     />
//   );
// };

// export default App;

// {/*<Router>
//         <Header OLogo={Logo}/>
//         <OrgProfile />
//         <Routes>
//             <Route exact path="./pages/OrgProfilePage" component={OrgProfilePage} />
//             <Route path="./components/Home/homepage" component={PastEvents} />
//             <Route path="/" component={RecievedSeminarsReq} />
//             <Route path="/" component={RecievedVolunteerReq} />
//             <Route path="/" component={Seminars} />
//             <Route path="/" component={Statistics} />
//         </Routes>
//     </Router>   */}

import React from "react";
import TableComponent from "./components/TableComponent";

const App = () => {
  return (
    <TableComponent />
  );
};

export default App;