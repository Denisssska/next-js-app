import React from 'react';
import {objType} from "../pages/contacts";
import Heading from "./Heading";

const ContactInfo: ({contact}: { contact: objType }) => JSX.Element = ({contact}) => {
    const {name, email, address} = contact || {}
    const {street, suite, city, zipcode} = address || {}
    if (!contact) {
        return <Heading text={"Empty contact"} tag={"h3"}/>
    }
    return (
        <>
            <Heading text={name} tag={"h3"}/>
            <div><strong>Email: </strong>{email}</div>
            <div><strong>Address: </strong>{`${street}, ${suite}, ${city}, ${zipcode}`}</div>
        </>
    );
};

export default ContactInfo;