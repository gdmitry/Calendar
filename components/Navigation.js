import React from "react";
import styles from '../css/controls.css';

export class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.back = this.back.bind(this);
        this.forward = this.forward.bind(this);
    }

    back(e) {
        this.props.navigate(-1);
    }

    forward(e) {
        this.props.navigate(1);
    }

    render() {
        return (
            <div className="navigation">
                <div className="ui pagination menu">
                    <a className='icon item' onClick={this.back}>
                        <i aria-hidden="true" className="left chevron icon"></i>
                    </a>
                    <a className='icon item' onClick={this.forward}>
                        <i aria-hidden="true" className="right chevron icon"></i>
                    </a>
                </div>
                <button className="ui button" onClick={this.props.resetDate}>Today</button>
            </div>
        );
    }
}