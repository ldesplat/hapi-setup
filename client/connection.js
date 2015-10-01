'use strict';

import React, { PropTypes } from 'react';
import Card from './components/card';

// runtime: versions, execPath, argv, execArgv, cwd, env
// connections Array: uri, labels, routes, plugins

export default class Connections {
    static propTypes = {
        data: PropTypes.object,
        index: PropTypes.number
    };

    buildPlugins(plugins) {

        let pluginView = Object.keys(plugins).map((name, index) => {

            const plugin = plugins[name];
            return (
                <tr key={'' + this.props.index + name}>
                    <td className='mdl-data-table__cell--non-numeric'>{plugin.name}</td>
                    <td className='mdl-data-table__cell--non-numeric'>{plugin.version}</td>
                </tr>
            );
        });

        return (
            <table className='mdl-data-table mdl-js-data-table' style={{width: '100%'}}>
                <thead>
                    <tr>
                        <th className='mdl-data-table__cell--non-numeric'>Plugin</th>
                        <th className='mdl-data-table__cell--non-numeric'>Version</th>
                    </tr>
                </thead>
                <tbody>
                    {pluginView}
                </tbody>
            </table>
        );
    };

    buildRoutes(routes) {

        let rows = routes.map((route, index) => {
            return (
                <tr key={'' + this.props.index + route.method + route.path}>
                    <td className='mdl-data-table__cell--non-numeric'>{route.method}</td>
                    <td className='mdl-data-table__cell--non-numeric'>{route.path}</td>
                    <td className='mdl-data-table__cell--non-numeric'>{route.plugin}</td>
                </tr>
            )
        });

        return (
            <table className='mdl-data-table mdl-js-data-table' style={{width: '100%'}}>
                <thead>
                    <tr>
                        <th className='mdl-data-table__cell--non-numeric'>Method</th>
                        <th className='mdl-data-table__cell--non-numeric'>Path</th>
                        <th className='mdl-data-table__cell--non-numeric'>Plugin</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }

    render() {

        const connection = this.props.data;
        const index = this.props.index;
        let labels = connection.labels.map((label, index) => <span key={'c' + index + label}>{label} </span>);
        let plugins = this.buildPlugins(connection.plugins, index);
        let routes = this.buildRoutes(connection.routes, index);

        return (
            <div key={'connection' + index} className='mdl-grid'>
                <h4 key={index}>Connection with uri [{connection.uri}] and the following labels[{labels}]</h4>
                <Card title='Plugins' content={plugins}/>
                <Card title='Routes' content={routes}/>
            </div>
        );
    };
};
