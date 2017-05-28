import React from "react";
import { Button } from 'semantic-ui-react';
// import { EventsTable } from "./EventsTable";
// import { Controls } from "./Controls";

export class Calendar extends React.Component {
    constructor(props) {
        super(props);

    }
    click(e) {
        console.log(e);
    }
    render() {
        return (
            <div>
                <Button onClick="click()">
                    Click Here
                </Button>
            </div>
        );
    }
}
