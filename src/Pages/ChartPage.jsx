import React from 'react'
import React from 'react'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
const ChartPage = () => {
  return (
    <div>
        <div className="w-full h-80">
      <h2 className="font-bold text-lg mb-2">Ratings</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#ff8c00" />
        </BarChart>
      </ResponsiveContainer>
    </div>
    </div>
  )
}

export default ChartPage






