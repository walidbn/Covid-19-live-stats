import React, { Component } from 'react'
import axios from 'axios';
import CardDeck from 'react-bootstrap/CardDeck'
import CountrieCard from '../Components/CountrieCard';
import { Card, Col } from 'react-bootstrap';
import DataTable from '../Components/DataTable';
import Button from 'react-bootstrap/Button'
import "./WorldCountries.css"
import CardColumns from 'react-bootstrap/CardColumns'
export default class WorldCountries extends Component {
    state = {
        worldCountries: [],
        showed: true

    };

    handelChange = () => {
        this.setState({ showed: !this.state.showed })
        console.log(this.state.showed)

    }

    componentDidMount() {
        axios.get('https://disease.sh/v3/covid-19/countries').then(response => {
            this.setState({ worldCountries: response.data });

        })



    }
    render() {

        return (
            <div >
                <Button variant="light" onClick={this.handelChange} size="lg" style={{ marginRight: '25px' }}> Show {!this.state.showed ? 'Table' : 'List'}</Button>

                {this.state.showed ? <DataTable data={this.state.worldCountries} /> :

                    <CardColumns style={{ marginBottom: '8px' }}>
                        <CountrieCard countries={this.state.worldCountries} />
                    </CardColumns>
                }




            </div>
        )
    }
}
