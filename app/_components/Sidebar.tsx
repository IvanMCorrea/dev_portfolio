import { useTheme } from 'next-themes'
import React from 'react'
import { ThemeToggle } from './ThemeToggle'


function Sidebar() {

  return (
    <aside>
      <ThemeToggle />
    </aside>
  )
}

export default Sidebar