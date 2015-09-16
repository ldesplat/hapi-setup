import React, { PropTypes } from 'react';
import Runtime from './runtime';
import Connection from './connection';

// runtime: versions, execPath, argv, execArgv, cwd, env
// connections Array: uri, labels, routes, plugins

export default class App {
    static propTypes = {
        data: PropTypes.object
    };

    render() {

        const connections = this.props.data.connections;

        let connectionNames = [];
        let connectionSections = [];

        connections.forEach(function (connection, index) {

            const name = 'Connection ' + (index + 1);
            const selector = 'connection-' + index;
            connectionNames.push(
                <a key={'link-' + name} href={'#' + selector} className='mdl-layout__tab'>{name}</a>
            );

            connectionSections.push(
                <section key={selector} className='mdl-layout__tab-panel' id={selector}>
                    <div className='page-content'>
                        <Connection data={connection} index={index} />
                    </div>
                </section>
            );
        });

        return (
            <div className='mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--fixed-tabs'>
                <header className='mdl-layout__header'>
                    <div className='mdl-layout__header-row'>
                        <span className='mdl-layout-title'>Hapi Setup</span>
                    </div>
                    <div className='mdl-layout__tab-bar mdl-js-ripple-effect'>
                        <a href='#fixed-tab-1' className='mdl-layout__tab is-active'>Runtime Information</a>
                        {connectionNames}
                    </div>
                </header>
                <div className='mdl-layout__drawer'>
                    <span className='mdl-layout-title'>Hapi Setup</span>
                </div>
                <main className='mdl-layout__content'>
                    <section className='mdl-layout__tab-panel is-active' id='fixed-tab-1'>
                        <div className='page-content'>
                            <Runtime data={this.props.data.runtime} />
                        </div>
                    </section>
                    {connectionSections}
                </main>
            </div>
        );
    };
};
