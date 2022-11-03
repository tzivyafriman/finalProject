
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { Routes, Route, Link } from "react-router-dom";
import { ShowFood } from './components/ShowFood';
import AboutFood from './components/AboutFood';
import { detailsFoodProvider } from './context/detailsFood';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import DetailsUserMeals from './components/DetailsUserMeals';
import axios from 'axios';

// import { Books } from './components/Books';
// import { Book } from './components/Book';
// import { Setting } from './components/Setting';

// const routes = [
// {
//   route: 'about',
//   Component: About,
//   name: 'About',
// }, 
// {
//   route: 'setting',
//   Component: Setting,
//   name: 'Setting',
// }, 
// {
//   route: 'books',
//   Component: Books,
//   name: 'Books',
// }];

function App() {
  return (
    //   <div className="App">
    //     <menu>
    //       <ul>
    //         { routes.map(route => <li key={route.route}> <Link to={route.route}> { route.name } </Link> </li>) }
    //       </ul>        
    //     </menu>

    //     <div>
    
    //try git in client
    <detailsFoodProvider>
      <Routes>
          <Route exact path="/" element={<ShowFood />} />
          <Route path="/aboutFood" element={<AboutFood />} />
          <Route exact path="/SignUp" element={<SignUp />} />
          <Route exact path="/SignIn" element={<SignIn />} />
          <Route exact path="/DetailsUserMeals" element={<DetailsUserMeals />} />
      </Routes>
   </detailsFoodProvider>
    //     </div>
    //   </div>
  );

}

//  componentDidMount() {
//   // GET request using axios with error handling
//   axios.get('https://localhost:44325')
//       .then(response =>{console.log(response.data);})
//       .catch(error => {
//           this.setState({ errorMessage: error.message });
//           console.error('There was an error!', error);
//       });
// }

// function getAllUser()
// {
//     fetch ('/users'+'/GetAllUsers',{
//     method:'GET',
//     headers:{
//         'Accept':'aplication.json',
//         'Content-Type':'aplication.json',
//         //'Authorization':'Bearer  ' + currentToken,
//     }
// })
// .then(response => response.json())
//     .then((data)=>{
//         console.log(data);
//     } )
//     .catch(error=> console.log(error))
// }
// ;
export default App;
















// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );



