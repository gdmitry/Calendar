import React from "react";
import _ from "lodash";

export class EventsTable extends React.Component {
    render() {

        return (
            <table className="ui celled table">
                <thead className="">
                    <tr className="">
                        <th className="">Header</th>
                        <th className="">Header</th>
                        <th className="">Header</th>
                    </tr>
                </thead>
                <tbody className="">
                    <tr className="">
                        <td className="">Cell</td>
                        <td className="">Cell</td>
                        <td className="">Cell</td>
                    </tr>
                    <tr className="">
                        <td className="">Cell</td>
                        <td className="">Cell</td>
                        <td className="">Cell</td>
                    </tr>
                    <tr className="">
                        <td className="">Cell</td>
                        <td className="">Cell</td>
                        <td className="">Cell</td>
                    </tr>
                </tbody>                
            </table>
        );
    }
}