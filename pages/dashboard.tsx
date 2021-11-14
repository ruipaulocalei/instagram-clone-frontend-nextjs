import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

export default function Dashboard() {
  return (
    <div className='flex-col flex h-screen'>
      <Header />
      <div className="w-full my-6 max-w-screen-xl mx-auto px-6">
        <Sidebar />
      </div>
    </div>
  )
}