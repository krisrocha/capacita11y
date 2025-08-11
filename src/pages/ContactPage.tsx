import { useState } from "react";
import {
Mail,
Phone,
Clock,
MapPin,
Send,
AlertCircle,
CheckCircle2,
} from "lucide-react";

type FormState = {
name: string;
email: string;
subject: string;
message: string;
consent: boolean;
};

export default function ContactPage() {
const [data, setData] = useState<FormState>({
name: "",
email: "",
subject: "",
message: "",
consent: false,
});
const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
const [sent, setSent] = useState(false);

function validate(): boolean {
const e: Partial<Record<keyof FormState, string>> = {};
if (!data.name.trim()) e.name = "Ingresa tu nombre.";
if (!/\S+@\S+\.\S+/.test(data.email)) e.email = "Correo inválido.";
if (!data.subject.trim()) e.subject = "Escribe un asunto.";
if (data.message.trim().length < 10) e.message = "El mensaje debe tener al menos 10 caracteres.";
if (!data.consent) e.consent = "Debes aceptar el aviso de privacidad.";
setErrors(e);
return Object.keys(e).length === 0;
}

async function onSubmit(e: React.FormEvent) {
e.preventDefault();
if (!validate()) return;
// Simula envío
await new Promise((r) => setTimeout(r, 700));
setSent(true);
// Limpia formulario
setData({ name: "", email: "", subject: "", message: "", consent: false });
setErrors({});
}

return (
<main id="main" className="bg-[#f6f8fb] min-h-screen pb-16 dark:bg-primary-900 dark:text-white">
    <div className="container-tight px-4 pt-8">
    <header className="mb-6">
        <h1 className="text-[22px] font-semibold text-slate-900">Contacto</h1>
        <p className="mt-1 text-slate-600">
        ¿Tienes preguntas o necesitas soporte? Escríbenos y te responderemos pronto.
        </p>
    </header>

    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Formulario */}
        <section className="lg:col-span-2 rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:bg-primary-900 dark:text-white">
        <h2 className="sr-only">Formulario de contacto</h2>

        {sent && (
            <div
            role="status"
            className="mb-4 flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-2 text-emerald-900 dark:text-white"
            >
            <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
            <p>¡Mensaje enviado! Te contactaremos muy pronto.</p>
            </div>
        )}

        <form onSubmit={onSubmit} noValidate className="space-y-4">
            {/* Nombre */}
            <div>
            <label htmlFor="name" className="mb-1 block text-sm text-slate-700 dark:text-white">
                Nombre
            </label>
            <input
                id="name"
                type="text"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
                className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-sky-600"
            />
            {errors.name && (
                <p id="name-error" className="mt-1 flex items-center gap-1 text-sm text-red-600">
                <AlertCircle className="h-4 w-4" /> {errors.name}
                </p>
            )}
            </div>

            {/* Email */}
            <div>
            <label htmlFor="email" className="mb-1 block text-sm text-slate-700 dark:text-white">
                Correo electrónico
            </label>
            <input
                id="email"
                type="email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-sky-600"
            />
            {errors.email && (
                <p id="email-error" className="mt-1 flex items-center gap-1 text-sm text-red-600">
                <AlertCircle className="h-4 w-4" /> {errors.email}
                </p>
            )}
            </div>

            {/* Asunto */}
            <div>
            <label htmlFor="subject" className="mb-1 block text-sm text-slate-700 dark:text-white">
                Asunto
            </label>
            <input
                id="subject"
                type="text"
                value={data.subject}
                onChange={(e) => setData({ ...data, subject: e.target.value })}
                aria-invalid={!!errors.subject}
                aria-describedby={errors.subject ? "subject-error" : undefined}
                className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-sky-600"
            />
            {errors.subject && (
                <p id="subject-error" className="mt-1 flex items-center gap-1 text-sm text-red-600">
                <AlertCircle className="h-4 w-4" /> {errors.subject}
                </p>
            )}
            </div>

            {/* Mensaje */}
            <div>
            <label htmlFor="message" className="mb-1 block text-sm text-slate-700 dark:text-white">
                Mensaje
            </label>
            <textarea
                id="message"
                rows={5}
                value={data.message}
                onChange={(e) => setData({ ...data, message: e.target.value })}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
                className="w-full resize-y rounded-md border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-sky-600"
            />
            {errors.message && (
                <p id="message-error" className="mt-1 flex items-center gap-1 text-sm text-red-600">
                <AlertCircle className="h-4 w-4" /> {errors.message}
                </p>
            )}
            </div>

            {/* Consentimiento */}
            <label className="flex items-start gap-2 text-sm text-slate-700">
            <input
                type="checkbox"
                checked={data.consent}
                onChange={(e) => setData({ ...data, consent: e.target.checked })}
                aria-invalid={!!errors.consent}
                className="mt-0.5 h-4 w-4 rounded border-slate-300 text-sky-600 focus:ring-sky-600 "
            />
            <span className="dark:text-white">
                Acepto el tratamiento de mis datos conforme al{" "}
                <a className="text-sky-700 underline" href="#" onClick={(e) => e.preventDefault()}>
                Aviso de privacidad
                </a>.
            </span>
            </label>
            {errors.consent && (
            <p className="flex items-center gap-1 text-sm text-red-600">
                <AlertCircle className="h-4 w-4" /> {errors.consent}
            </p>
            )}

            <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-md bg-sky-700 px-4 py-2 font-medium text-white hover:bg-sky-800 focus:outline-none focus:ring-4 focus:ring-sky-300"
            >
            <Send className="h-4 w-4" /> Enviar mensaje
            </button>
        </form>
        </section>

        {/* Info de soporte / contacto */}
        <aside className="space-y-4">
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:bg-primary-900 dark:text-white">
            <h2 className="text-sm font-semibold text-slate-900">Soporte</h2>
            <ul className="mt-3 space-y-3 text-sm">
            <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 text-sky-700" aria-hidden="true" />
                <div>
                <p className="font-medium text-slate-900">Email</p>
                <a className="text-slate-700 hover:underline" href="mailto:support@capacitA11y.com">
                    support@capacitA11y.com
                </a>
                </div>
            </li>
            <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 text-sky-700" aria-hidden="true" />
                <div>
                <p className="font-medium text-slate-900">Teléfono</p>
                <a className="text-slate-700 hover:underline" href="tel:+1809ACCESS">
                    1-809-ACCESS
                </a>
                </div>
            </li>
            <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 text-sky-700" aria-hidden="true" />
                <div>
                <p className="font-medium text-slate-900">Horario</p>
                <p className="text-slate-700">Lun–Vie · 9:00–18:00</p>
                </div>
            </li>
            </ul>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:bg-primary-900 dark:text-white">
            <h2 className="text-sm font-semibold text-slate-900">Oficina</h2>
            <div className="mt-2 flex items-start gap-3 text-sm">
            <MapPin className="h-5 w-5 text-sky-700" aria-hidden="true" />
            <p className="text-slate-700">
                Av. Inclusión 123, Piso 4
                <br /> Ciudad Accesible, País
            </p>
            </div>

            {/* Mapa/imagen */}
            <div className="mt-3 overflow-hidden rounded-lg border border-slate-200">
            <img
                src={`${import.meta.env.BASE_URL}images/mapa.jpg`}
                alt="Mapa de la ubicación de la oficina"
                className="h-40 w-full object-cover"
                loading="lazy"
            />
            </div>
        </div>
        </aside>
    </div>
    </div>
</main>
);
}
