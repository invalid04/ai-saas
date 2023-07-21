import { UserButton } from "@clerk/nextjs"
import { Button } from "./button"
import { Menu } from 'lucide-react'
import MobileSidebar from "./mobile-sidebar"

const Navbar = () => {
    return (
        <nav className='flex items-center p-4'>
            <MobileSidebar />
            <div className='flex w-full justify-end'>
                <UserButton afterSignOutUrl="/" />
            </div>
        </nav>
    )
}

export default Navbar