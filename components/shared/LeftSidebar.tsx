import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const LeftSidebar = () => {

  return (
    <section className="left_sidebar">

      <nav className="flex flex-col gap-6">

        <Link href="/" className="flex items-center justify-start gap-1 pb-10 max-lg:justify-center">
          <Image src="/icons/logo.svg" width={23} height={27} alt="Logo" />
          <h1 className="text-24 font-extrabold text-charcoal max-lg:hidden">Audion</h1>
        </Link>

        

      </nav>

    </section>
  )

}

export default LeftSidebar

