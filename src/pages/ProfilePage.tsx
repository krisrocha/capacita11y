import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useAccessibility } from "../context/AccessibilityContext";
import {
User as 
Mail,
Camera,
Save,
Shield,
Eye,
EyeOff,
Bell,
Globe,
CheckCircle2,
AlertCircle,
} from "lucide-react";

type Prefs = {
language: "es" | "en";
notifyUpdates: boolean;
notifyReminders: boolean;
notifyCommunity: boolean;
reduceMotion: boolean;
largeText: boolean;
};

export default function ProfilePage() {
const { user } = useAuth();
const { darkMode, toggleDarkMode } = useAccessibility();

// --- Perfil ---
const [fullName, setFullName] = useState<string>("");
const [email] = useState<string>(user?.email ?? "");
const [avatarPreview, setAvatarPreview] = useState<string | null>(null);

// --- Seguridad ---
const [currentPwd, setCurrentPwd] = useState("");
const [newPwd, setNewPwd] = useState("");
const [confirmPwd, setConfirmPwd] = useState("");
const [showPwd, setShowPwd] = useState(false);
const [secMessage, setSecMessage] = useState<string | null>(null);

// --- Preferencias ---
const [prefs, setPrefs] = useState<Prefs>({
language: "es",
notifyUpdates: true,
notifyReminders: true,
notifyCommunity: true,
reduceMotion: false,
largeText: false,
});

const [saved, setSaved] = useState<string | null>(null);
const [errors, setErrors] = useState<Record<string, string>>({});

function onAvatarChange(e: React.ChangeEvent<HTMLInputElement>) {
const file = e.target.files?.[0];
if (!file) return;
const url = URL.createObjectURL(file);
setAvatarPreview(url);
}

function saveProfile(e: React.FormEvent) {
e.preventDefault();
const errs: Record<string, string> = {};
if (!fullName.trim()) errs.fullName = "Ingresa tu nombre completo.";

setErrors(errs);
if (Object.keys(errs).length) return;

// Aquí conectarías con tu API
localStorage.setItem(
    "profile",
    JSON.stringify({ fullName, email, avatar: avatarPreview })
);
setSaved("Perfil actualizado correctamente.");
setTimeout(() => setSaved(null), 2500);
}

function saveSecurity(e: React.FormEvent) {
e.preventDefault();
setSecMessage(null);
if (newPwd.length < 6) {
    setSecMessage("La nueva contraseña debe tener al menos 6 caracteres.");
    return;
}
if (newPwd !== confirmPwd) {
    setSecMessage("Las contraseñas no coinciden.");
    return;
}
// Simula éxito
setCurrentPwd("");
setNewPwd("");
setConfirmPwd("");
setSecMessage("Contraseña actualizada.");
setTimeout(() => setSecMessage(null), 2500);
}

function savePrefs(e: React.FormEvent) {
e.preventDefault();
localStorage.setItem("prefs", JSON.stringify(prefs));
setSaved("Preferencias guardadas.");
setTimeout(() => setSaved(null), 2500);
}

return (
<main id="main" className="bg-[#f6f8fb] min-h-screen pb-16">
    <div className="container-tight px-4 pt-8">
    <header className="mb-6">
        <h1 className="text-[22px] font-semibold text-slate-900">Perfil</h1>
        <p className="mt-1 text-slate-600">
        Administra tu información, seguridad y preferencias.
        </p>
    </header>

    {saved && (
        <div
        role="status"
        className="mb-4 flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-2 text-emerald-900"
        >
        <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
        <p>{saved}</p>
        </div>
    )}

    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Columna izquierda: avatar + datos básicos */}
        <section className="lg:col-span-1 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-sm font-semibold text-slate-900">Cuenta</h2>

        <div className="mt-4 flex items-center gap-4">
            <img
            src={
                avatarPreview ||
                `${import.meta.env.BASE_URL}images/avatar-default.png`
            }
            alt="Foto de perfil"
            className="h-16 w-16 rounded-full object-cover ring-2 ring-slate-200"
            />
            <label className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-3 py-1.5 text-sm hover:bg-slate-50 cursor-pointer">
            <Camera className="h-4 w-4" />
            <span>Cambiar foto</span>
            <input
                type="file"
                accept="image/*"
                onChange={onAvatarChange}
                className="sr-only"
            />
            </label>
        </div>

        <form onSubmit={saveProfile} className="mt-4 space-y-4" noValidate>
            <div>
            <label htmlFor="fullName" className="mb-1 block text-sm text-slate-700">
                Nombre completo
            </label>
            <input
                id="fullName"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                aria-invalid={!!errors.fullName}
                aria-describedby={errors.fullName ? "fullName-error" : undefined}
                className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-sky-600"
            />
            {errors.fullName && (
                <p id="fullName-error" className="mt-1 flex items-center gap-1 text-sm text-red-600">
                <AlertCircle className="h-4 w-4" /> {errors.fullName}
                </p>
            )}
            </div>

            <div>
            <label htmlFor="email" className="mb-1 block text-sm text-slate-700">
                Correo
            </label>
            <div className="relative">
                <Mail className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                id="email"
                type="email"
                value={email}
                readOnly
                className="w-full rounded-md border border-slate-300 bg-slate-50 pl-9 pr-3 py-2 text-slate-900"
                aria-readonly="true"
                />
            </div>
            <p className="mt-1 text-xs text-slate-500">
                El correo no puede modificarse desde aquí.
            </p>
            </div>

            <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-md bg-sky-700 px-4 py-2 text-sm font-medium text-white hover:bg-sky-800 focus:outline-none focus:ring-4 focus:ring-sky-300"
            >
            <Save className="h-4 w-4" /> Guardar perfil
            </button>
        </form>
        </section>

        {/* Columna derecha: seguridad y preferencias */}
        <div className="lg:col-span-2 space-y-6">
        {/* Seguridad */}
        <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-2 flex items-center gap-2">
            <Shield className="h-5 w-5 text-slate-700" aria-hidden="true" />
            <h2 className="text-sm font-semibold text-slate-900">Seguridad</h2>
            </div>

            {secMessage && (
            <div
                role="status"
                className={`mb-3 rounded-md px-3 py-2 text-sm ${
                /actualizada|hecha|ok/i.test(secMessage)
                    ? "bg-emerald-50 text-emerald-900"
                    : "bg-red-50 text-red-700"
                }`}
            >
                {secMessage}
            </div>
            )}

            <form onSubmit={saveSecurity} className="grid grid-cols-1 gap-4 sm:grid-cols-2" noValidate>
            <div className="sm:col-span-2">
                <label htmlFor="currentPwd" className="mb-1 block text-sm text-slate-700">
                Contraseña actual
                </label>
                <input
                id="currentPwd"
                type={showPwd ? "text" : "password"}
                value={currentPwd}
                onChange={(e) => setCurrentPwd(e.target.value)}
                className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-sky-600"
                />
            </div>

            <div>
                <label htmlFor="newPwd" className="mb-1 block text-sm text-slate-700">
                Nueva contraseña
                </label>
                <div className="relative">
                <input
                    id="newPwd"
                    type={showPwd ? "text" : "password"}
                    value={newPwd}
                    onChange={(e) => setNewPwd(e.target.value)}
                    className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 pr-10 outline-none focus:ring-2 focus:ring-sky-600"
                />
                <button
                    type="button"
                    onClick={() => setShowPwd((s) => !s)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-slate-500 hover:text-slate-700"
                    aria-label={showPwd ? "Ocultar contraseña" : "Mostrar contraseña"}
                    aria-pressed={showPwd}
                >
                    {showPwd ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
                </div>
            </div>

            <div>
                <label htmlFor="confirmPwd" className="mb-1 block text-sm text-slate-700">
                Confirmar contraseña
                </label>
                <input
                id="confirmPwd"
                type={showPwd ? "text" : "password"}
                value={confirmPwd}
                onChange={(e) => setConfirmPwd(e.target.value)}
                className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-sky-600"
                />
            </div>

            <div className="sm:col-span-2">
                <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-300"
                >
                Actualizar contraseña
                </button>
            </div>
            </form>
        </section>

        {/* Preferencias */}
        <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-2 flex items-center gap-2">
            <Globe className="h-5 w-5 text-slate-700" aria-hidden="true" />
            <h2 className="text-sm font-semibold text-slate-900">Preferencias</h2>
            </div>

            <form onSubmit={savePrefs} className="space-y-4" noValidate>
            {/* Idioma */}
            <label className="block text-sm text-slate-700">
                Idioma
                <select
                value={prefs.language}
                onChange={(e) => setPrefs({ ...prefs, language: e.target.value as "es" | "en" })}
                className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-sky-600 sm:w-64"
                >
                <option value="es">Español</option>
                <option value="en">English</option>
                </select>
            </label>

            {/* Notificaciones */}
            <fieldset className="rounded-lg border border-slate-200 p-4">
                <legend className="text-sm font-medium text-slate-800 flex items-center gap-2">
                <Bell className="h-4 w-4" /> Notificaciones
                </legend>
                <div className="mt-3 space-y-2 text-sm">
                <Toggle
                    label="Actualizaciones del producto"
                    checked={prefs.notifyUpdates}
                    onChange={(v) => setPrefs({ ...prefs, notifyUpdates: v })}
                />
                <Toggle
                    label="Recordatorios de estudio"
                    checked={prefs.notifyReminders}
                    onChange={(v) => setPrefs({ ...prefs, notifyReminders: v })}
                />
                <Toggle
                    label="Actividad de la comunidad"
                    checked={prefs.notifyCommunity}
                    onChange={(v) => setPrefs({ ...prefs, notifyCommunity: v })}
                />
                </div>
            </fieldset>

            {/* Accesibilidad */}
            <fieldset className="rounded-lg border border-slate-200 p-4">
                <legend className="text-sm font-medium text-slate-800 flex items-center gap-2">
                Accesibilidad
                </legend>
                <div className="mt-3 space-y-2 text-sm">
                <Toggle
                    label="Tema oscuro (sincronizado con el botón del header)"
                    checked={darkMode}
                    onChange={() => toggleDarkMode()}
                />
                <Toggle
                    label="Reducir movimiento"
                    checked={prefs.reduceMotion}
                    onChange={(v) => setPrefs({ ...prefs, reduceMotion: v })}
                />
                <Toggle
                    label="Texto grande"
                    checked={prefs.largeText}
                    onChange={(v) => setPrefs({ ...prefs, largeText: v })}
                />
                </div>
            </fieldset>

            <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-md bg-sky-700 px-4 py-2 text-sm font-medium text-white hover:bg-sky-800 focus:outline-none focus:ring-4 focus:ring-sky-300"
            >
                <Save className="h-4 w-4" /> Guardar preferencias
            </button>
            </form>
        </section>
        </div>
    </div>
    </div>
</main>
);
}

/* ------------------- UI helpers ------------------- */

function Toggle({
label,
checked,
onChange,
}: {
label: string;
checked: boolean;
onChange: (v: boolean) => void;
}) {
return (
<label className="flex items-center justify-between gap-4">
    <span className="text-slate-700">{label}</span>
    <button
    type="button"
    role="switch"
    aria-checked={checked}
    onClick={() => onChange(!checked)}
    className={`relative h-6 w-11 rounded-full transition ${
        checked ? "bg-sky-600" : "bg-slate-300"
    } focus:outline-none focus:ring-2 focus:ring-sky-600`}
    >
    <span
        className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition ${
        checked ? "left-6 -translate-x-full" : "left-0.5"
        }`}
    />
    </button>
</label>
);
}
