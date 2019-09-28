import React from "react";
import {Box} from "@material-ui/core";

export default function BellSchedule() {
    return (
        <div className="BellSchedule">
            <h1>Bell Schedule</h1>
            <Box>
                <img src={"https://gunn.pausd.org/sites/default/files/19-20-bell-schedule-8-13.gif"}  alt="schedule"/>
            </Box>
        </div>
    )
}
