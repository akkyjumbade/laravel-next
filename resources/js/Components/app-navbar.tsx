import { BellDotIcon, ChevronLeft } from "lucide-react";
import { PropsWithChildren } from "react";
import { SidebarTrigger } from "./ui/sidebar";
import { Command } from "./ui/command";
import { Link } from "@inertiajs/react";

export default function AppNavbar({ children }: PropsWithChildren) {
    return (
        <nav className="bg-white border-b">
            <div className="container mx-auto px-3 py-3">
                <div className="grid grid-cols-12 gap-3 items-center">
                    <div className="col-span-3 flex items-center">
                        <SidebarTrigger />
                        {/* <div className="flex gap-1">
                            <ChevronLeft />
                            <span>Back</span>
                        </div> */}
                    </div>
                    <div className="col-span-6 text-center">
                        Laravel

                    </div>
                    <div className="col-span-3 flex justify-end pr-3">
                        <Link href="/notifications">
                            <BellDotIcon className="size-5 hover:text-red-500" />
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
