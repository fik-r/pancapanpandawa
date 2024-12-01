'use client'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import AppSidebar from "@/components/layouts/cms/AppSidebar"
import LoadingOverlay from "@/components/layouts/Loading"
import { Toaster } from "@/components/ui/toaster"
const Layout = ({ children, loading }) => {
    return (
        <>
            <SidebarProvider>
                <AppSidebar />
                <main className="flex flex-col w-full bg-accent">
                    <SidebarTrigger />
                    {children}
                </main>
            </SidebarProvider>
            <LoadingOverlay loading={loading} />
            <Toaster />
        </>

    )
}

export default Layout

