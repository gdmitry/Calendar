import React from "react";
// import { EventsTable } from "./EventsTable";
// import { Controls } from "./Controls";

export class Calendar extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <Rating rating={1} maxRating={5} />
            </div>
        );
    }
}
