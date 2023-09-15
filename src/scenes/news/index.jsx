import { Box } from "@mui/material";

import Header from "../../components/Header";
import News from "../../components/NewsApp/NewsApp";


const NewsApp = () => {
    return (
        <Box m="20px">
            <Header title="News" subtitle="News Headlines" />
            <News />
        </Box>
    );
};

export default NewsApp;