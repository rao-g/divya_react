import './App.css';
import Nav from "./app/Nav";
import Contact from "./app/components/ContactUs";
import Home from "./app/components/Home";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
} from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <Nav />
                <Switch>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/" exact component={Home}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
