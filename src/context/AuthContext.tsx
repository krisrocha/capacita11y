import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from "react";

type User = { email: string } | null;
type Ctx = {
user: User;
login: (email: string, password: string) => Promise<boolean>;
logout: () => void;
isLoading: boolean;
error: string | null;
};

const AuthCtx = createContext<Ctx | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
const [user, setUser] = useState<User>(null);
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState<string | null>(null);

useEffect(() => {
const raw = localStorage.getItem("authUser");
if (raw) setUser(JSON.parse(raw));
}, []);

async function login(email: string, password: string): Promise<boolean> {
setIsLoading(true);
setError(null);
await new Promise(r => setTimeout(r, 400)); // simula API

const ok = /\S+@\S+\.\S+/.test(email) && password.length >= 6;
if (!ok) {
    setIsLoading(false);
    setError("Credenciales inválidas. Verifica tu email y contraseña.");
    return false;
}
const u = { email };
setUser(u);
localStorage.setItem("authUser", JSON.stringify(u));
setIsLoading(false);
return true;
}

function logout() {
setUser(null);
localStorage.removeItem("authUser");
}

const value = useMemo(() => ({ user, login, logout, isLoading, error }), [user, isLoading, error]);
return <AuthCtx.Provider value={value}>{children}</AuthCtx.Provider>;
}

export function useAuth() {
const ctx = useContext(AuthCtx);
if (!ctx) throw new Error("useAuth must be used within <AuthProvider>");
return ctx;
}
