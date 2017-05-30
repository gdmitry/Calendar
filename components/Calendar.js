import React from "react";
import moment from "moment";

import { Button } from 'semantic-ui-react';
import styles from '../css/calendar.css';

import { EventsTable } from "./EventsTable";
import { Navigation } from "./Navigation";
import { ViewControls } from "./ViewControls";

export class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: {
                label: "4Days",
                delta: 4
            },
            activeEvents: [],
            currentIndex: 0
        };
        this.setCurrentIndex = this.setCurrentIndex.bind(this);
    }

    setCurrentIndex(num) {
        this.setState({
            currentIndex: num
        });
        this.filterEvents();
    }

    filterEvents() {
        var startDate = moment();
        var endDate = startDate + delta;
        var eventsToFilter = this.props.data.events;

        var filteredEvents = eventsToFilter.filter((event) => {
            return moment(event.startDate) > startDate;
        });

        this.setState({
            activeEvents: filteredEvents
        });
    }

    render() {
        return (
            <div className="calendar">
                <h2 className="ui header no-anchor" id="types" style={{ marginBottom: "1em" }}>Calendar</h2>
                <header className="controls">
                    <Navigation navStack={this.state.activeEvents} stackIndex={this.state.currentIndex} updateIndex={this.setCurrentIndex} />
                    <ViewControls />
                </header>
                <main>
                    <EventsTable />
                </main>
            </div>
        );
    }
}
