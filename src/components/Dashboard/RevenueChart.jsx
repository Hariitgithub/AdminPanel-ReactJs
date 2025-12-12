import React from 'react'
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { ProgressBar } from 'react-bootstrap';
ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const RevenueChart = () => {
    const data = {
        labels: ['Lorm Ipsum', 'Lorm Ipsum', 'Lorm Ipsum', 'Lorm Ipsum'],
        datasets: [
            {
                label: 'Revenue',
                data: [544124, 244124, 134124, 44124],
                backgroundColor: ['#F2C9CF', '#C6D9F2', '#C0F2F2', '#A6F2C9'],
                barThickness: 20, // Adjust bar thickness as needed
                borderRadius: 20, // Adjust bar border radius as needed
            },
        ],
    };

    const options = {
        indexAxis: 'y', // Make bars horizontal
        responsive: true,
        plugins: {
            legend: {
                display: false, // Hide legend
            },
            title: {
                display: true,
                text: 'Revenue Sources',
            },
        },
        scales: {
            x: {
                grid: {
                    display: false, // Hide x-axis grid lines
                },
                ticks: {
                    display: false, // Hide x-axis labels
                },
            },
            y: {
                beginAtZero: true,
            },
        },
    };
    return (
        <div className='w-100 border-outline'>
            <div className='d-flex ac-jb'>
                <h4 className='f3 fs-sm-12 fs-md-14 fs-lg-16 fs-xl-18 fs-xxl-20 '>Total Revenue</h4>
                <select className='dash-drop pointer'>
                    <option>This Month</option>
                    <option>This Week</option>
                    <option>This Year</option>
                </select>
            </div>
            <h4 className='f3 fs-sm-10 fs-md-16 fs-lg-20 fs-xl-22 fs-xxl-24 mt-3 primary d-flex ac-js dark-white'>$ 2.786.556<span className='fs-sm-10 fs-md-10 fs-lg-12 fs-xl-12 fs-xxl-14  ms-2 dash-per'>2.44%</span></h4>
            <p className='f2 fs-sm-10 fs-md-12 fs-lg-14 fs-xl-16 fs-xxl-18 mt-3 '>Gained $345.45 this month!</p>
            <div className='mt-4 bg-primar p-2 border-15 rev-source'>
                <h4 className='f2 fs-sm-12 fs-md-14 fs-lg-16 fs-xl-18 fs-xxl-20 gray3 mb-2'>Revenue Sources</h4>
                <div className='d-flex gap-2'>
                    <div className='w-100'>
                        <div className='d-flex ac-js'>
                            <p className='rev-points mb-0'></p>
                            <p className='f2 fs-sm-10 fs-md-10 fs-lg-10 fs-xl-12 fs-xxl-12 ps-1 gray3 text-nowrap mb-0'>Lorem Ipsum</p>
                        </div>
                        <h4 className='f2 fs-sm-10 fs-md-12 fs-lg-13 fs-xl-14 fs-xxl-16 gray3 mt-2'>$544.124</h4>
                        <div className='rev-bar mt-2'>
                            <ProgressBar now={80} />
                        </div>
                    </div>
                    <div className='w-100'>
                        <div className='d-flex ac-js'>
                            <p className='rev-points1 mb-0'></p>
                            <p className='f2 fs-sm-10 fs-md-10 fs-lg-10 fs-xl-12 fs-xxl-12 ps-1 gray3 text-nowrap mb-0'>Lorem Ipsum</p>
                        </div>
                        <h4 className='f2 fs-sm-10 fs-md-12 fs-lg-13 fs-xl-14 fs-xxl-16 gray3 mt-2'>$544.124</h4>
                        <div className='rev-bar1 mt-2'>
                            <ProgressBar now={60} />
                        </div>
                    </div>
                    <div className='w-100'>
                        <div className='d-flex ac-js'>
                            <p className='rev-points2 mb-0'></p>
                            <p className='f2 fs-sm-10 fs-md-10 fs-lg-10 fs-xl-12 fs-xxl-12 ps-1 gray3 text-nowrap mb-0'>Lorem Ipsum</p>
                        </div>
                        <h4 className='f2 fs-sm-10 fs-md-12 fs-lg-13 fs-xl-14 fs-xxl-16 gray3 mt-2'>$544.124</h4>
                        <div className='rev-bar2 mt-2'>
                            <ProgressBar now={40} />
                        </div>
                    </div>
                    <div className='w-100'>
                        <div className='d-flex ac-js'>
                            <p className='rev-points3 mb-0'></p>
                            <p className='f2 fs-sm-10 fs-md-10 fs-lg-10 fs-xl-12 fs-xxl-12 ps-1 gray3 text-nowrap mb-0'>Lorem Ipsum</p>
                        </div>
                        <h4 className='f2 fs-sm-10 fs-md-12 fs-lg-13 fs-xl-14 fs-xxl-16 gray3 mt-2'>$544.124</h4>
                        <div className='rev-bar3 mt-2'>
                            <ProgressBar now={20} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RevenueChart