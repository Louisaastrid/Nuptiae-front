
import Destinations from "./views/destinations"
import Error404 from "./views/error404page"
import { BrowserRouter as Router, Route ,Switch } from "react-router-dom";
import Footer from './components/footer/footer'

import accueil from "./views/accueil";
import listeDeNoce from "./views/listeDeNoce";
import blog from "./views/blog";
import activites from "./views/activites";
import inscription from "./views/inscription";
import authentification from "./views/authentification"
function App() {
  return (
    <Router> 
    <div className="App">
     


       {/* <Destinations/> */}
        <Switch>
        <Route path="/" exact component={accueil} />
        <Route path="/destinations" exact component={Destinations} />
        <Route path="/liste" exact  component={listeDeNoce}  />
        <Route path="/activites" exact  component={activites}  />
        <Route path="/blog" exact  component={blog}  />
        <Route path="/inscription" exact  component={inscription}  />
        <Route path="/authentification" exact  component={authentification}  />
        <Route path="*" exact component={Error404} />
        <Route path="/search" />
        </Switch>

      <Footer/>
    </div>
    </Router>
  );
}

export default App;
