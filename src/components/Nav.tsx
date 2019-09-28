import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import MainPage from "./MainPage";
import BellSchedule from "./BellSchedule";
import EventCalender from "./EventCalender";

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}


function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            <Box>{children}</Box>
        </Typography>
    );
}

export default function Nav() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };
    return (
        <div className="Nav">
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="Nav Bar">>
                    <Tab label="Home"/>
                    <Tab label="Bell Schedule"/>
                    <Tab label="Event Calender"/>
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <MainPage/>
            </TabPanel>
            <TabPanel index={1} value={value}>
                <BellSchedule/>
            </TabPanel>
            <TabPanel index={2} value={value}>
                <EventCalender/>
            </TabPanel>
        </div>
    )
}
