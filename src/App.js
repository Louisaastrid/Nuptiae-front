
import Destinations from "./views/destinations"
import Header from './components/header/header'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from './components/footer/footer'
function App() {
  return (
    <Router> 
    <div className="App">
      <Header/>
     
   
       {/* <Destinations/> */}
        <Route path="/destinations" component={Destinations} />
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
