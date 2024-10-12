import AppFooter from "@/Components/app-footer"
import AppNavbar from "@/Components/app-navbar"
import { AppSidebar } from "@/components/app-sidebar"
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/Components/ui/command"
import {
    SidebarLayout,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { PropsWithChildren, useEffect, useState } from "react"

export default function AdminLayout(props: PropsWithChildren) {
    const [sidebarOpen, setSidebarOpen] = useState(true)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            // alert(e.key)
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        }
        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])
    //   const { cookies } = await import("next/headers")
    return (
        <SidebarLayout
            defaultOpen={sidebarOpen}
        >
            <AppSidebar />
            <main className="flex flex-1 flex-col transition-all duration-300 ease-in-out">
                <AppNavbar />
                <div className="container mx-auto p-3 flex-1">
                    <div className="h-full">
                        {props.children}

                    </div>
                </div>
                <AppFooter />
            </main>
            <CommandDialog open={open} onOpenChange={setOpen} >
                <CommandInput placeholder="Type a command or search..." />
                <CommandList >
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Suggestions">
                        <CommandItem>Calendar</CommandItem>
                        <CommandItem>Search Emoji</CommandItem>
                        <CommandItem>Calculator</CommandItem>
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </SidebarLayout>
    )
}
