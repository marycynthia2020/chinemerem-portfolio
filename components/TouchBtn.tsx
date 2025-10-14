import Link from 'next/link'
import React from 'react'

const TouchBtn = ({children, className, href}:BtnProps) => {
  return (
    <Link href= {href} className=' w-fit font-medium capitalize flex gap-3 pr-3 items-center border border-[#FEB273] rounded-[100px]'>
        <span className={`text-black bg-[#FEB273] grid place-content-center py-5 rounded-tr-[150px] rounded-tl-[100px] rounded-bl-[100px] ${className}`}>{children}</span>
        <span className="basis-[fit-content]">
          <img src="/arrow.svg" alt="" />
        </span>
    </Link>
  )
}

export default TouchBtn
