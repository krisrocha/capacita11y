import { useEffect, useMemo } from "react";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import {
ChevronRight,
ChevronLeft,
Play,
Volume2,
MessageSquare as Captions, // usamos MessageSquare como "Captions"
} from "lucide-react";

/* ======= Mock de cursos/chapters (ajústalo a tu data real luego) ======= */
type Chapter = { id: string; title: string };

const COURSES = {
"a11y-fund": {
title: "Web Accessibility Fundamentals",
chapters: [
    { id: "introduction",   title: "Introduction" },
    { id: "color-contrast", title: "Color and Contrast" },
    { id: "keyboard",       title: "Keyboard Navigation" },
] as Chapter[],
},
"inclusive-design": {
title: "Inclusive Design Principles",
chapters: [{ id: "introduction", title: "Introduction" }] as Chapter[],
},
} as const;

type CourseId = keyof typeof COURSES;

export default function CourseLessonPage() {
// params: strings | undefined
const params = useParams<{ courseId: string; chapterId: string }>();
const courseId = params.courseId as CourseId | undefined;
const chapterId = params.chapterId;
const navigate = useNavigate();

// curso y capítulos
const course = courseId ? COURSES[courseId] : undefined;
const chapters: Chapter[] = course?.chapters ?? [];

// índice del capítulo actual
const rawIndex = useMemo(
() => chapters.findIndex((c) => c.id === chapterId),
[chapters, chapterId]
);
const currentIndex = rawIndex === -1 ? 0 : rawIndex;

// si no hay chapterId o no coincide, redirige al primero
useEffect(() => {
if (!course) return;
const first = chapters[0]?.id; // puede ser undefined si no hay capítulos
const needsRedirect = chapterId == null || rawIndex === -1;

if (needsRedirect && first) {
    navigate(`/mis-cursos/${params.courseId}/${first}`, { replace: true });
}
}, [course, chapterId, rawIndex, chapters, navigate, params.courseId]);

if (!course) {
return (
    <main className="container-tight px-4 py-10">
    <p className="text-slate-700">Curso no encontrado.</p>
    <Link to="/mis-cursos" className="text-sky-700 underline">
        Volver a Mis cursos
    </Link>
    </main>
);
}

const current = chapters[currentIndex];
const prev = chapters[currentIndex - 1];
const next = chapters[currentIndex + 1];

return (
<main id="main" className="bg-[#f6f8fb] min-h-screen pb-12">
    <div className="container-tight px-4 pt-6">
    {/* Breadcrumb */}
    <nav aria-label="Breadcrumb" className="mb-4 text-sm text-slate-600">
        <ol className="flex flex-wrap items-center gap-1">
        <li>
            <Link to="/mis-cursos" className="hover:underline">
            My Courses
            </Link>
        </li>
        <li aria-hidden="true" className="px-1">
            ›
        </li>
        <li>
            <span className="truncate">{course.title}</span>
        </li>
        <li aria-hidden="true" className="px-1">
            ›
        </li>
        <li aria-current="page" className="font-medium text-slate-900">
            {current.title}
        </li>
        </ol>
    </nav>

    <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Sidebar capítulos */}
        <aside className="lg:col-span-3">
        <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
            <h2 className="mb-2 text-sm font-semibold text-slate-900">
            Course Chapters
            </h2>
            <ul className="space-y-1">
            {chapters.map((ch, idx) => {
                const isCurrent = ch.id === current.id;
                return (
                <li key={ch.id}>
                    <NavLink
                    to={`/mis-cursos/${params.courseId}/${ch.id}`}
                    className={({ isActive }) =>
                        `flex items-center gap-2 rounded-md px-3 py-2 text-sm ${
                        isActive
                            ? "bg-sky-700 text-white"
                            : "hover:bg-slate-100 text-slate-700"
                        }`
                    }
                    aria-current={isCurrent ? "page" : undefined}
                    >
                    {/* Indicador de estado (mock) */}
                    <span
                        className={`inline-block h-2.5 w-2.5 rounded-full ${
                        idx < currentIndex
                            ? "bg-emerald-500"
                            : idx === currentIndex
                            ? "bg-sky-500"
                            : "bg-slate-300"
                        }`}
                        aria-hidden="true"
                    />
                    <span className="truncate">{ch.title}</span>
                    </NavLink>
                </li>
                );
            })}
            </ul>
        </div>
        </aside>

        {/* Contenido principal */}
        <section className="lg:col-span-9">
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <h1 className="text-lg font-semibold text-slate-900">
            {current.title}
            </h1>

            {/* Player (placeholder accesible) */}
            <figure className="mt-3 rounded-lg border border-slate-200 bg-slate-900 p-3">
            <div className="grid h-64 place-items-center rounded-md bg-slate-800">
                <Play className="h-10 w-10 text-slate-200" aria-hidden="true" />
                <span className="sr-only">Video player</span>
            </div>
            <figcaption className="mt-2 flex items-center justify-between text-xs text-slate-300">
                <span className="inline-flex items-center gap-1">
                <Captions className="h-4 w-4" /> Captions
                </span>
                <span className="inline-flex items-center gap-1">
                <Volume2 className="h-4 w-4" /> Audio Description
                </span>
            </figcaption>
            </figure>

            {/* Texto de la lección (demo) */}
            <article className="prose prose-slate mt-4 max-w-none">
            {current.id === "color-contrast" ? (
                <>
                <p>
                    El contraste de color es clave para la accesibilidad web. Un
                    buen contraste garantiza que el texto y los elementos
                    visuales sean legibles para usuarios con diferentes
                    habilidades visuales.
                </p>
                <h2>WCAG Guidelines</h2>
                <p>
                    Las WCAG especifican ratios mínimos de contraste para
                    distintos tipos de contenido. Para texto normal, el mínimo
                    recomendado es 4.5:1.
                </p>
                </>
            ) : current.id === "introduction" ? (
                <p>
                Bienvenido al curso de Fundamentos de Accesibilidad Web. En
                este módulo verás conceptos base como perceivable, operable,
                understandable y robust.
                </p>
            ) : (
                <p>
                La navegación por teclado permite interactuar sin mouse.
                Gestiona el foco, el orden lógico y la visibilidad del
                indicador.
                </p>
            )}
            </article>

            {/* Prev / Next */}
            <div className="mt-6 flex items-center justify-between">
            <Link
                to={prev ? `/mis-cursos/${params.courseId}/${prev.id}` : "#"}
                onClick={(e) => {
                if (!prev) e.preventDefault();
                }}
                className={`inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm ${
                prev
                    ? "border-slate-300 hover:bg-slate-50"
                    : "border-slate-200 text-slate-400 cursor-not-allowed"
                }`}
                aria-disabled={!prev}
            >
                <ChevronLeft className="h-4 w-4" /> Previous
            </Link>

            <Link
                to={next ? `/mis-cursos/${params.courseId}/${next.id}` : "#"}
                onClick={(e) => {
                if (!next) e.preventDefault();
                }}
                className={`inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm text-white ${
                next ? "bg-sky-700 hover:bg-sky-800" : "bg-slate-400 cursor-not-allowed"
                }`}
                aria-disabled={!next}
            >
                Next <ChevronRight className="h-4 w-4" />
            </Link>
            </div>
        </div>
        </section>
    </div>
    </div>
</main>
);
}
