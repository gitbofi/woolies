import React from 'react'

const MobileMenu = () => {
  return (
    <>
      <nav className="w-screen lg:hidden bg-dark text-light font-now uppercase flex flex-col tracking-widest p-6 pb-12 space-y-4 text-right">
        <a href="#" className="">Oberteile</a>
        <a href="#">Hosen</a>
        <a href="#">Socken</a>
        <a href="#">Accessoires</a>
        <a href="#" className="pt-8">Nachhaltigkeit</a>
        <a href="#">Über Woolies</a>
      </nav>
    </>
  )
}

export default MobileMenu
