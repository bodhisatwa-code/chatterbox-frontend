import React from 'react';
import {
    Image,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDot,faMessage,faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import './UserPanel.css';

const UserPanel = () => {
  return(
    <div className='user-panel'>
        <Image 
            className='user-panel__avatar'
            src="https://img.nbc.com/sites/nbcunbc/files/images/2018/12/04/AndySamberg.jpg"
            roundedCircle
        />
        <div className='user-panel__actions'>
            <FontAwesomeIcon icon={faCircleDot} className='user-panel__action-icon'/>
            <FontAwesomeIcon icon={faMessage} className='user-panel__action-icon'/>
            <FontAwesomeIcon icon={faEllipsisVertical} className='user-panel__action-icon'/>
        </div>
    </div>
  );
};

export default UserPanel;
