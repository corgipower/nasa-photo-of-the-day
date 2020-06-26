import React from 'react';
import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';

export default function PhotoList({date, exp, title, url}) {
    return (
        <div>
        <Button id='PopoverFocus' type='button'>
            Click for photo description
        </Button>
        <UncontrolledPopover trigger='focus' placement='bottom' target='PopoverFocus'>
            <PopoverHeader>{date}</PopoverHeader>
            <PopoverBody>{exp}</PopoverBody>
        </UncontrolledPopover>
            <h1>{title}</h1>
            <img src={url} alt={title}/>
        </div>
    )
}