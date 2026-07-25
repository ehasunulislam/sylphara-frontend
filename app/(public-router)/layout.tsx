import SidebarPage from "./_components/Sidebar/Sidebar";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode}>) {
  return (
    <div className="h-screen flex">
      <SidebarPage />

      <main className="flex-1 overflow-hidden">
        {children}
      </main>
    </div>
  );
}
