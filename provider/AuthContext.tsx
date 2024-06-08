import React, { createContext, useState, useEffect } from "react";
import Cookie from "js-cookie";

const AuthContext = createContext<{
  isAuthenticated: boolean;
  LoginUser: (token: string) => void;
  LogoutUser: () => void;
}>({
  isAuthenticated: false,
  LoginUser: (token: string) => {},
  LogoutUser: () => {},
});

const AuthProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const hasAccess = Cookie.get("user");

    if (hasAccess) {
      setIsAuthenticated(true);
    }
  }, []);

  const LoginUser = (token: string) => {
    Cookie.set("user", token);
    setIsAuthenticated(true);
  };

  const LogoutUser = () => {
    Cookie.remove("user");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, LoginUser, LogoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
