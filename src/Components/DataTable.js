import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'
import ReactTable from 'react-table-6'
import 'react-table-6/react-table.css'
export default class DataTable extends Component {

    render() {

        return (
            <Table striped bordered hover size="sm" responsive="sm">
                <thead>
                    <tr >
                        <th>#</th>
                        <th>Country</th>
                        <th>Cases</th>
                        <th>Today Cases</th>
                        <th>Active</th>
                        <th>Critical</th>
                        <th>Deaths</th>
                        <th>Today Deaths</th>
                        <th>Recovered</th>
                        <th>Today Recovered</th>
                        <th>Tests</th>

                    </tr>
                </thead>
                <tbody>
                    {this.props.data.map((element, index) => <tr>
                        <td key={index}>{index + 1}</td>
                        <td>{element.country}</td>
                        <td>{element.cases}</td>
                        <td>{element.todayCases}</td>
                        <td>{element.active}</td>
                        <td>{element.critical}</td>
                        <td>{element.deaths}</td>
                        <td>{element.todayDeaths}</td>
                        <td>{element.recovered}</td>
                        <td>{element.todayRecovered}</td>
                        <td>{element.tests}</td>

                    </tr>)}


                </tbody>
            </Table>
        )
    }
}
