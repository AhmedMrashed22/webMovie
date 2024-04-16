import {BrowserRouter as Router,Routes,Route } from "react-router-dom" ;
import { Navbare } from "./component/navbar"
import './App.css' ;
import { Auth } from "./pages/auth";
import { Home } from "./pages/home";
import { TvShow } from "./pages/tvshow";
import { Movie } from "./pages/movie";
function App() {
  
  return (
   <div>
       <Router>
        <Navbare />
           <Routes>
              <Route path="/" element=    { <Home />  }  /> 
              <Route path="/auth" element={ <Auth /> }    />
              <Route path="/rated" element={ <h1>Rate</h1>}    /> 
              <Route path="/movie" element={ <Movie /> }   />   
              <Route path="/tvshow" element={ <TvShow /> }   />  
           </Routes>
   

        </Router>
  
        </div>
  );
}

export default App ;
