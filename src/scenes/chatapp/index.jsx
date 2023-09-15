import { Box } from "@mui/material";

import Header from "../../components/Header";
import ChatApp from "../../components/ChatApp/ChatApp";


const Chatapp = () => {
    return (
        <Box m="20px">
            <Header title="Chat" subtitle="Real-Time Chat With Friends" />
            <ChatApp />
        </Box>
    );
};

export default Chatapp;