import React, { Component } from 'react'
import axios from 'axios';
import Card from 'react-bootstrap/Card'
import CountrieCard from '../Components/CountrieCard';
import "./WorldCountries.css"
export default class WorldCountries extends Component {
    state = {
        worldCountries: [],


    };



    componentDidMount() {
        axios.get('https://disease.sh/v3/covid-19/countries').then(response => {
            this.setState({ worldCountries: response.data });

        })



    }
    render() {

        return (
            <div >
                <CountrieCard countries={this.state.worldCountries} />
            </div>
        )
    }
}
