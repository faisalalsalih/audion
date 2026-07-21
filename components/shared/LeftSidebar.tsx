"use client";

import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { sidebarLinks } from '@/constants'
import { usePathname, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';


const LeftSidebar = () => {

  const pathname = usePathname();
  const router = useRouter();


  return (
    <section className="left_sidebar">

      <nav className="flex flex-col gap-6">

        <Link href="/" className="flex items-center justify-start gap-2 pb-10 max-lg:justify-center">
          <Image src="/icons/logo.svg" width={23} height={27} alt="Logo" />
          <h1 className="text-24 font-extrabold text-charcoal max-lg:hidden">Audion</h1>
        </Link>

        {
          sidebarLinks.map(({ route, label, imgURL }) => {

            const isActive = pathname === route;

            return <Link href={route} key={label} className={cn("flex gap-3 items-center py-4 max-lg:px-4 justify-center lg:justify-start", {
              'bg-nav-focus border-r-4 border-orange': isActive
            })}>

              <Image src={imgURL} alt={label} width={24} height={24} className="text-charcoal" />

              <p>{label}</p>

            </Link>

          })
        }



      </nav>

    </section>
  )

}

export default LeftSidebar

