import React, { Component } from 'react'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
export default class DataTable extends Component {

    render() {

        return (
            <Table style={{ fontSize: '20px', fontWeight: 'bold' }}>
                <Thead>
                    <Tr >
                        <Th>#</Th>
                        <Th>Country</Th>
                        <Th>Cases</Th>
                        <Th>Today Cases</Th>
                        <Th>Active</Th>
                        <Th>Critical</Th>
                        <Th>Deaths</Th>
                        <Th>Today Deaths</Th>
                        <Th>Recovered</Th>
                        <Th>Today Recovered</Th>
                        <Th>Tests</Th>

                    </Tr>
                </Thead>
                {console.log(this.props.searchedCountry)}
                <Tbody>
                    {this.props.data.filter(element =>
                        element.country === this.props.searchedCountry
                    ).map((element, index) =>

                        < Tr >
                            <Td  >{index + 1}</Td>
                            <Td>{element.country}</Td>
                            <Td>{element.cases}</Td>
                            <Td>{element.todayCases}</Td>
                            <Td>{element.active}</Td>
                            <Td>{element.critical}</Td>
                            <Td>{element.deaths}</Td>
                            <Td>{element.todayDeaths}</Td>
                            <Td>{element.recovered}</Td>
                            <Td>{element.todayRecovered}</Td>
                            <Td>{element.tests}</Td>

                        </Tr>)}


                </Tbody>
            </Table>
        )
    }
}
