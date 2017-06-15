import React from 'react';

export default class Event extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
		let styles = {            
            top: this.props.top,
            left: this.props.left
        };
        return <div className='calendar-event' style={styles}>
            <div className='calendar-event-time'>this.props.time</div>
            <div>this.props.name</div>
        </div>;
    }
}