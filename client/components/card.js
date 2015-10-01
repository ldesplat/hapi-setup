'use strict';

import React, { PropTypes, Component } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import { Flex } from 'jsxstyle';
import { tabHeight, primaryColor, secondaryColor } from '../LayoutConstants';

export default class Card extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        content: PropTypes.node.isRequired,
        actions: PropTypes.node
    };

    shouldComponentUpdate = shouldPureComponentUpdate;

    render() {

        return (
            <Flex
                flexDirection='column'
                width={400}
                margin='5'>
                <Flex
                    alignItems='center'
                    justifyContent='center'
                    backgroundColor={primaryColor}
                    height={tabHeight}
                    color='white'>
                    <span>{this.props.title}</span>
                </Flex>
                {this.props.content}
            </Flex>
        );
    };
};
