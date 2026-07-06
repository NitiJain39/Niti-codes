import React from 'react'
import { Outlet } from 'react-router'
import Header from './components/common/Header'
export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto py-8 px-4">
        <Outlet />
      </main>
    </div>
  )
}
