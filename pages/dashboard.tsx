import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
})

const options = {
  chart: {
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    },
  },
  grid: {
    show: false
  },
  tooltip: {
    enabled: false
  },
  // xaxis: {
  //   type: 'datetime'
  // },
  // categories: [
  //   '2021-11-14T01:00:00.000z',
  //   '2021-11-15T01:00:00.000z',
  //   '2021-11-16T01:00:00.000z',
  //   '2021-11-17T01:00:00.000z',
  //   '2021-11-18T01:00:00.000z',
  //   '2021-11-19T01:00:00.000z',
  // ]
}
const series = [
  {
    name: 'serie1', data: [43, 90, 23, 9, 21, 23]
  }
]

export default function Dashboard() {
  return (
    <div className='flex-col flex h-screen'>
      <Header />
      <div className="w-full my-6 mx-auto px-6 space-y-6 sm:flex">
        <Sidebar />
        <aside className="grid gap-4 md:grid-cols-1 lg:grid-cols-2 flex-1 items-start">
          <div className="bg-red-400 p-8 rounded-lg">
            <Chart options={options} type='area' height={160} series={series} />
            <p>Inscritos da semana</p>
          </div>
          <div className="bg-red-400 p-8 rounded-lg">
            <p>Taxa de abertura</p>
          </div>
        </aside>
      </div>
    </div>
  )
}