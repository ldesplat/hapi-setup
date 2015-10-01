'use strict';

import React, { PropTypes, Component } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import { Flex, rgb } from 'jsxstyle';
import Runtime from './runtime';
import Tab from './components/tab';
import Connection from './connection';
import { primaryColor, secondaryColor, textColor, tabHeight } from './LayoutConstants';

// runtime: versions, execPath, argv, execArgv, cwd, env
// connections Array: uri, labels, routes, plugins

export default class App extends Component {

    static propTypes = {
        data: PropTypes.shape({
            runtime: PropTypes.object.isRequired,
            connections: PropTypes.array.isRequired
        }).isRequired,
        location: PropTypes.object.isRequired,
        onHistory: PropTypes.func.isRequired
    };

    shouldComponentUpdate = shouldPureComponentUpdate;

    constructor(props) {

        super(props);
    };

    render() {

        const connections = this.props.data.connections;

        let tabs = [ <Tab key='tab-0' title='Process' link='process' onClick={this.props.onHistory}/> ];
        //let connectionSections = [];

        connections.forEach((connection, index) => {

            const name = 'Connection ' + (index + 1);
            const selector = 'connection-' + (index + 1);
            tabs.push( <Tab key={'tab-' + (index + 1)} title={name} link={selector} onClick={this.props.onHistory}/>);
        });

        let content;

        const loc = this.props.location.pathname

        if (loc.indexOf('process') !== -1) {
            content = <Runtime data={this.props.data.runtime} />;
        }
        else if (loc.indexOf('connection') !== -1) {
            let index = parseInt(loc.slice(loc.indexOf('connection') + 11));
            content = <Connection data={this.props.data.connections[index - 1]} index={index} />
        }

        return (
            <Flex flexDirection='column' color={textColor}>
                <Flex
                    justifyContent='center'
                    alignItems='center'
                    height={tabHeight}
                    backgroundColor={primaryColor}>
                    <span style={{
                        color: 'white',
                        fontWeight: 400,
                        fontSize: '1.5em'
                    }}>
                        Hapi Setup
                    </span>
                </Flex>
                <Flex
                    flexDirection='row'
                    alignItems='flex-start'
                    flexWrap='wrap'
                    backgroundColor={primaryColor}
                    marginBottom='10'>
                    {tabs}
                </Flex>
                <Flex>
                    {content}
                </Flex>
            </Flex>
        );
    };
};
