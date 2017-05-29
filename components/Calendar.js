import React from "react";
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
                scale: "4Days"
            },
            activeEvents: [

            ],
            currentIndex: 0
        };
        this.setCurrentIndex = this.setCurrentIndex.bind(this);
    }

    setCurrentIndex(num) {
        this.setState({
            currentIndex: num
        });
    }

    render() {
        return (
            <div className="calendar">
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
