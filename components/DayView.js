import React from "react";
import _ from "lodash";
import  Table from "./Table";
import  Event from './Event';

const timeRange = _.chain(_.range(24))
    .map(String)
    .map((l) => l + ":00")
    .value();

export default class DayView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: []
        }

        this.setTableData = this.setTableData.bind(this);
        this.renderEvents = this.renderEvents.bind(this);
    }

    componentDidMount() {
        this.renderEvents();
    }

    renderEvents(props) {
        props = props || this.props;
        console.log(props.events);
        if (this.props.events.length) {
            let hours = props.startDate.hours();
            let d = this.headerCellSize.y * (hours + 1);
            let l = this.headerCellSize.x;

            var event = <Event key="cdf" top={d} left={l} />
            this.setState({
                events: [event]
            });
        } else {
            this.setState({
                events: []
            });
        }

    }

    componentWillReceiveProps(nextProps) {
        this.renderEvents(nextProps);
    }
 
    render() {
        let date = this.props.startDate.format('dddd, MMM Do, YYYY');
        let tableData = {
            header: [date],
            columns: timeRange,
            rows: [1]
        };

        let table = <Table data={tableData}/>;
        console.log(table.size);

        return <div>
            {table}
            {this.state.events}
        </div>;
    }
}