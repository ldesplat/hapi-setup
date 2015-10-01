'use strict';

import React, { PropTypes, Component } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import { Flex, Table, TableCell, TableRow } from 'jsxstyle';
import { tabHeight, primaryColor, secondaryColor } from './LayoutConstants';
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
                <TableRow key={version}>
                    <TableCell>{version}</TableCell>
                    <TableCell>{versionData[version]}</TableCell>
                </TableRow>
            );
        });

        let versionTable = (
            <Table>
                <TableRow>
                    <TableCell alignItems='center' justifyContent='center'>Module</TableCell>
                    <TableCell>Version</TableCell>
                </TableRow>
                {versions}
            </Table>
        );

        return versionTable;
    };

    buildProcess() {

        const runtime = this.props.data;
        let args = runtime.argv.map((arg, index) => <div key={'argv' + index}>{arg}</div>);

        let processContent = (
            <div>
                <div>Executed From</div>
                {runtime.execPath}
                <hr />
                <div>Using the following arguments</div>
                {args}
                <hr />
                <div>Current Working Directory</div>
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
                <TableRow key={env}>
                    <TableCell>{env}</TableCell>
                    <TableCell>{environment[env]}</TableCell>
                </TableRow>
            );
        });

        let environmentTable = (
            <Table>
                <TableRow>
                    <TableCell>Key</TableCell>
                    <TableCell>Value</TableCell>
                </TableRow>
                {environments}
            </Table>
        );

        return environmentTable;
    };

    render() {

        const runtime = this.props.data;

        return (
            <Flex
                flexWrap='wrap'>
                <Card title='Runtime Environment' content={this.buildVersions()} />
                <Card title='Process' content={this.buildProcess()} />
                <Card title='Environment' content={this.buildEnvironment()}/>
            </Flex>
        );
    };
};
