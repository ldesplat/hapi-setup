import React, { PropTypes } from 'react';

export default class Card {

    static propTypes = {
        title: PropTypes.string.isRequired,
        content: PropTypes.node.isRequired,
        actions: PropTypes.node
    };

    render() {

        return (
            <div className="mdl-card mdl-shadow--2dp" style={{width: '100%', marginBottom: 10}}>
                <div className="mdl-card__title mdl-card--border" style={{backgroundColor: '#607D8B', color: 'white'}}>
                    <h2 className="mdl-card__title-text">{this.props.title}</h2>
                </div>
                <div className="mdl-card__supporting-text mdl-card--border">{this.props.content}</div>
                {/*<div className="mdl-card__actions mdl-card--border">
                    <a href="#">Copy Data</a>
                </div>*/}
            </div>
        );
    };
};
