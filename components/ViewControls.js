import React from "react";
import styles from '../css/controls.css';

const viewButtons = ["Today", "4Days", "Week", "Month"];

export class ViewControls extends React.Component {
    constructor(props) {
        super(props);
    }

    changeView(name) {
        console.log("Change view: ", name);
    }

    render() {
        const buttons = viewButtons.map((buttonName) =>
            <button className="ui button" onClick={this.changeView(buttonName)} key={buttonName}>{buttonName}</button>
        );
        return (
            <div className="ui buttons">
                {buttons}
            </div>
        );
    }
}