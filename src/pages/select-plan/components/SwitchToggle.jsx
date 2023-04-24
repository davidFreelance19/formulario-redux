import React from 'react'

const SwitchToggle = ({setPago, pago}) => {
    return (
        <>
            <div className="container" >
                <input type="checkbox" onClick={() => setPago(!pago) } className="checkbox" id="checkbox" />
                <label className="switch" htmlFor="checkbox">
                    <span className="slider"></span>
                </label>
            </div>
        </>
    )
}

export default SwitchToggle
