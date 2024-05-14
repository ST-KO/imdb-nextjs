import Link from 'next/link'
import React from 'react'

const MenuItems = ({title, address, Icon}) => {
  return (
    <Link href={address} className='hover:text-amber-500'>
        <Icon className="text-sm sm:hidden" />
        <p className='uppercase hidden sm:inline text-sm'>{title}</p>
    </Link>
  )
}

export default MenuItems