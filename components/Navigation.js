import React from "react";

export default class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this._back = this._back.bind(this);
        this._forward = this._forward.bind(this);
    }

    _back(e) {
        this.props.navigate(-1);
    }

    _forward(e) {
        this.props.navigate(1);
    }

    render() {
        return (
            <div className="navigation">
                <div className="ui pagination menu">
                    <a className='icon item' onClick={this._back}>
                        <i aria-hidden="true" className="left chevron icon"></i>
                    </a>
                    <a className='icon item' onClick={this._forward}>
                        <i aria-hidden="true" className="right chevron icon"></i>
                    </a>
                </div>
                <button className="ui button" onClick={this.props.resetDate}>Today</button>
            </div>
        );
    }
}