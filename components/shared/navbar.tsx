"use client"

import * as React from "react"
import Link from "next/link"
import { Search, ShoppingBag, User, Heart, Menu, X, ChevronDown } from "lucide-react"
import { useCart } from "@/store/use-cart"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [searchQuery, setSearchQuery] = React.useState("")
  const { totalItems } = useCart()

  const cartCount = totalItems()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold tracking-tight uppercase">
            MODERN<span className="text-primary font-bold tracking-tight">STORE</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-bold uppercase tracking-widest h-full">
          <Link href="/category/men" className="transition-colors hover:text-primary">Men</Link>
          <Link href="/category/women" className="transition-colors hover:text-primary">Women</Link>
          <Link href="/category/accessories" className="transition-colors hover:text-primary">Accessories</Link>
          <Link href="/blog" className="transition-colors hover:text-primary">Blog</Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <div className="hidden lg:flex items-center relative">
            <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="h-9 w-64 rounded-full border bg-muted pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          <div className="flex items-center space-x-2 md:space-x-5">
            <Link href="/login" className="hidden md:flex items-center space-x-2 h-10 px-6 rounded-full bg-primary text-white text-xs font-bold hover:bg-primary/90 transition-all">
              <span>Sign In</span>
            </Link>

            <Link href="/account/wishlist" className="hidden md:block transition-colors hover:text-primary">
              <Heart className="h-5 w-5" />
            </Link>

            <button className="relative transition-colors hover:text-primary">
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -right-2 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              className="md:hidden transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background p-4 animate-in slide-in-from-top duration-300 max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col space-y-4">
            <Link href="/category/men" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>Men</Link>
            <Link href="/category/women" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>Women</Link>
            <Link href="/category/accessories" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>Accessories</Link>
            <Link href="/blog" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>Blog</Link>
            <div className="pt-4 border-t space-y-4">
              <Link href="/login" className="text-sm font-bold text-primary flex items-center" onClick={() => setIsMenuOpen(false)}>
                <User className="h-4 w-4 mr-2" /> Sign In
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
