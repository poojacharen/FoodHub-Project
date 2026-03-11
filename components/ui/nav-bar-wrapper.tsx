"use client"

import { NavBar } from './tubelight-navbar'
import { Home, Compass, CreditCard, BookOpen } from 'lucide-react'

const navItems = [
  { name: 'Features',     url: '#features',      icon: Home },
  { name: 'How it works', url: '#how-it-works',  icon: Compass },
  { name: 'Pricing',      url: '#pricing',       icon: CreditCard },
  { name: 'Blog',         url: '#',              icon: BookOpen },
]

export function NavBarWrapper() {
  return <NavBar items={navItems} />
}
