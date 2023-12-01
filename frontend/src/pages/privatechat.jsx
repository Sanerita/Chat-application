import React, { useEffect } from "react";
import axios from 'axios';

const privatechat = () => {

    const fetchChats = async () => {

        const data = await axios.get("http://localhost:5000/api/chat");
        console.log(data);
    }

    useEffect(() => {
        fetchChats();

    }, [])


    return (
        <div>
            <h1>Hello, privatechat!</h1>
        </div>
    );
};


export default privatechat;
