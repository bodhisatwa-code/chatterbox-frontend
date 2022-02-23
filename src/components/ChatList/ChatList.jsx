import React from 'react';
import UserPanel from './UserPanel/UserPanel';
import SearchChats from './SearchChats/SearchChats';
import AllChats from './AllChats/AllChats';

const ChatList = () => {
  return (
    <div>
        <UserPanel />
        <SearchChats />
        <AllChats />
    </div>
  );
};

export default ChatList;
