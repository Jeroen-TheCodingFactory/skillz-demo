import React from "react";
import { Switch, Route } from "react-router-dom";

import Intro from "../Intro/Intro";
import Outro from "../Outro/Outro";
import "./App.css";
import QuestionsRouter from "../QuestionsRouter/QuestionsRouter";

class App extends React.Component{
    constructor(){
        super();
        this.state = {questionsAndAnswers: []};
    }

    onLast = (newQuestionsAndAnswers) => {
       this.setState({questionsAndAnswers: newQuestionsAndAnswers});
    }

    render(){
        return (
            <>
                <Switch>    
                     <Route path="/vragen/:number">
                         <QuestionsRouter onLast={this.onLast} />
                     </Route>
                     <Route path="/outro">
                        <Outro questionsAndAnswers={this.state.questionsAndAnswers}></Outro>
                    </Route>
                     <Route path="/" component={Intro}></Route>
               </Switch>
            </>
         );
    }
   
}

export default App;