import React from 'react';
import {
    Form,
} from 'react-bootstrap';
import './SearchChats.css';

const SearchChats = () => {
  return(
    <div className="search-chats">
        <Form>
            <Form.Group>
                <Form.Control 
                    type="text" 
                    placeholder={`Search or start a new chat`} 
                    className="search-chats__input"
                />
            </Form.Group>
        </Form>
    </div>
  );
};

export default SearchChats;
