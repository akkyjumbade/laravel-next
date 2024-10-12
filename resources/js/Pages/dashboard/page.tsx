import AppFooter from "@/Components/app-footer"
import AppNavbar from "@/Components/app-navbar"
import { AppSidebar } from "@/components/app-sidebar"
import {
    SidebarLayout,
    SidebarTrigger,
} from "@/components/ui/sidebar"

export default function Page() {
    //   const { cookies } = await import("next/headers")
    return (
        <SidebarLayout
            defaultOpen={false}
        >
            <AppSidebar />
            <main className="flex flex-1 flex-col transition-all duration-300 ease-in-out">
                <AppNavbar />
                <div className="container mx-auto p-3 flex-1">
                    <div className="h-full rounded-md border-2 border-dashed p-2">
                        Hello world
                    </div>
                </div>
                <AppFooter />
            </main>
        </SidebarLayout>
    )
}
