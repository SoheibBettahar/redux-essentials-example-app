import React from 'react'

export const Spinner = ({ text = '', size = '5em' }) => {
  return (
    <div className="spinner">
      {header}
      <div className="loader" style={{ height: size, width: size }} />
    </div>
  )
}
