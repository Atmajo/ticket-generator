import { usePathname, useRouter } from "next/navigation";
import useAuth from "./useAuth";
import { useEffect } from "react";

export const ProtectedRoutes = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const path = usePathname();
  const router = useRouter();

  const { isAuthenticated } = useAuth();
  
  useEffect(() => {
    if (isAuthenticated) {
      router.push("/sign-in");
    }
  }, [isAuthenticated, path, router]);

  return children;
};
