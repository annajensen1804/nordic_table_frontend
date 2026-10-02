import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { serverPath } from "../settings";

/* AuthProvider holder styr på, om en bruger er logget ind.
   Token gemmes i localStorage, så login overlever en sideopdatering.
   Provideren pakkes uden om hele appen (se main.jsx), så alle komponenter
   kan bruge login/logout/token via useAuthContext(). */
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : null;
  });

  // Sender email + adgangskode til backend'en og gemmer den token, vi får retur.
  const login = async ({ email, password }) => {
    const res = await fetch(`${serverPath}/auth/signin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) throw new Error("Forkert email eller adgangskode");

    const json = await res.json();

    const newToken = json?.data?.token;

    const newUser = json?.data?.user ?? json?.user ?? null;
    /* ------------------------------------------------------------------------- */

    if (!newToken) throw new Error("Ingen token modtaget fra serveren");

    localStorage.setItem("token", newToken);
    if (newUser) localStorage.setItem("user", JSON.stringify(newUser));
    setToken(newToken);
    setUser(newUser);
    return newToken;
  };

  // Logger ud ved at fjerne token fra både state og localStorage.
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ token, user, login, logout, isLoggedIn: !!token }}>
      {children}
    </AuthContext.Provider>
  );
};
