import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const SalesFunnelChart = () => {
    const data = [
        { name: 'Visitors', value: 131300 },
        { name: 'Views', value: 190300 },
        { name: 'Leads', value: 141800 },
        { name: 'Market', value: 190300 },
    ];
    return (
        <div className='w-100 border-outline'>
            <div className='d-flex ac-jb col-md-12'>
                <h4 className='f3 fs-sm-12 fs-md-14 fs-lg-16 fs-xl-18 fs-xxl-20 '>Sales Funnel</h4>
                <select className='dash-drop pointer'>
                    <option>This Month</option>
                    <option>This Week</option>
                    <option>This Year</option>
                </select>
            </div>
            <div className='w-100 mt-3' style={{ height: 200 }}>
                <ResponsiveContainer>
                    <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="95%" stopColor="#00c3b3" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#00c3b3" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        {/* <XAxis dataKey="name" /> */}
                        {/* <YAxis /> */}
                        {/* <CartesianGrid strokeDasharray="3 3" /> */}
                        <Tooltip />
                        <Area
                            /* type="monotone" */
                            dataKey="value" stroke="#80B4FF" fill="url(#colorValue)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default SalesFunnelChart