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

                <Tbody>
                    {this.props.data.map((element, index) =>
                        <Tr>
                            <Td key={index} >{index + 1}</Td>
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
