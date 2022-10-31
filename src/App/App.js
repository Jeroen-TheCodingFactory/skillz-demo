import { Switch, Route } from "react-router-dom";

import Intro from "../Intro/Intro";

import "./App.css";
import QuestionsRouter from "../QuestionsRouter/QuestionsRouter";

const App = () =>{
    return (
       <>
           <Switch>    
                <Route path="/vragen/:number" component={QuestionsRouter} ></Route>
                <Route path="/" component={Intro}></Route>
          </Switch>
       </>
    );
}

export default App;