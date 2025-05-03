
"use client"

import { CartesianGrid, Line, LineChart, XAxis } from "recharts"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#FCB98B",
  },
}

const Chart = ({ donationData }) => {
  return (
    <div className="h-[300px]">
      <Card className="h-full">
        <CardHeader>
          <CardTitle>Campaign Donation Chart</CardTitle>
        </CardHeader>
        <CardContent className="h-[220px] px-2"> {/* Adjusted height to fit inside 300px */}
          <ChartContainer config={chartConfig} className="h-full">
            <LineChart
              width={600}
              height={200} // final chart height inside CardContent
              data={donationData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="name"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Line
                dataKey="totalDonation"
                type="linear"
                stroke="var(--color-desktop)"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}

export default Chart

