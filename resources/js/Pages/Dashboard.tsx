import AppFooter from "@/components/app-footer"
import AppNavbar from "@/components/app-navbar"
import { AppSidebar } from "@/components/app-sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import {
    SidebarLayout,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import AdminLayout from "@/Layouts/AdminLayout"
import { BarChart, Bell, DollarSign, Users } from "lucide-react"
import { useEffect, useState } from "react"

export default function Page() {

    return (
        <AdminLayout >
            <main className="flex-1 overflow-y-auto " style={{ '--grid-gutter': '1rem' }}>
                <header className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-semibold text-gray-800 dark:text-white">Dashboard</h1>
                    <Button variant="outline" size="icon">
                        <Bell className="h-4 w-4" />
                    </Button>
                </header>

                {/* Stats overview */}
                <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
                    <Card className="bg-blue-50 dark:bg-blue-900/20 ">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                            <DollarSign className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">$45,231.89</div>
                            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                        </CardContent>
                    </Card>
                    <Card className="bg-green-50 dark:bg-green-900/20">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">New Customers</CardTitle>
                            <Users className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">+2350</div>
                            <p className="text-xs text-muted-foreground">+180.1% from last month</p>
                        </CardContent>
                    </Card>
                    <Card className="bg-yellow-50 dark:bg-yellow-900/20">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Sales</CardTitle>
                            <BarChart className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">+12,234</div>
                            <p className="text-xs text-muted-foreground">+19% from last month</p>
                        </CardContent>
                    </Card>
                    <Card className="bg-purple-50 dark:bg-purple-900/20">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Active Now</CardTitle>
                            <Users className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">+573</div>
                            <p className="text-xs text-muted-foreground">+201 since last hour</p>
                        </CardContent>
                    </Card>
                </div>

                <div className="grid gap-6 mb-8 md:grid-cols-2">
                    {/* Chart */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Sales Overview</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {/* <Line data={chartData} /> */}
                        </CardContent>
                    </Card>

                    {/* Recent activity */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Recent Activity</CardTitle>
                            <CardDescription>You have 3 new notifications</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-8">
                                {[
                                    {
                                        name: "Olivia Martin",
                                        email: "olivia.martin@email.com",
                                        sale: "+$1,999.00",
                                    },
                                    {
                                        name: "Jackson Lee",
                                        email: "jackson.lee@email.com",
                                        sale: "+$39.00",
                                    },
                                    {
                                        name: "Isabella Nguyen",
                                        email: "isabella.nguyen@email.com",
                                        sale: "+$299.00",
                                    },
                                ].map((activity, index) => (
                                    <div className="flex items-center" key={index}>
                                        <Avatar className="h-9 w-9">
                                            <AvatarImage src={`/placeholder-user.jpg`} alt="Avatar" />
                                            <AvatarFallback>{activity.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                                        </Avatar>
                                        <div className="ml-4 space-y-1">
                                            <p className="text-sm font-medium leading-none">{activity.name}</p>
                                            <p className="text-sm text-muted-foreground">{activity.email}</p>
                                        </div>
                                        <div className="ml-auto font-medium">{activity.sale}</div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </AdminLayout>
    )
}
