import React, { Component } from 'react';

export const TaskCard = props => {
    return(
        <div>
            <p>{props.name}</p>
            <p>{props.text}</p>
        </div>
    )
};