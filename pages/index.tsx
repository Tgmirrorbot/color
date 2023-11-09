import Image from 'next/image'
import { Inter } from 'next/font/google'
import ColorPicker from '../components/ColorPicker'
import Header from '../components/Header'
import Login from '../components/Login'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`min-h-screen bg-gray-200 ${inter.className}`}>
      <Header />
      <main className="flex flex-col items-center justify-center p-24">
        <ColorPicker />
        <Login />
      </main>
    </div>
  )
}