import React from "react";
import styles from '../css/controls.css';

export class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.back = this.back.bind(this);
        this.forward = this.forward.bind(this);
    }

    back(e) {
        console.log("Back: ", this.props);
        this.props.updateIndex(this.props.stackIndex - 1);
    }

    forward(e) {
        console.log("Forward: ", this.props);
        this.props.updateIndex(this.props.stackIndex + 1);
    }

    disableForward(className) {
        if (this.props.stackIndex === 0) {
            className += " disabled";
        }
        return className;
    }

    disableBack(className) {
        if (this.props.stackIndex + 1 === this.props.navStack.length) {
            className += " disabled";
        }
        return className;
    }

    render() {
        return (
            <div className="navigation">
                <div className="ui pagination menu">
                    <a className={this.disableBack("icon item")} onClick={this.back}>
                        <i aria-hidden="true" className="left chevron icon"></i>
                    </a>
                    <a className={this.disableForward("icon item")} onClick={this.forward}>
                        <i aria-hidden="true" className="right chevron icon"></i>
                    </a>
                </div>
            </div>
        );
    }
}