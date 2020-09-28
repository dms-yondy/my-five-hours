import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Today from './components/pages/Today';
import Past from './components/pages/Past';
import SignIn from './components/pages/SignIn';



function App() {
  return (
   <>
   <Router>
     <Navbar />
     <Switch>
       <Route path="/" exact component={Home} />
       <Route path="/today" exact component={Today} />
       <Route path="/past" exact component={Past} />
       <Route path="/sign-in" exact component={SignIn} />
     </Switch>
   </Router>
   </>
  );
}

export default App;
