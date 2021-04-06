import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Start from './pages/Start';
import {HookState} from './pages/HookState';
import {HookRef} from './pages/HookRef';
import {HookEffect} from './pages/HookEffect';
import {HookContext} from './pages/HookContext';
import {Forms} from './pages/Forms';
import Layout from "./components/Layout";
import NotFound from "./components/NotFound";
import HookMemo from "./pages/HookMemo";
import HookReducer from "./pages/HookReducer";
import HookCallback from "./pages/HookCallback";
import HookImperativeHandle from "./pages/HookImperativeHandle";
import HookLayoutEffect from "./pages/HookLayoutEffect";
import HookDebugValue from "./pages/HookDebugValue";
import PokeDex from './pages/PokeDex';
import './App.css';

export const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/' component={Start}/>
          <Route path='/HookState' component={HookState}/>
          <Route path='/HookRef' component={HookRef}/>
          <Route path='/HookEffect' component={HookEffect}/>
          <Route path='/HookContext' component={HookContext}/>
          <Route path='/HookMemo' component={HookMemo}/>
          <Route path='/HookReducer' component={HookReducer}/>
          <Route path='/HookCallback' component={HookCallback}/>
          <Route path='/HookImperativeHandle' component={HookImperativeHandle}/>
          <Route path='/HookLayoutEffect' component={HookLayoutEffect}/>
          <Route path='/HookDebugValue' component={HookDebugValue}/>
          <Route path='/PokeDex' component={PokeDex}/>
          <Route path='/Forms' component={Forms}/>
          <Route component={NotFound}/>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
