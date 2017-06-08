import moment from "moment";
import { Table } from '../components/Table';

export class TableModel {
    constructor(params) {
        this.name = params.name;
        this.date = moment(params.startDate + ' ' + params.time);
        this.duration = moment(params.duration, 'hh:mm');
    }

    getHours() {
        return this.date.hours();
    }

    getTimeInterval() {
        return this.date.format('hh:mm') + '-' + (this.date.clone().add(this.duration).format('hh:mm'));
    }

    getComponent() {
        return <Event name={this.name} time={this.time} top={0} left={0} />
    }
}