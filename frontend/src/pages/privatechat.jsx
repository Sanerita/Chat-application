import React, { useEffect, useState } from "react";
import axios from 'axios';

const PrivateChat = () => {
    const [chats, setChats] = useState([]);

    const fetchChats = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/chat");
            if (response.data) {
                setChats(response.data);
            }
        } catch (error) {
            console.error("Error fetching chats:", error);
            // Handle error: You might want to set an error state here or perform some other action
        }
    };

    useEffect(() => {
        fetchChats();
    }, []);

    return (
        <div>
            {chats.length > 0 ? (
                chats.map((chat) => (
                    <div key={chat._id}>{chat.chatName}</div>
                ))
            ) : (
                <div>No chats available</div>
            )}
        </div>
    );
};

export default PrivateChat;
