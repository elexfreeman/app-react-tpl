import React from 'react';
import { BrowserRouter as Router, HashRouter, Route, Link } from "react-router-dom";

import './App.css';
import { Header } from './Module/Wraper/Header';

import { testService } from "./Service/TestService";
import { IndexPage } from './Pages/IndexPage';
import SamplePage from './Pages/SamplePage';

export interface AppPropsI { }

export interface AppStateI {
    data: string;
}


/**
 * Класс-компонент приложения
 */
class App extends React.Component<AppPropsI, AppStateI> {

    constructor(props: AppPropsI) {
        super(props);
        this.state = {
            data: '',
        };
    }

    componentDidMount() {

        testService.fGetData((data) => {
            this.setState({
                data: data,
            })
        });

        let k = 0;
        setInterval(() => {
            k++;
            testService.fSetData(String(k))
        }, 3000);
    }

    public render() {
        return (
            <div className="App">
                <Header caption="Caption" />
                <HashRouter>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/products/1">First Product</Link>
                            </li>
                            <li>
                                <Link to="/products/2">Second Product</Link>
                            </li>
                            <li>
                                <Link to="/sample">Sample</Link>
                            </li>
                        </ul>
                    </nav>

                    <Route path="/" exact component={IndexPage} />
                    <Route path="/sample" exact component={SamplePage} />
                </HashRouter>
            </div>
        )
    }

}

export default App;
