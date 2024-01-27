"use client"

import Link from 'next/link' //Enables us move to other pages of our application
import Image from 'next/image' //Enables automatic optimization of the images for us
import { useState, useEffect } from 'react'; //hooks imported from React for later use. Hence, the use client at the start
import { signIn, signOut, useSession, getProviders } from 'next-auth/react' //make sign in and out very increditble

export default function page () {
  return (
    <nav className ="flex-between w-full mb-16 pt-3">
    <Link href="/" className="flex gap-2 flex-center">
        
        <p className = "logo_text">nebula <br/>logix.</p> 
    </Link> 

    {/* Mobile Navigation */}
    <div className="sm:flex hidden">
        <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
                Contact Us
            </Link>
        </div>
    </div>
</nav>
  )
}

