import React from 'react'
import Container from './Container'
import {Button, Avatar} from 'antd'


const Footer =(props) =>(
    <div>
        <Container>
            { props.numberOfPerson ? 
            <Avatar 
            style={{backgroundColor:'#F5BCA9', marginRight:'5px'}} 
            size ='large'>
                {props.numberOfPerson}</Avatar> : null
            }
            <Button onClick={() =>props.handleAddPersonClickEvent() } type='primary'>Add new student</Button>
        </Container>
    </div>
)

export default Footer;