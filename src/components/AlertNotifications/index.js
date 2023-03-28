import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'
import './index.css'

const AlertNotifications = () => {
  const successViewContainer = () => (
    <Notification>
      <div className="alert-container">
        <AiFillCheckCircle className="icon success-icon" />
        <div className="text-container">
          <h1 className="success-text success-icon">Success</h1>
          <p className="description">
            You can access all the files in the folder
          </p>
        </div>
      </div>
    </Notification>
  )

  const errorViewContainer = () => (
    <Notification>
      <div className="alert-container">
        <RiErrorWarningFill className="icon error-icon" />
        <div className="text-container">
          <h1 className="success-text error-icon">Error</h1>
          <p className="description">
            Sorry, you are not authorized to have access to delete the file
          </p>
        </div>
      </div>
    </Notification>
  )

  const warningViewContainer = () => (
    <Notification>
      <div className="alert-container">
        <MdWarning className="icon warning-icon" />
        <div className="text-container">
          <h1 className="success-text warning-icon">Warning</h1>
          <p className="description">
            Viewers of this file can see comments and suggestions
          </p>
        </div>
      </div>
    </Notification>
  )

  const infoViewContainer = () => (
    <Notification>
      <div className="alert-container">
        <MdInfo className="icon info-text" />
        <div className="text-container">
          <h1 className="success-text info-text">Info</h1>
          <p className="description">
            Anyone on the internet can view these files
          </p>
        </div>
      </div>
    </Notification>
  )

  return (
    <div className="main-container">
      <h1 className="main-heading">Alert Notifications</h1>
      {successViewContainer()}
      {errorViewContainer()}
      {warningViewContainer()}
      {infoViewContainer()}
    </div>
  )
}

export default AlertNotifications
