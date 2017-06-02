import React from "react";
import _ from 'lodash';
import $ from 'jquery';
import  config  from "../data/config";

export class ViewControls extends React.Component {
    constructor(props) {
        super(props);
        this.changeView = this.changeView.bind(this);
    }

    componentDidMount() {
        $('#' + this.props.viewId).addClass('active');
    }

    changeView(e) {
        let buttonElement = $(e.currentTarget);

        $('.ui .button').removeClass('active');
        buttonElement.addClass('active');

        let viewName = buttonElement.text();
        let view = _.find(config.views, view => view.name === viewName);
        this.props.setView(view);
    }

    render() {
        return (
            <div className="ui buttons">
                {config.views.map((view) =>
                    <button className="ui button" id={view.id} onClick={this.changeView} key={view.id}>{view.name}</button>
                )}
            </div>
        );
    }
}