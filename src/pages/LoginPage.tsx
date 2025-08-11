import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
const { login, isLoading, error } = useAuth();
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [showPwd, setShowPwd] = useState(false);

const navigate = useNavigate();
const location = useLocation() as any;
const from = location?.state?.from?.pathname ?? "/dashboard"; // a dónde ir tras login

async function onSubmit(e: React.FormEvent) {
e.preventDefault();
const ok = await login(email.trim(), password);
if (ok) navigate(from, { replace: true });
}

return (
<main className="bg-[#f6f8fb] min-h-screen dark:bg-primary-900 dark:text-white" id="main">
    <div className="mx-auto max-w-3xl px-4 pt-16 pb-24">
    <div className="flex flex-col items-center gap-2">
        {/* si no tienes el icono, borra esta <img /> */}
        <img src={`${import.meta.env.BASE_URL}images/iconmark.png`} alt="" className="h-12 w-12 dark:brightness-[200] dark:saturate-0" />
        <h1 className="text-xl font-semibold text-[#0f4f78]">Bienvenido</h1>
    </div>

    <section className="mt-6 mx-auto w-full max-w-md rounded-lg bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-primary-900 dark:text-white">
        <form className="space-y-4" onSubmit={onSubmit} noValidate>
        <div>
            <label htmlFor="email" className="mb-1 block text-sm text-slate-700 dark:text-white">Email Address</label>
            <input
            id="email"
            type="email"
            autoComplete="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none focus:ring-2 focus:ring-sky-600"
            />
        </div>

        <div>
            <label htmlFor="password" className="mb-1 block text-sm text-slate-700 dark:text-white">Password</label>
            <div className="relative">
            <input
                id="password"
                type={showPwd ? "text" : "password"}
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 pr-12 text-slate-900 outline-none focus:ring-2 focus:ring-sky-600"
            />
            <button
                type="button"
                onClick={() => setShowPwd((s) => !s)}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded px-2 text-sm text-slate-600 hover:text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-600  dark:text-primary-900"
                aria-pressed={showPwd}
                aria-label={showPwd ? "Ocultar contraseña" : "Mostrar contraseña"}
            >
                {showPwd ? "Ocultar" : "Ver"}
            </button>
            </div>
        </div>

        {error && <p role="alert" className="text-sm text-red-600">{error}</p>}

        <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-md bg-[#0f6fa1] px-4 py-2 font-medium text-white hover:bg-[#0d5e87] focus:outline-none focus:ring-4 focus:ring-sky-200 disabled:opacity-60"
        >
            {isLoading ? "Ingresando..." : "Iniciar Sesión"}
        </button>

        <div className="flex items-center justify-between text-sm">
            <label className="inline-flex items-center gap-2">
            <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-[#0f6fa1] focus:ring-[#0f6fa1]" />
            <span>Recordarme</span>
            </label>
            <a href="#" className="text-[#0f6fa1] hover:underline">¿Olvidaste tu contraseña?</a>
        </div>
        </form>
    </section>
    </div>
</main>
);
}
