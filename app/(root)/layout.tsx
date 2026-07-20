import LeftSidebar from "@/components/shared/LeftSidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <main>
          <LeftSidebar />
            {children}
        </main>
    </div>
  );
}

