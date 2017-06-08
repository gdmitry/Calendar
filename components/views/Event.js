import React from "react";

export class Event extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div className="event" style={{
            position: 'absolute',
            width: '80%',
            background: 'red',
            height: '300px',
            top: this.props.top,
            left: this.props.left
        }}>
            <div className="time">this.props.time</div>
            <div>this.props.name</div>
        </div>;
    }
}