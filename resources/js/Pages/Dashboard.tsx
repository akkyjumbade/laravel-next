import AppFooter from "@/Components/app-footer"
import AppNavbar from "@/Components/app-navbar"
import { AppSidebar } from "@/components/app-sidebar"
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/Components/ui/command"
import {
    SidebarLayout,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import AdminLayout from "@/Layouts/AdminLayout"
import { useEffect, useState } from "react"

export default function Page() {

    return (
        <AdminLayout >
            Helo admin
        </AdminLayout>
    )
}
