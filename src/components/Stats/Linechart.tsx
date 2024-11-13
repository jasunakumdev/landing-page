import { useTheme } from '@mui/material'
import { LineChart } from '@mui/x-charts/LineChart'

const Linechart = () => {
  const theme = useTheme()
  return (
    <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10, 12] }]}
      series={[
        {
          data: [2, 5, 7, 11, 16, 20, 25],
          area: true,
        },
      ]}
      height={300}
      colors={[theme.palette.primary.main]}
    />
  )
}

export default Linechart
