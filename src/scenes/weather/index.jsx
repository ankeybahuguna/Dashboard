import { Box } from "@mui/material";

import Header from "../../components/Header";
import WeatherApp from "../../components/WeatherApp/WeatherApp";


const Weather = () => {
    return (
        <Box m="20px">
            <Header title="Weather" subtitle="Weather Forecast" />
            <WeatherApp />
        </Box>
    );
};

export default Weather;