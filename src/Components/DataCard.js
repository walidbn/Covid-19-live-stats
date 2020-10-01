import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import { AiOutlineFieldTime } from "react-icons/ai";
export default class DataCard extends Component {
    state = {

    }
    render() {


        return (
            <Card style={{ margin: '20px', width: '23%' }}>
                <Card.Header><h3>{this.props.title}</h3></Card.Header>
                <Card.Body>
                    { /* We use parseInt(this.props.number).toLocaleString('en-US') to fromat number with 3 digit commas format*/}
                    <Card.Title><h4>{parseInt(this.props.number).toLocaleString('en-US')
                    }</h4></Card.Title>
                    <Card.Text>

                    </Card.Text>

                </Card.Body>
            </Card>
        )
    }
}
