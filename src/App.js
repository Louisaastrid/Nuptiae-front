
import Destinations from "./views/destinations"
import Header from './components/header/header'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Caroussel from './components/Caroussel/Caroussel'
import Filter from './components/Filter/filter'
import Footer from './components/footer/footer'
function App() {
  return (
    <Router> 
    <div className="App">
      <Header/>
      <Caroussel/>
      <div>
         <Filter/>
      </div>
      <Footer/>
       {/* <Destinations/> */}
        <Route path="/destinations" component={Destinations} />
    </div>
    </Router>
  );
}

export default App;
