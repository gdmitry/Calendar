import _ from "lodash";

export const CONSTANTS = {
    timeRange: _.chain(_.range(24))
        .map(String)
        .map((l) => l + ":00")
        .value(),
    VIEWS: [
        {
            id: 'today',
            name: 'Today'
        },
        {
            id: '4days',
            name: '4Days'
        },
        {
            id: 'week',
            name: 'Week'
        },
        {
            id: 'month',
            name: 'Month'
        }
    ]
}