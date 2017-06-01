import React from "react";
import _ from "lodash";

export class Table extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <table className="ui celled table">
                <thead className="">
                    <tr className="">
                        <th className=""></th>
                        {this.props.data.header.map((name, index) => {
                            return <th className="" key={index}>{name}</th>
                        })}
                    </tr>
                </thead>
                <tbody className="">
                    {this.props.data.columns.map((columnName, columnIndex) => {
                        return <tr className="" key={columnIndex}>
                            <td className="" >{columnName}</td>
                            {this.props.data.rows.map((rowName, rowIndex) => {
                                return <td className="" key={columnIndex + rowIndex}>{rowName}</td>
                            })}
                        </tr>
                    })}
                </tbody>
            </table>
        );
    }
}