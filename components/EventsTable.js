import React from "react";
import _ from "lodash";

const timeRange = _.chain(_.range(24))
    .map(String)
    .map((l) => l + ":00")
    .value();

const dateRange = [1, 1, 25, 5, 45, 4545, 45];

export class EventsTable extends React.Component {
    render() {

        return (
            <table className="ui celled table">
                <thead className="">
                    <tr className="">
                        <th className=""></th>
                        {dateRange.map((date, j) => {
                            return <th className="" key={j}>Header</th>
                        })}
                    </tr>
                </thead>
                <tbody className="">
                    {timeRange.map((time, i) => {
                        return <tr className="" key={i}>
                            <td className="">{time}</td>
                            {dateRange.map((date, j) => {
                                return <td className="" key={i + j}>Cell</td>
                            })}
                        </tr>
                    })}
                </tbody>
            </table>
        );
    }
}