import React from "react";
import moment from "moment";
import config from "../data/config";

import { Button } from 'semantic-ui-react';
import styles from '../css/calendar.css';

import { DayView } from "./views/DayView";
import { WeekView } from "./views/WeekView";
import { MonthView } from "./views/MonthView";
import { YearView } from "./views/YearView";
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
                activeEvents: this.filterEvents(prevState.selectedView, newDate)
            };
        });
    }

    setToday() {
        let newDate = moment();
        this.setState(function (prevState) {
            return {
                date: newDate,
                activeEvents: this.filterEvents(prevState.selectedView, newDate)
            };
        });
    }

    filterEvents(view, startDate) {
        let endDate = startDate.clone().add(view.amount, view.measure);
        let eventsToFilter = config.events;
        let filteredEvents = eventsToFilter.filter((event) => {
            let eventStartDate = moment(event.startDate);
            return eventStartDate > startDate && eventStartDate < endDate;
        });
        console.log(filteredEvents);
        return filteredEvents;
    }

    updateViewType(view) {
        this.setState(function (prevState) {
            return {
                selectedView: view,
                activeEvents: this.filterEvents(view, prevState.date)
            };
        });
    }

    render() {
        let currrentView;
        let date = this.state.date.format('dddd, MMM Do, YYYY');

        switch (this.state.selectedView.id) {
            case 'day':
                currrentView = <DayView date={date} axisX={[1]} axisY={timeRange} />;
                break;
            case 'week':
                currrentView = <WeekView date={date} axisX={[1]} axisY={timeRange} />;
                break;
            case 'month':
                currrentView = <MonthView date={date} axisX={[1]} axisY={timeRange} />;
                break;
            case 'year':
                currrentView = <YearView date={date} axisX={[1]} axisY={timeRange} />;
                break;
            default:
                currrentView = '';
        }

        return (
            <div className="calendar">
                <h2 className="ui header no-anchor">Calendar</h2>
                <header className="controls">
                    <Navigation navigate={this.navigate} resetDate={this.setToday} />
                    <ViewControls viewId={this.state.selectedView.id} setView={this.updateViewType} />
                </header>
                <main style={{ position: 'relative' }}>
                    {currrentView}                    
                </main>
            </div>
        );
    }
}
