"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"
import { useEffect, useState } from "react"

const monthOrder = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
]

const getMonthlyCounts = (data) => {
  const counts = {}

  data.forEach((item) => {
    const date = new Date(item.createDate)
    const month = date.toLocaleString("default", { month: "short" })
    counts[month] = (counts[month] || 0) + 1
  })

  return counts
}

const mergeMonthlyData = (donations, pets, users) => {
  const allMonths = Array.from(
    new Set([
      ...Object.keys(donations),
      ...Object.keys(pets),
      ...Object.keys(users),
    ])
  )

  allMonths.sort((a, b) => monthOrder.indexOf(a) - monthOrder.indexOf(b))

  return allMonths.map((month) => ({
    name: month,
    Donations: donations[month] || 0,
    Pets: pets[month] || 0,
    Users: users[month] || 0,
  }))
}

const StaticsChart = ({ donationData, pets, users }) => {
  const [chartData, setChartData] = useState([])

  useEffect(() => {
    const donationCounts = getMonthlyCounts(donationData)
    const petCounts = getMonthlyCounts(pets)
    const userCounts = getMonthlyCounts(users)

    const merged = mergeMonthlyData(donationCounts, petCounts, userCounts)
    setChartData(merged)
  }, [donationData, pets, users])

  return (
    <div className="h-[350px] p-4 bg-white rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-4">Monthly Summary Chart</h2>
      <LineChart
        width={700}
        height={250}
        data={chartData}
        margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
      >
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="Donations" stroke="#f59e0b" />
        <Line type="monotone" dataKey="Pets" stroke="#3b82f6" />
        <Line type="monotone" dataKey="Users" stroke="#10b981" />
      </LineChart>
    </div>
  )
}

export default StaticsChart
