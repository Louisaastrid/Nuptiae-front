
import Destinations from "./views/destinations"
import Header from './components/header/header'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from './components/footer/footer'
import Navigation from './components/Navigation/navigation'
import Slider from "./components/Slider/slider";

import  SearchInpput from "./components/SearchBarre/search";
import accueil from "./views/accueil";
import listeDeNoce from "./views/listeDeNoce";
import blog from "./views/blog";
import activites from "./views/activites";
function App() {
  return (
    <Router> 
    <div className="App">
      <Header/>
      <Navigation/>
            <Slider/>


       {/* <Destinations/> */}
        <Route path="/" component={accueil} />
        <Route path="/destinations" component={Destinations} />
        <Route path="/liste" component={listeDeNoce}  />
        <Route path="/activites" component={activites}  />
        <Route path="/bloc" component={blog}  />
        <Route path="/search" />

      <Footer/>
    </div>
    </Router>
  );
}

export default App;
