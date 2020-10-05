import React from 'react'
import axios from 'axios';
import WorldCountries from './WorldCountries';
import DataCard from '../Components/DataCard';
import './Home.css';

import { AiOutlineFieldTime } from "react-icons/ai";


import { FcGlobe, FcCalendar, FcDislike, FcLike, FcDataRecovery, FcExpired, FcOvertime } from "react-icons/fc";
export default class Home extends React.Component {
    state = {
        general: [],


    };



    componentDidMount() {
        axios.get('https://disease.sh/v3/covid-19/all').then(response => {
            this.setState({ general: response.data });
            console.log(this.state.general)
        })



    }

    render() {
        const global = [this.state.general];
        const date = new Date(parseInt(this.state.general.updated));
        const lastUpdated = date.toLocaleString('en-US');
        return (

            <div>
                {global.map((element, index) =>
                    <>
                        <div className="GlobalContainer">

                            <DataCard key={index} title={'Golbal Cases'} icone={<FcGlobe />} number={element.cases} updated={element.updated} className="DataCardStyle " />
                            <DataCard title={'Today Cases'} icone={<FcCalendar />} number={element.todayCases} updated={element.updated} className="DataCardStyle" />
                            <DataCard title={'Deaths'} icone={<FcDislike />} number={element.deaths} updated={element.updated} className="DataCardStyle bg-danger" />
                            <DataCard title={'Today Deaths'} icone={<FcDislike />} number={element.todayDeaths} updated={element.updated} className="DataCardStyle" />

                        </div>


                        <div className="GlobalContainer">

                            <DataCard title={'Total Recovered'} icone={<FcLike />} number={element.recovered} updated={element.updated} className="DataCardStyle" bg={"Danger"} />
                            <DataCard title={'Today Recovered'} icone={<FcLike />} number={element.todayRecovered} updated={element.updated} className="DataCardStyle" />
                            <DataCard title={'Active Cases'} icone={<FcExpired />} number={element.active} updated={element.updated} className="DataCardStyle" />
                            <DataCard title={'Critical Cases'} icone={<FcDataRecovery />} number={element.critical} updated={element.updated} className="DataCardStyle" />

                        </div>
                        <WorldCountries />
                        <h5>     <FcOvertime />        Last update since :  {lastUpdated}</h5>

                    </>
                )}
            </div>
        )
    }
}
