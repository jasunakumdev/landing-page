import { useTheme } from '@mui/material'
import { LineChart } from '@mui/x-charts/LineChart'

const Linechart = () => {
  const theme = useTheme()
  return (
    <LineChart
      xAxis={[{ data: [1000, 2000, 3000, 5000, 7000, 10000, 12000] }]}
      series={[
        {
          data: [1000, 2000, 3000, 5000, 8000, 10000, 12000],
          area: true,
        },
      ]}
      height={300}
      colors={[theme.palette.primary.main]}
    />
  )
}

export default Linechart
