import moment from "moment";
import  Event  from '../components/Event';

export default class CalendarEventModel {
    constructor(params) {
        this.name = params.name;
        this.date = moment(params.startDate + ' ' + params.startTime, 'YYYY-MM-dd hh:mm');
        this.duration = moment(params.duration, 'hh:mm');
    }

    getHours() {
        return this.date.hours();
    }

    getTimeInterval() {
        return this.date.format('hh:mm') + '-' + (this.date.clone().add(this.duration).format('hh:mm'));
    }

    setRenderParams(params) {
        this.top = params.top;
        this.left = params.left;
        this.height = params.index * this.duration;
    }

    getComponent() {
        return <Event name={this.name} time={this.time} top={this.top || 0} left={this.left || 0} />
    }
}