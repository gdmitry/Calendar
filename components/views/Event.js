import React from "react";
import _ from "lodash";
import $ from 'jquery';

export class Event extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div className="event" style={
            {
                position: 'absolute',
                width: '60%',
                background: 'red',
                height: '300px',
                top: '100px',
                left: '100px'
            }}>
            <div className="time">10:00 - 11:00</div>
            <div>Dogscience</div>
        </div>;
    }
}