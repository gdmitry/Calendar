import React from "react";
import moment from "moment";

import { Button } from 'semantic-ui-react';
import styles from '../css/calendar.css';

import { Table } from "./Table";
import { Navigation } from "./Navigation";
import { ViewControls } from "./ViewControls";

const timeRange = _.chain(_.range(24))
    .map(String)
    .map((l) => l + ":00")
    .value();

export class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedViewId: 'day',
            activeEvents: [],
            date: moment()
        };
        this.updateViewType = this.updateViewType.bind(this);
        this.navigate = this.navigate.bind(this);
    }

    navigate(steps) {
        console.log("Steps: ", steps);
        let newDate;

        if (steps > 0) {
            newDate = this.state.date.add(1, 'days');
        } else {
            newDate = this.state.date.subtract(1, 'days');
        }

        this.setState({
            date: newDate
        });
    }

    // filterEvents() {
    //     var startDate = moment();
    //     var endDate = startDate + delta;
    //     var eventsToFilter = this.props.data.events;

    //     var filteredEvents = eventsToFilter.filter((event) => {
    //         return moment(event.startDate) > startDate;
    //     });

    //     this.setState({
    //         activeEvents: filteredEvents
    //     });
    // }

    updateViewType(view) {
        console.log("Change view: ", view.name);
        this.setState({
            selectedViewId: view.id
        });
    }

    getDayView() {
        let tableData = {
            header: [this.state.date.format('dddd, MMM Do, YYYY')],
            columns: timeRange,
            rows: [1]
        };

        return <Table data={tableData} />;
    }

    render() {
        let view;

        switch (this.state.selectedViewId) {
            case 'day': view = this.getDayView(); break;
            case 'month': view = this.getMonthView(); break;
            case 'year': view = this.getYearView(); break;
            default: view = '';
        }

        return (
            <div className="calendar">
                <h2 className="ui header no-anchor">Calendar</h2>
                <header className="controls">
                    <Navigation navigate={this.navigate} canBack={true} canForward={true} />
                    <ViewControls viewId={this.state.selectedViewId} setView={this.updateViewType} />
                </header>
                <main>
                    {view}
                </main>
            </div>
        );
    }
}
