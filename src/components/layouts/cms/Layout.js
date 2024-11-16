'use client'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import AppSidebar from "@/components/layouts/cms/AppSidebar"

const Layout = ({children}) => {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main className="flex flex-col w-full bg-accent">
                <SidebarTrigger />
                {children}
            </main>
        </SidebarProvider>
    )
}

export default Layout

