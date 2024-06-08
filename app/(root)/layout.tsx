"use client";

import Sidebar from "@/components/Sidebar";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/provider/AuthContext";
import { ProtectedRoutes } from "@/provider/ProtectedRouted";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <ProtectedRoutes>
        <main className="flex">
          <Sidebar />
          {children}
          <Toaster />
        </main>
      </ProtectedRoutes>
    </AuthProvider>
  );
}
