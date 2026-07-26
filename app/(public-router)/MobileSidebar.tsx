"use client";

import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, } from "@/components/ui/sheet";
import SidebarPage from "./_components/Sidebar/Sidebar";
import { Button } from "@/components/ui/button";


export default function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="md:hidden p-2">
          <Menu size={24} />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="p-0 w-64 bg-transparent text-white border-none">
        <SidebarPage />
      </SheetContent>
    </Sheet>
  );
}