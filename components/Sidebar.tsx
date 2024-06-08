import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";
import useAuth from "@/provider/useAuth";

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const isActive = pathname === "/" || pathname === "/tickets";

  const { isAuthenticated, LogoutUser } = useAuth();

  return (
    <div className="sticky left-0 top-0 flex w-fit flex-col border-none bg-gray-800 pt-8 text-white max-md:hidden lg:w-[270px] lg:pl-8">
      <h1 className="text-2xl text-white font-extrabold max-lg:hidden">
        Ticket Generator
      </h1>
      <div className="flex flex-col gap-6 mt-10">
        <Link
          href="/"
          className={cn(
            "flex gap-3 items-center py-4 max-lg:px-4 justify-start max-lg:justify-center",
            {
              "bg-nav-focus border-r-4 border-orange-600": isActive,
            }
          )}
        >
          <h1>Register</h1>
        </Link>
        <Link
          href="/tickets"
          className={cn(
            "flex gap-3 items-center py-4 max-lg:px-4 justify-start max-lg:justify-center",
            {
              "bg-nav-focus border-r-4 border-orange-600": isActive,
            }
          )}
        >
          <h1>Tickets</h1>
        </Link>
        {isAuthenticated ? (
          <h1
            onClick={() => LogoutUser()}
            className={cn(
              "flex gap-3 items-center py-4 max-lg:px-4 justify-start max-lg:justify-center",
              {
                "bg-nav-focus border-r-4 border-orange-600": isActive,
              }
            )}
          >
            <h1>Log Out</h1>
          </h1>
        ) : (
          <Link
            href="/sign-in"
            className={cn(
              "flex gap-3 items-center py-4 max-lg:px-4 justify-start max-lg:justify-center",
              {
                "bg-nav-focus border-r-4 border-orange-600": isActive,
              }
            )}
          >
            <h1>Log In</h1>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
