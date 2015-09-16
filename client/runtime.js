import React, { PropTypes } from 'react';
import Card from './components/card';

// runtime: versions, execPath, argv, execArgv, cwd, env
// connections Array: uri, labels, routes, plugins

export default class Runtime {
    static propTypes = {
        data: PropTypes.object
    };

    buildVersions() {

        const versionData = this.props.data.versions;
        let versions = [];

        Object.keys(versionData).forEach((version) => {

            versions.push(
                <tr key={version}>
                    <td className='mdl-data-table__cell--non-numeric'>{version}</td>
                    <td className='mdl-data-table__cell--non-numeric'>{versionData[version]}</td>
                </tr>
            );
        });

        let versionTable = (
            <table className='mdl-data-table mdl-js-data-table' style={{width: '100%'}}>
                <thead>
                    <tr>
                        <th className='mdl-data-table__cell--non-numeric'>Module</th>
                        <th className='mdl-data-table__cell--non-numeric'>Version</th>
                    </tr>
                </thead>
                <tbody>
                    {versions}
                </tbody>
            </table>
        );

        return versionTable;
    };

    buildProcess() {

        const runtime = this.props.data;
        let args = runtime.argv.map((arg, index) => <div key={'argv' + index}>{arg}</div>);

        let processContent = (
            <div>
                <h5>Executed From</h5>
                {runtime.execPath}
                <hr />
                <h5>Using the following arguments</h5>
                {args}
                <hr />
                <h5>Current Working Directory</h5>
                {runtime.cwd}
            </div>
        );

        return processContent;
    };

    buildEnvironment() {

        const environment = this.props.data.env;
        let environments = [];

        Object.keys(environment).forEach((env) => {

            environments.push(
                <tr key={env}>
                    <td className='mdl-data-table__cell--non-numeric'>{env}</td>
                    <td className='mdl-data-table__cell--non-numeric'>{environment[env]}</td>
                </tr>
            );
        });

        let environmentTable = (
            <table className='mdl-data-table mdl-js-data-table' style={{width: '100%'}}>
                <thead>
                    <tr>
                        <th className='mdl-data-table__cell--non-numeric'>Key</th>
                        <th className='mdl-data-table__cell--non-numeric'>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {environments}
                </tbody>
            </table>
        );

        return environmentTable;
    };

    render() {

        const runtime = this.props.data;

        return (
            <div className='mdl-grid'>
                <div className='mdl-cell mdl-cell--6-col'>
                    <Card title='Runtime Environment' content={this.buildVersions()} /><br/>
                </div>
                <div className='mdl-cell mdl-cell--6-col'>
                    <Card title='Process' content={this.buildProcess()} />
                </div>
                <div className='mdl-cell mdl-cell--8-col'>
                    <Card title='Environment' content={this.buildEnvironment()}/>
                </div>
            </div>
        );
    };
};
