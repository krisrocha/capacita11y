import { Accessibility, HeartHandshake, GraduationCap, Rocket, Award } from "lucide-react";

export default function AboutPage() {
return (
<main id="main" className="bg-[#f6f8fb] min-h-screen dark:bg-primary-900 dark:text-white">
    <div className="container-tight px-4 py-8">
    {/* Hero */}
    <figure className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <img
        src={`${import.meta.env.BASE_URL}images/colaboradores.png`}
        alt="Personas colaborando en un espacio de aprendizaje inclusivo"
        className="h-56 w-full object-cover"
        loading="lazy"
        />
    </figure>

    {/* Título + intro */}
    <header className="mt-6">
        <h1 className="text-[22px] font-semibold text-slate-900">Acerca de CapacitA11y</h1>
        <p className="mt-2 text-slate-700">
        CapacitA11y es una plataforma de formación online dedicada a ofrecer cursos accesibles
        para personas con discapacidad. Nuestra misión es promover la inclusión digital y
        educativa, brindando oportunidades de aprendizaje de calidad para todas las personas.
        </p>
    </header>

    {/* Misión / Visión */}
    <section className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:bg-primary-900 dark:text-white">
        <h2 className="text-base font-semibold text-slate-900">Misión</h2>
        <p className="mt-2 text-slate-700">
            Empoderar a las personas con discapacidad a través de la educación accesible,
            fomentando su desarrollo personal y profesional en el entorno digital.
        </p>
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:bg-primary-900 dark:text-white">
        <h2 className="text-base font-semibold text-slate-900">Visión</h2>
        <p className="mt-2 text-slate-700">
            Ser la plataforma líder en formación online accesible, reconocida por su compromiso
            con la inclusión y la calidad educativa, contribuyendo a una sociedad más equitativa.
        </p>
        </article>
    </section>

    {/* Valores */}
    <section className="mt-6">
        <h2 className="text-base font-semibold text-slate-900">Valores</h2>
        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <ValuePill
            icon={<HeartHandshake className="h-4 w-4" aria-hidden="true" />}
            label="Inclusión"
        />
        <ValuePill
            icon={<Accessibility className="h-4 w-4" aria-hidden="true" />}
            label="Accesibilidad"
        />
        <ValuePill
            icon={<GraduationCap className="h-4 w-4" aria-hidden="true" />}
            label="Educación de Calidad"
        />
        </div>
    </section>

    {/* Hitos del proyecto */}
    <section className="mt-8">
        <h2 className="text-base font-semibold text-slate-900">Hitos del Proyecto</h2>
        <ul className="mt-3 space-y-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:bg-primary-900 dark:text-white">
        <TimelineItem
            icon={<Rocket className="h-5 w-5 text-sky-600" aria-hidden="true" />}
            title="Lanzamiento"
            text="Publicación de la primera versión de la plataforma con foco en accesibilidad."
        />
        <TimelineItem
            icon={<GraduationCap className="h-5 w-5 text-sky-600" aria-hidden="true" />}
            title="Primer Curso"
            text="Publicación del curso ‘Fundamentos de Accesibilidad Web’."
        />
        <TimelineItem
            icon={<Award className="h-5 w-5 text-sky-600" aria-hidden="true" />}
            title="Reconocimientos"
            text="Menciones por promover la inclusión digital en comunidades educativas."
        />
        </ul>
    </section>
    </div>
</main>
);
}

/* ---------- UI helpers ---------- */

function ValuePill({ icon, label }: { icon: React.ReactNode; label: string }) {
return (
<div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm">
    <span className="text-slate-700">{icon}</span>
    <span className="font-medium text-slate-800">{label}</span>
</div>
);
}

function TimelineItem({
icon,
title,
text,
}: {
icon: React.ReactNode;
title: string;
text: string;
}) {
return (
<li className="flex items-start gap-3">
    <div className="mt-0.5">{icon}</div>
    <div>
    <p className="font-medium text-slate-900">{title}</p>
    <p className="text-sm text-slate-700">{text}</p>
    </div>
</li>
);
}
