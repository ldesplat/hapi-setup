'use strict';

import React, { PropTypes, Component } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import { Flex } from 'jsxstyle';
import { tabHeight, tabWidth, secondaryColor } from '../LayoutConstants';

export default class Tab extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired
    };

    shouldComponentUpdate = shouldPureComponentUpdate;

    onClick(event) {

        event.preventDefault();
        this.props.onClick(this.props.link);
    };

    render() {

        const { title, link } = this.props;

        return (
            <a
                href={link}
                style={{color: 'white', textDecoration: 'none'}}
                onClick={this.onClick.bind(this)}>
                <Flex
                    flexDirection='column'>
                    <Flex
                        justifyContent='center'
                        alignItems='center'
                        width={tabWidth}
                        height={tabHeight}
                        paddingTop={3}>
                        {title}
                    </Flex>
                    <Flex
                        height={3}
                        width={tabWidth-10}
                        backgroundColor={secondaryColor}
                        marginLeft={5}
                    />
                </Flex>
            </a>
        );
    };
};
