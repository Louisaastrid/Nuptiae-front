
import Destinations from "./views/destinations"
import Header from './components/header/header'
import { BrowserRouter as Router, Route } from "react-router-dom";
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
        <Route path="/destinations" component={Destinations} />
         <Route path="/search" component={SearchInpput} />

      <Footer/>
    </div>
    </Router>
  );
}

export default App;
