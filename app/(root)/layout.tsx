"use client";

import Sidebar from "@/components/Sidebar";
import { Toaster } from "@/components/ui/toaster";
import Image from "next/image";
import { useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [menu, setMenu] = useState(false);
  return (
    <main className="flex">
      <div className="hidden md:flex">
        <Sidebar menu={menu} setMenu={setMenu} />
      </div>
      <div className="md:hidden absolute top-5 left-5">
        <Image
          src="/menu.svg"
          alt="menu"
          width={30}
          height={30}
          onClick={() => setMenu(!menu)}
        />
      </div>
      <div className="md:hidden">
        {menu && <Sidebar menu={menu} setMenu={setMenu} />}
      </div>
      {children}
      <Toaster />
    </main>
  );
}
