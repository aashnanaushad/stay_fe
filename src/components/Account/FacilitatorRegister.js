import React from 'react';
import Register from './Register';

function FacilitatorRegister() {
    return (
        <Register 
            type={"facilityowner" }
            label={"REGISTER AS HOTEL OWNER"}
            othertype={"Customer"}
            otherlinkid={"0"}
        />
    )
}

export default FacilitatorRegister;
