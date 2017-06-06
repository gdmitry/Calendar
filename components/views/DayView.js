import React from "react";
import _ from "lodash";
import { Table } from "../Table";
import { Event } from './Event';

const timeRange = _.chain(_.range(24))
    .map(String)
    .map((l) => l + ":00")
    .value();

export class DayView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
            tableData: {}
        }
        this.renderEvents = this.renderEvents.bind(this);
        this.setTableData = this.renderEvents.bind(this);
    }

    setTableData(tableData) {
        console.log(tableData);
        this.setState({
            tableData: tableData
        });
        this.renderEvents();
    }

    renderEvents() {
        if (this.props.events.length > 0) {
            this.setState({
                events: [<Event key="3" />]
            });
        } else {
            this.setState({
                events: []
            });
        }
    }    

    render() {
        let date = this.props.startDate.format('dddd, MMM Do, YYYY');
        let tableData = {
            header: [date],
            columns: timeRange,
            rows: [1]
        };
        return <div>
            <Table data={tableData} onTableMountedCallback={this.setTableData} />
            {this.state.events}
        </div>;
    }
}