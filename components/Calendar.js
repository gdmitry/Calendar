import React from "react";
import moment from "moment";
import config from "../data/config";
import { EventModel } from "../js/EventModel";

import { Button } from 'semantic-ui-react';
import styles from '../css/calendar.css';

import { DayView } from "./views/DayView";
import { Table } from "./Table";
// import { WeekView } from "./views/WeekView";
// import { MonthView } from "./views/MonthView";
// import { YearView } from "./views/YearView";
import { Navigation } from "./Navigation";
import { ViewControls } from "./ViewControls";

export class Calendar extends React.Component {
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
        this.setTableData = this.setTableData.bind(this);
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
                return new EventModel(event);
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

    setTableData(data) {
        // setState will be called after componentDidMount() 
        // so it is not an option to store table data
        // set is as property
        this.tableCellSize = data.cell;
        this.headerCellSize = data.header;
    }

    updateViewType(view) {
        this.setState(function (prevState) {
            return {
                selectedView: view,
                activeEvents: this.processEvents(view, prevState.date)
            };
        });
    }

    getViewById(id) {
        switch (id) {
            case 'day':
                return <DayView startDate={this.state.date} events={this.state.activeEvents} />;
            // case 'week':
            //     return <WeekView startDate={this.state.date} events={this.state.activeEvents} />;
            // case 'month':
            //     return <MonthView startDate={this.state.date} events={this.state.activeEvents} />;
            // case 'year':
            //     return <YearView startDate={this.state.date} events={this.state.activeEvents} />;
            default: return '';
        }
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

        // End table data

        return (
            <div className="calendar">
                <h2 className="ui header no-anchor">Calendar</h2>
                <header className="controls">
                    <Navigation navigate={this.navigate} resetDate={this.setToday} />
                    <ViewControls viewId={this.state.selectedView.id} setView={this.updateViewType} />
                </header>
                <main>
                    <Table data={tableData} onReady={this.setTableData} />
                    {this.state.activeEvents}
                </main>
            </div>
        );
    }
}
