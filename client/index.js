'use strict';

import { createHistory } from 'history'
import React, { Component } from 'react';
import App from './app';

let history = createHistory();

class Root extends Component {

    constructor(props) {

        super(props);

        this.state = {};
    };

    componentWillMount() {

        let unlisten = history.listen((location) => {

            this.setState({
                location: location
            });
        });

        this.setState({
            unlisten: unlisten
        });
    };

    componentWillUnmount() {

        this.state.unlisten();
    };

    onHistory(newLocation) {

        history.pushState({}, newLocation);
    };

    render() {

        return <App data={this.props.data} location={this.state.location} onHistory={this.onHistory}/>
    };
};

const rootElement = document.getElementById('root');
React.render(<Root data={DATA}/>, rootElement);
