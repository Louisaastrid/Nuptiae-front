
import Destinations from "./views/destinations"
import Error404 from "./views/error404page"
import Header from './components/header/header'
import { BrowserRouter as Router, Route ,Switch } from "react-router-dom";
import Footer from './components/footer/footer'
import Navigation from './components/Navigation/navigation'
import  SearchInpput from "./components/SearchBarre/search";
import Slider from "./components/Slider/slider";

function App() {
  return (
    <Router> 
    <div className="App">
      <Header/>
      <Navigation/>
      <Slider/>
       {/* <Destinations/> */}
       <Switch> 
        <Route path="/destinations" exact component={Destinations} />
        <Route path="/search" exact component={SearchInpput} />
        <Route path="*" exact component={Error404} />
      </Switch>

      <Footer/>
    </div>
    </Router>
  );
}

export default App;
