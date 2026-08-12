import React from 'react'

const globalLoading = () => {
  return (
    <div className="global-loader-container">
      <div className="wave-loader">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <h1 className="loader-title">
        Sylphara AI
      </h1>
    </div>
  )
}

export default globalLoading