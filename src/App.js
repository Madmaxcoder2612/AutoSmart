import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import CombustionEngine from "./pages/CombustionEngine/CombustionEngine"
import F6Boxer from "./pages/F6Boxer/F6Boxer"
import Turbofan from "./pages/Turbofan/Turbofan"
import V8Pontic from "./pages/V8Pontiac/V8Pontiac"
import Models3D from "./pages/3DModels/3DModels"
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/models3D' exact component={Models3D} />
        <Route path='/combustion' exact component={CombustionEngine} />
        <Route path='/f6boxer' exact component={F6Boxer} />
        <Route path='/turbofan' exact component={Turbofan} />
        <Route path='/v8pontic' exact component={V8Pontic} />
      </Switch>

      {/* <Chatbot /> */}

      {/* <Footer /> */}

    </Router>
  );
}

export default App;
