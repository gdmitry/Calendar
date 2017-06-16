import React from 'react';
import _ from 'lodash';
import $ from 'jquery';
import  config  from '../data/config';

export default class ViewControls extends React.Component {
    constructor(props) {
        super(props);
        this._changeView = this._changeView.bind(this);		
    }   

	_getButtonClassName(id) {
		return 'ui button ' + (this.props.viewId === id ? 'active': '');
	}

    _changeView(e) {
		let buttonElement = $(e.currentTarget);
        let viewName = buttonElement.text();
        let view = _.find(config.views, view => view.name === viewName);
        this.props.setView(view);
    }

    render() {
        return (
            <div className='ui buttons'>
                {_.map(config.views, (view) => {
                    return <button 
					className={this._getButtonClassName(view.id)}
					id={view.id}
					onClick={this._changeView}
					key={view.id}>{view.name}</button>
				})}
            </div>
        );
    }
}