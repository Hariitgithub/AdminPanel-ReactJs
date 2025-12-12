import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { data } from '../../screens/redux/api/dummyJson';

const OngoingSaleChart = () => {

  return (
    <div className=' border-outline'>
      <div className='d-flex ac-jb'>
        <h4 className='f3 fs-sm-12 fs-md-14 fs-lg-16 fs-xl-18 fs-xxl-20 '>On going Sale</h4>
        <p className='f1  fs-sm-12 fs-md-14 fs-lg-16 fs-xl-18 fs-xxl-20 gray1'>10:30 AM</p>
      </div>
      <div className='d-flex ae-jc'>
        <div className='col-md-5'>
          <h4 className='f3 fs-sm-10 fs-md-16 fs-lg-20 fs-xl-22 fs-xxl-24 my-3 primary dark-white'>11.141</h4>
          <p className='f1  fs-sm-12 fs-md-14 fs-lg-16 fs-xl-18 fs-xxl-20 gray1 text-nowrap mt-4'>16-05-2024</p>
        </div>
        <div style={{ width: '100%', height: 100, marginTop: '10px' }}>
          <ResponsiveContainer>
            <BarChart data={data}>
              {/* <XAxis dataKey="name" /> */}
              {/* <YAxis /> */}
              <Tooltip />
              <Bar dataKey="value" fill="#FFD400" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

export default OngoingSaleChart