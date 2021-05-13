import React, {useState, useEffect} from 'react';
import {fetchtDataDaily} from '../../API';
import {Line, Bar} from 'react-chartjs-2';
import styles from './Chart.module.css';


const Chart=({dataChart, countryChart})=>{

    const [dailyData, setDailyData]=useState([]);
    useEffect(()=>{
        const fetchAPIdaily=async()=>{
            setDailyData(await fetchtDataDaily());
        };
        fetchAPIdaily();
    }, []);
    const lineChart=(
        (dailyData.length)?
        (<Line 
            data={{
            labels:dailyData.map(({reportDate})=>reportDate),
            datasets:[{
                data:dailyData.map(({confirmed})=>confirmed),
                label: 'Infected',
                borderColor: 'lawngreen',
                fill: true,
            },{
                data:dailyData.map(({deaths})=>deaths),
                label: 'Deaths',
                borderColor: 'red',
                backgroundColor: 'rgba(255, 0, 0, 0.5)',
                fill: true,
            }],
        }}/>)
            :null
    );

    const barChart=(
        dataChart.confirmed?
        (
            <Bar 
            data={{labels:['Infected','Recovered','Deaths'],
            datasets:[{
                label: 'People',
                backgroundColor:['turquoise','greenyellow','orangered'],
                data:[dataChart.confirmed.value, dataChart.recovered.value, dataChart.deaths.value]
            }]}}
            options={{
                legend:{display:false},
                title: {display:true, text: `Current State of the Country(countryChart)`}
            }}/>
            
        ):null
    )

    return(
        <div className={styles.container}>
        {countryChart?barChart:lineChart}
        </div>
    )
}
export default Chart;