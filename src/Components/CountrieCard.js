import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'



import "../Pages/WorldCountries.css"
export default class CountrieCard extends Component {
    render() {

        return (
            <div >
                {this.props.countries.map(countrie =>


                    <Card className="CountriesContainer" style={{ width: '25em', marginTop: '8px', height: '100px' }}>
                        <Card.Img variant="top" src={countrie.countryInfo.flag} />
                        <Card.Body>
                            <Card.Title>{countrie.country}</Card.Title>
                            <Card.Text>
                                <p>Cases : {parseInt(countrie.cases).toLocaleString('en-US')} </p>
                                <p>Today Cases : {parseInt(countrie.todayCases).toLocaleString('en-US')}</p>
                                <p>Active  Cases : {parseInt(countrie.active).toLocaleString('en-US')}</p>
                                <p>Recovred : {parseInt(countrie.recovered).toLocaleString('en-US')}</p>
                                <p>Today Recovred : {parseInt(countrie.todayRecovered).toLocaleString('en-US')}</p>
                                <p>Deaths : {parseInt(countrie.deaths).toLocaleString('en-US')}</p>
                                <p>Today Deaths : {parseInt(countrie.todayDeaths).toLocaleString('en-US')}</p>
                                <p>Total Tests : {parseInt(countrie.tests).toLocaleString('en-US')}</p>

                            </Card.Text>
                        </Card.Body>

                        <Card.Body>

                        </Card.Body>
                    </Card>

                )}

            </div>
        )
    }
}
