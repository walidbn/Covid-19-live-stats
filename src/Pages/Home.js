import React, { Component } from 'react'
import axios from 'axios';

export default class Home extends React.Component {
    state = { general: [] };



    componentDidMount() {
        axios.get('https://disease.sh/v3/covid-19/all').then(response => {
            this.setState({ general: [{ ...response.data }] });
            console.log(this.state.general)
        })



    }

    render() {

        return (

            <div>
                {general = this.state.general.map()}
            </div>
        )
    }
}
