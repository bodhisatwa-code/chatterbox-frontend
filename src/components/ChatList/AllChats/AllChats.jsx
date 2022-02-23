import React,{useState} from 'react';
import {Image,Badge} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons';
import './AllChats.css';

const SingleChat = ({_c}) => {

    return(
        <div className="all-chats__single-chat">
            <Image 
                src={_c.img}
                className='all-chats__single-chat__user-avatar'
            />
            <div >
                <div className='all-chats__single-chat__chat-info'>
                    <h5>{_c.name} <Badge bg="info">{_c.time}</Badge></h5>
                    
                </div>
                <p><FontAwesomeIcon icon={faCheckDouble} /> {_c.lastRecievedMsg}</p>
            </div>
        </div>
    )
}

const AllChats = () => {
    const [data] = useState([
        {
            name : "Jake parelta",
            img : "https://vignette.wikia.nocookie.net/brooklynnine-nine/images/7/7f/JakeS5.jpg/revision/latest?cb=20171103222710",
            lastRecievedMsg : "Valar Morghulis",
            sentMsgStatus : "delivered",
            lastSentMessage : "",
            time : "10:08 pm"
        },
        {
            name : "Jake parelta",
            img : "https://vignette.wikia.nocookie.net/brooklynnine-nine/images/7/7f/JakeS5.jpg/revision/latest?cb=20171103222710",
            lastRecievedMsg : "Valar Morghulis",
            sentMsgStatus : "delivered",
            lastSentMessage : "",
            time : "10:08 pm"
        },
        {
            name : "Jake parelta",
            img : "https://vignette.wikia.nocookie.net/brooklynnine-nine/images/7/7f/JakeS5.jpg/revision/latest?cb=20171103222710",
            lastRecievedMsg : "Valar Morghulis",
            sentMsgStatus : "delivered",
            lastSentMessage : "",
            time : "10:08 pm"
        },
        {
            name : "Jake parelta",
            img : "https://vignette.wikia.nocookie.net/brooklynnine-nine/images/7/7f/JakeS5.jpg/revision/latest?cb=20171103222710",
            lastRecievedMsg : "Valar Morghulis",
            sentMsgStatus : "delivered",
            lastSentMessage : "",
            time : "10:08 pm"
        },
        {
            name : "Jake parelta",
            img : "https://vignette.wikia.nocookie.net/brooklynnine-nine/images/7/7f/JakeS5.jpg/revision/latest?cb=20171103222710",
            lastRecievedMsg : "Valar Morghulis",
            sentMsgStatus : "delivered",
            lastSentMessage : "",
            time : "10:08 pm"
        },
        {
            name : "Jake parelta",
            img : "https://vignette.wikia.nocookie.net/brooklynnine-nine/images/7/7f/JakeS5.jpg/revision/latest?cb=20171103222710",
            lastRecievedMsg : "Valar Morghulis",
            sentMsgStatus : "delivered",
            lastSentMessage : "",
            time : "10:08 pm"
        },
        {
            name : "Jake parelta",
            img : "https://vignette.wikia.nocookie.net/brooklynnine-nine/images/7/7f/JakeS5.jpg/revision/latest?cb=20171103222710",
            lastRecievedMsg : "Valar Morghulis",
            sentMsgStatus : "delivered",
            lastSentMessage : "",
            time : "10:08 pm"
        },
        {
            name : "Jake parelta",
            img : "https://vignette.wikia.nocookie.net/brooklynnine-nine/images/7/7f/JakeS5.jpg/revision/latest?cb=20171103222710",
            lastRecievedMsg : "Valar Morghulis",
            sentMsgStatus : "delivered",
            lastSentMessage : "",
            time : "10:08 pm"
        },
        {
            name : "Jake parelta",
            img : "https://vignette.wikia.nocookie.net/brooklynnine-nine/images/7/7f/JakeS5.jpg/revision/latest?cb=20171103222710",
            lastRecievedMsg : "Valar Morghulis",
            sentMsgStatus : "delivered",
            lastSentMessage : "",
            time : "10:08 pm"
        },
    ])

    return(
        <div className='all-chats'>
            <br />
            {
                data.map((_c,i)=><SingleChat _c={_c} key={i} />)
            }
        </div>
    );
};

export default AllChats;
