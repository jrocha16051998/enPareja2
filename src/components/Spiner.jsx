import React from 'react'

export const Spiner = () => {
    return (
        <div className="d-flex justify-content-center m-auto align-middle" >
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}
