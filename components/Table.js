import React from 'react';
import _ from 'lodash';
import $ from 'jquery';
import ReactDOM from "react-dom";

export default class Table extends React.Component {
    constructor(props) {
        super(props);
    }   

    render() {       
        return (
            <table className='ui celled table'>
                <thead>
                    <tr>
                        <th className='header-cell'></th>
                        {_.map(this.props.data.header, (name, index) => {
                            return <th className='date-point' key={index}>{name}</th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    {_.map(this.props.data.columns, (columnName, columnIndex) => {
                        return <tr key={columnIndex}>
                            <td>{columnName}</td>
                            {_.map(this.props.data.rows, (rowName, rowIndex) => {
                                return <td key={columnIndex + rowIndex}></td>
                            })}
                        </tr>
                    })}
                </tbody>
            </table>
        );
    }
}