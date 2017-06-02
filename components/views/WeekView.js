import React from "react";
import _ from "lodash";
import { Table } from "../Table";

export class WeekView extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let tableData = {
            header: [this.props.date],
            columns: this.props.axisY,
            rows: this.props.axisX
        };
        return <Table data={tableData} />;
    }
}