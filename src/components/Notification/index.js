import {GrFormClose} from 'react-icons/gr'

import './index.css'

const Notification = props => {
  const {children} = props
  return (
    <div className="alert-main-container">
      {children}
      <GrFormClose className="cross-icon" />
    </div>
  )
}

export default Notification
