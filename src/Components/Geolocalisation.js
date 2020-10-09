import React, { Component } from 'react'
import { geolocated, geoPropTypes } from "react-geolocated";
export default class Geolocalisation extends Component {
    render() {
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>latitude</td>
                            <td>{geolocated.coords.latitude}</td>
                        </tr>
                        <tr>
                            <td>longitude</td>
                            <td>{geolocated.coords.longitude}</td>
                        </tr>
                        <tr>
                            <td>altitude</td>
                            <td>{this.props.coords.altitude}</td>
                        </tr>
                        <tr>
                            <td>heading</td>
                            <td>{this.props.coords.heading}</td>
                        </tr>
                        <tr>
                            <td>speed</td>
                            <td>{this.props.coords.speed}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
