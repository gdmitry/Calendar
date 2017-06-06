import React from "react";
import _ from "lodash";
import $ from 'jquery';
import { Event } from './views/Event';
import ReactDOM from "react-dom";

export class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Event: ''
        };
    }

    componentDidMount() {
        let cell = $('.date-point')[0];
        console.log("qwreqwr", cell.offsetHeight, cell.offsetWidth);
        this.setState({
            Event: <Event />
        });
    }

    render() {
        let styles = {
            textAlign: 'center',
            verticalAlign: 'middle'
        };
        return (
            <div>
                <table className="ui celled table">
                    <thead>
                        <tr>
                            <th style={{ width: '60px' }}></th>
                            {this.props.data.header.map((name, index) => {
                                return <th className="date-point" key={index} style={styles}>{name}</th>
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.data.columns.map((columnName, columnIndex) => {
                            return <tr key={columnIndex}>
                                <td style={styles}>{columnName}</td>
                                {this.props.data.rows.map((rowName, rowIndex) => {
                                    return <td key={columnIndex + rowIndex} style={styles}>{''}</td>
                                })}
                            </tr>
                        })}
                    </tbody>
                </table>
                {this.state.Event}
            </div>
        );
    }
}