import React from "react";
//import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import question from './question';
import List from './list';
import Exam from './Exam';
import form1 from './Form/Form1'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
    return (
        <Router>
            <div>
                <Header />

                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/form1" component={form1} />
                <Route path="/question" component={question} />
                <Route path="/List" component={List} />
                <Route path="/topics" component={Topics} />
                <Route path="/Exam" component={Exam} />
            </div>
        </Router>
    );
}

function Home() {
    return <h2>Home</h2>;
}

function Question() {
        return(
            <div>
                <h1>Hello world</h1>
                {question.map((e,i)=>{
                    return <List question={e.question}  answer={e.answer} handler={this.handler}/>;
                })}
            </div>
        );
}
function Form() {
    return <h2>form1</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Topic({ match }) {
    return <h3>Requested Param: {match.params.id}</h3>;
}

function Topics({ match }) {
    return (
        <div>
            <h2>Topics</h2>

            <ul>
                <li>
                    <Link to={`${match.url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
                </li>
            </ul>

            <Route path={`${match.path}/:id`} component={Topic} />
            <Route
                exact
                path={match.path}
                render={() => <h3>Please select a topic.</h3>}
            />
        </div>
    );
}

function Header() {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/form1">Form</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/topics">Topics</Link>
            </li>
            <li>
                <Link to="/question">Question</Link>
            </li>
            <li>
                <Link to="/List">List</Link>
            </li>
            <li>
                <Link to="/Exam">Exam</Link>
            </li>
        </ul>
    );
}

export default App;