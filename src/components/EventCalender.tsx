import React from "react";
import {Box} from "@material-ui/core";

export default function EventCalender() {
    return (
        <div className="EventCalender">
            <h1>Event Calender</h1>
            <Box>
                <iframe title="calender" src="https://calendar.google.com/calendar/embed?src=u5mgb2vlddfj70d7frf3r015h0%40group.calendar.google.com&ctz=America%2FLos_Angeles" width="800" height="600" frameBorder="0" scrolling="no"/>
            </Box>
        </div>
    );
}
