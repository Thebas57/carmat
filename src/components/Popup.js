import React from 'react'

const Popup = ({image}) => {
  return (
    <div className='popup-window'>
        <div className="popup">
            <div className="header">
                <h1>{image.description}</h1>
            </div>
            <div className="content">
                <p>Lorem</p>
            </div>
        </div>
    </div>
  )
}

export default Popup