import React,{Component} from 'react';
import question from './question';
import List from './list';

class App extends Component{

    handler(){
        console.log("hello");
    }
    render(){
        return(
            <div>
                <h1>Hello world</h1>
                {question.map((e,i)=>{
                    return <List question={e.question}  answer={e.answer} handler={this.handler}/>;
                })}
            </div>
        );
    }
}


export default App