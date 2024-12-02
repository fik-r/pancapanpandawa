'use client'
import { ChevronRight, ChevronDown } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
} from "@/components/ui/sidebar"

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger
} from "@/components/ui/collapsible"

const items = [
    {
        title: "Pages",
        menus: [
            {
                title: "Home",
                url: "/cms",
                icon: ChevronRight,
            },
            {
                title: "About",
                url: "/cms/about",
                icon: ChevronRight,
            },
            {
                title: "Service",
                url: "/cms/service",
                icon: ChevronRight,
            },
            {
                title: "Contact",
                url: "/cms/contact",
                icon: ChevronRight,
            },
        ]
    },
    {
        title: "Datatables",
        menus: [
            {
                title: "Partners",
                url: "/cms/partners",
            },
            {
                title: "Services",
                url: "/cms/services",
            },
            {
                title: "Certificates",
                url: "/cms/certificates",
            },
            {
                title: "Testimonials",
                url: "/cms/testimonials",
            },
            {
                title: "Visi Mission",
                url: "/cms/missions",
            },
            {
                title: "Why Us",
                url: "/cms/whyus",
            },
            {
                title: "Our Teams",
                url: "/cms/ourteams",
            },
            {
                title: "Gallery of Services",
                url: "/cms/servicegallery",
            },
            {
                title: "Contacts",
                url: "/cms/contacts",
            },
        ]
    }
]

const AppSidebar = () => {
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel className="text-white">CMS - Pandawa</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <Collapsible key={item.title} defaultOpen className="group/collapsible">
                                    <SidebarMenuItem>
                                        <CollapsibleTrigger asChild>
                                            <SidebarMenuButton><div className="flex flex-row justify-between w-full items-center">
                                                {item.title} <ChevronDown className="w-5 h-5" />
                                            </div></SidebarMenuButton>
                                        </CollapsibleTrigger>
                                        <CollapsibleContent>
                                            {item.menus.map((menu) => {
                                                return (
                                                    <SidebarMenuSub key={menu.title}>
                                                        <SidebarMenuSubButton asChild>
                                                            <a href={menu.url}>
                                                                <span>{menu.title}</span>
                                                            </a>
                                                        </SidebarMenuSubButton>
                                                    </SidebarMenuSub>
                                                )
                                            })}
                                        </CollapsibleContent>
                                    </SidebarMenuItem>
                                </Collapsible>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}

export default AppSidebar