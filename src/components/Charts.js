import React from 'react';
import { Bar } from 'react-chartjs-2';


const Charts = ({ country, countryData }) => {

    const barChart = (
        <Bar
            data={{
                labels: ['Infected', 'Recovered', 'Deaths'],
                datasets: [
                    {
                        label: 'People',
                        backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                        data: countryData ?
                            [countryData.confirmed.value, countryData.recovered.value, countryData.deaths.value] : [0, 0, 0],
                    },
                ],
            }}
            options={{
                legend: { display: false },
                title: { display: true, text: `Current state in ${country}` },
            }}
        />
    );

    return (
        <div >
            {barChart}
        </div>
    );
};

export default Charts;