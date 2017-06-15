import React from "react";
import moment from "moment";
import config from "../data/config";
import CalendarEventModel from "../js/CalendarEventModel";

import { Button } from 'semantic-ui-react';
import  Navigation from "./Navigation";

import DayView from "./DayView";
import Table from "./Table";
import ViewControls from "./ViewControls";

export default class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedView: _.find(config.views, view => view.id === 'day'),
            activeEvents: [],
            date: moment()
        };

        this.updateViewType = this.updateViewType.bind(this);
        this.navigate = this.navigate.bind(this);
        this.setToday = this.setToday.bind(this);
    }

    navigate(steps) {
        let view = this.state.selectedView;
        let newDate = this.state.date.clone()[steps > 0 ? 'add' : 'subtract'](view.amount, view.measure);

        this.setState(function (prevState) {
            return {
                date: newDate,
                activeEvents: this.processEvents(prevState.selectedView, newDate)
            };
        });
    }

    setToday() {
        let todayDate = moment();
        this.setState((prevState) => ({
            date: todayDate,
            activeEvents: this.processEvents(prevState.selectedView, todayDate)
        }));
    }

    processEvents(viewId, startDate) {
        let filtered = this.filterEvents(viewId, startDate);
        console.log("Filtered events: ", filtered);
        // this.renderEvents(filtered);
    }

    filterEvents(view, startDate) {
        let endDate = startDate.clone().add(view.amount, view.measure);

        return _.chain(config.events)
            .map((event) => {
                return new CalendarEventModel(event);
            })
            .filter((event) => {
                return event.date > startDate && event.date < endDate;
            })
            .value();
    }

    renderEvents(events) {
        _.forEach(events, (event) => {

        });

        let hours = props.startDate.hours();
        let d = this.headerCellSize.y * (hours + 1);
        let l = this.headerCellSize.x;

        this.setState({
            events: [event]
        });
    }

   	updateViewType(view) {
        this.setState(function (prevState) {
            return {
                selectedView: view,
                activeEvents: this.processEvents(view, prevState.date)
            };
        });
    }   

    render() {
        let currrentView;
        let viewId = this.state.selectedView.id;

        // Table data
        let date = this.state.date.format('dddd, MMM Do, YYYY');
        const timeRange = _.chain(_.range(24))
            .map(String)
            .map((l) => l + ":00")
            .value();

        let tableData = {
            header: [date],
            columns: timeRange,
            rows: [1]
        };

        return (
            <div className="calendar">
                <h2 className="ui header no-anchor">Calendar</h2>
                <header className="controls">
                    <Navigation navigate={this.navigate} resetDate={this.setToday} />
                    <ViewControls viewId={this.state.selectedView.id} setView={this.updateViewType} />
                </header>
                <main>
                    <Table data={tableData} />
                    {this.state.activeEvents}
                </main>
            </div>
        );
    }
}
