import { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import App from "../App";
import Hotview from "../menuviews/CommutiyDisplay";
import Admin from "../Admin";
import Resource from "../menuviews/GdeltAnalysis";
import EarthAnimation from "../menuviews/firsthome";
import Home from "../menuviews/StreamDisplay";
import ConnectionAnalysis from "../menuviews/ConnectionAnalysis";
import TradeAnalysis from "../menuviews/TradeAnalysis";
import ThemeMap from "../menuviews/ThemeMap";
class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <App>
                    <Route path=""
                        render={() =>
                            <Admin>
                                <Route path="/" component={Home} exact></Route>
                                <Route path="/firsthome" component={EarthAnimation} exact></Route>
                                <Route path="/flow" component={Home} exact ></Route>
                                <Route path="/hotview" component={Hotview} exact></Route>
                                <Route path="/analysis" component={Resource} exact></Route>
                                <Route path="/ConnectionAnalysis" component={ConnectionAnalysis} exact></Route>
                                <Route path="/TradeAnalysis" component={TradeAnalysis} exact></Route>
                                <Route path="/ThemeMap" component={ThemeMap} exact></Route>
                            </Admin>}>
                    </Route>
                </App>
            </BrowserRouter>
        );
    }
}
export default Router;

