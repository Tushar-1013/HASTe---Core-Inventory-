import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Outlet } from "react-router-dom";
import { Bell, Search } from "lucide-react";
export default function AppLayout() {
    return (<SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <header className="h-14 flex items-center justify-between border-b border-border px-4 bg-card shrink-0">
            <div className="flex items-center gap-2">
              <SidebarTrigger className="text-muted-foreground hover:text-foreground"/>
              <div className="hidden sm:flex items-center gap-2 ml-4 bg-secondary rounded-md px-3 py-1.5">
                <Search className="h-4 w-4 text-muted-foreground"/>
                <input type="text" placeholder="Search products, orders..." className="bg-transparent text-sm outline-none w-48 placeholder:text-muted-foreground"/>
                <kbd className="text-[10px] font-mono text-muted-foreground border border-border rounded px-1">⌘K</kbd>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="relative p-2 rounded-md hover:bg-accent text-muted-foreground hover:text-foreground transition-colors">
                <Bell className="h-4 w-4"/>
                <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-primary"/>
              </button>
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-display font-bold">
                IM
              </div>
            </div>
          </header>
          <main className="flex-1 overflow-y-auto p-6 lg:p-10">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>);
}
