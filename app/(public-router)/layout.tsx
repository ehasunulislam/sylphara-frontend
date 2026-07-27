import SidebarPage from "./_components/Sidebar/Sidebar";
import MobileSidebar from "./MobileSidebar";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode}>) {
  return (
    <div className="h-screen flex">
      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <SidebarPage />
      </div>

      <main className="flex-1 overflow-hidden relative">
        {/* Mobile Header */}
        <div className="md:hidden p-4">
          <MobileSidebar />
        </div>

        {children}
      </main>
    </div>
  );
}
