import { useMemo, useState } from "react";
import {
PlusCircle,
Clock,
MessageSquare,
ThumbsUp,
ChevronLeft,
ChevronRight,
} from "lucide-react";

/* ----------------------- Tipos y datos mock ----------------------- */

type Tag = "Accessibility" | "Inclusive Education" | "Assistive Technology";
type Sort = "newest" | "popular" | "discussed";

type Post = {
id: string;
title: string;
excerpt: string;
author: string;
when: string;      // texto legible (e.g., "2 days ago")
timestamp: number; // para ordenar por fecha (Date.now())
tags: Tag[];
likes: number;
comments: number;
image?: string;    // opcional (ruta en /public/images/…)
};

const TAGS: Tag[] = ["Accessibility", "Inclusive Education", "Assistive Technology"];

const POSTS: Post[] = [
{
id: "p1",
title: "Strategies for Inclusive Classroom Management",
excerpt:
    "Explore effective techniques for inclusive classrooms, ensuring all students feel supported and engaged. Share your experiences and challenges.",
author: "Sarah Miller",
when: "2 days ago",
timestamp: Date.now() - 2 * 24 * 60 * 60 * 1000,
tags: ["Inclusive Education"],
likes: 42,
comments: 18,
image: `${import.meta.env.BASE_URL}images/community-post-1.jpg`,
},
{
id: "p2",
title: "Assistive Technology in Higher Education",
excerpt:
    "Discuss the latest assistive technologies and their impact on student success. What tools are you using, and what are the best practices?",
author: "David Chen",
when: "1 week ago",
timestamp: Date.now() - 7 * 24 * 60 * 60 * 1000,
tags: ["Assistive Technology", "Accessibility"],
likes: 67,
comments: 25,
image: `${import.meta.env.BASE_URL}images/community-post-2.jpg`,
},
{
id: "p3",
title: "Creating Accessible Online Courses",
excerpt:
    "Share tips and resources for designing online courses accessible to all learners. What are the key considerations and best practices?",
author: "Emily Rodríguez",
when: "3 weeks ago",
timestamp: Date.now() - 21 * 24 * 60 * 60 * 1000,
tags: ["Accessibility"],
likes: 23,
comments: 9,
image: `${import.meta.env.BASE_URL}images/community-post-3.jpg`,
},
{
id: "p4",
title: "Captioning & Transcripts: What’s your workflow?",
excerpt:
    "Herramientas, procesos y consejos para subtitulado y transcripciones efectivas en cursos y webinars.",
author: "Luis Gómez",
when: "3 days ago",
timestamp: Date.now() - 3 * 24 * 60 * 60 * 1000,
tags: ["Accessibility"],
likes: 35,
comments: 14,
},
];

/* ----------------------- Component ----------------------- */

export default function CommunityPage() {
const [activeTags, setActiveTags] = useState<Tag[]>([]);
const [sort, setSort] = useState<Sort>("newest");
const [page, setPage] = useState(1);
const pageSize = 3;

const filteredAndSorted = useMemo(() => {
let list = POSTS.slice();

// Filtro por tags (si hay alguno seleccionado, deben intersectar)
if (activeTags.length > 0) {
    list = list.filter((p) => p.tags.some((t) => activeTags.includes(t)));
}

// Orden
if (sort === "newest") list.sort((a, b) => b.timestamp - a.timestamp);
if (sort === "popular") list.sort((a, b) => b.likes - a.likes);
if (sort === "discussed") list.sort((a, b) => b.comments - a.comments);

return list;
}, [activeTags, sort]);

const pageCount = Math.max(1, Math.ceil(filteredAndSorted.length / pageSize));
const pageItems = filteredAndSorted.slice((page - 1) * pageSize, page * pageSize);

function toggleTag(tag: Tag) {
setPage(1);
setActiveTags((cur) =>
    cur.includes(tag) ? cur.filter((t) => t !== tag) : [...cur, tag]
);
}

return (
<main id="main" className="bg-[#f6f8fb] min-h-screen pb-16">
    <div className="container-tight px-4 pt-6">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Sidebar izquierda: filtros */}
        <aside className="lg:col-span-3">
        <h1 className="text-[22px] font-semibold text-slate-900 mb-4">Comunidad</h1>

        <section className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
            <h2 className="text-sm font-semibold text-slate-900">Filters</h2>
            <div className="mt-3 flex flex-wrap gap-2">
            {TAGS.map((t) => (
                <button
                key={t}
                type="button"
                onClick={() => toggleTag(t)}
                className={`rounded-full px-3 py-1 text-xs font-medium border ${
                    activeTags.includes(t)
                    ? "bg-sky-100 text-sky-700 border-sky-200"
                    : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200"
                }`}
                aria-pressed={activeTags.includes(t)}
                aria-label={`Filter by ${t}`}
                >
                {t}
                </button>
            ))}
            </div>

            <div className="mt-6">
            <h3 className="text-sm font-semibold text-slate-900">Sort By</h3>
            <div className="mt-2 space-y-2">
                <Radio
                name="sort"
                label="Newest"
                checked={sort === "newest"}
                onChange={() => {
                    setSort("newest");
                    setPage(1);
                }}
                />
                <Radio
                name="sort"
                label="Most Popular"
                checked={sort === "popular"}
                onChange={() => {
                    setSort("popular");
                    setPage(1);
                }}
                />
                <Radio
                name="sort"
                label="Most Discussed"
                checked={sort === "discussed"}
                onChange={() => {
                    setSort("discussed");
                    setPage(1);
                }}
                />
            </div>
            </div>
        </section>
        </aside>

        {/* Columna central: posts */}
        <section className="lg:col-span-6">
        <div className="flex items-center justify-between mb-3">
            <h2 className="text-xl font-semibold text-slate-900">Bienvenidos</h2>
            <button
            type="button"
            className="inline-flex items-center gap-2 rounded-md bg-violet-100 px-3 py-1.5 text-sm font-medium text-violet-800 hover:bg-violet-200 focus:outline-none focus:ring-4 focus:ring-violet-200"
            >
            <PlusCircle className="h-4 w-4" />
            Crear publicación
            </button>
        </div>

        <p className="text-slate-600 mb-4">
            Comparte ideas, haz preguntas y conecta con otras personas interesadas en
            accesibilidad e inclusión educativa.
        </p>

        <ul className="space-y-4" aria-label="Lista de publicaciones">
            {pageItems.map((p) => (
            <li key={p.id} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                <article className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                <div className="sm:col-span-8">
                    <p className="text-xs text-slate-500">
                    Publicado por <span className="font-medium">{p.author}</span> · {p.when}
                    </p>
                    <h3 className="mt-1 text-[15px] font-semibold text-slate-900">
                    {p.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-700">{p.excerpt}</p>

                    <div className="mt-3 flex items-center gap-4 text-xs text-slate-600">
                    <span className="inline-flex items-center gap-1">
                        <ThumbsUp className="h-4 w-4" /> {p.likes}
                    </span>
                    <span className="inline-flex items-center gap-1">
                        <MessageSquare className="h-4 w-4" /> {p.comments}
                    </span>
                    <span className="inline-flex items-center gap-1">
                        <Clock className="h-4 w-4" /> {p.when}
                    </span>
                    </div>
                </div>

                <div className="sm:col-span-4">
                    {p.image ? (
                    <img
                        src={p.image}
                        alt=""
                        className="h-28 w-full rounded-md object-cover"
                        loading="lazy"
                    />
                    ) : (
                    <div
                        aria-hidden="true"
                        className="h-28 w-full rounded-md bg-gradient-to-br from-slate-100 to-slate-200"
                    />
                    )}
                </div>
                </article>
            </li>
            ))}
        </ul>

        {/* Paginación */}
        <nav className="mt-4 flex items-center justify-center gap-2" aria-label="Paginación">
            <button
            type="button"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="rounded-md border border-slate-300 p-1 disabled:opacity-50"
            aria-label="Página anterior"
            >
            <ChevronLeft className="h-4 w-4" />
            </button>

            {Array.from({ length: pageCount }).slice(0, 5).map((_, i) => {
            const n = i + 1;
            const isActive = n === page;
            return (
                <button
                key={n}
                onClick={() => setPage(n)}
                aria-current={isActive ? "page" : undefined}
                className={`h-8 w-8 rounded-md text-sm ${
                    isActive
                    ? "bg-slate-900 text-white"
                    : "border border-slate-300 hover:bg-slate-100"
                }`}
                >
                {n}
                </button>
            );
            })}

            <button
            type="button"
            onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
            disabled={page === pageCount}
            className="rounded-md border border-slate-300 p-1 disabled:opacity-50"
            aria-label="Página siguiente"
            >
            <ChevronRight className="h-4 w-4" />
            </button>
        </nav>
        </section>

        {/* Sidebar derecha */}
        <aside className="lg:col-span-3 space-y-4">
        {/* Top Contributors */}
        <section className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
            <h2 className="text-sm font-semibold text-slate-900">Top Contributors</h2>
            <ul className="mt-3 space-y-3">
            {[
                { name: "Mark Johnson", posts: 150 },
                { name: "Olivia Brown", posts: 120 },
                { name: "Ethan Clark", posts: 100 },
            ].map((u) => (
                <li key={u.name} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Avatar name={u.name} />
                    <div className="min-w-0">
                    <p className="text-sm font-medium text-slate-900 truncate">{u.name}</p>
                    <p className="text-xs text-slate-500">{u.posts} posts</p>
                    </div>
                </div>
                </li>
            ))}
            </ul>
        </section>

        {/* Suggested People */}
        <section className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
            <h2 className="text-sm font-semibold text-slate-900">Suggested People</h2>
            <ul className="mt-3 space-y-3">
            {["Sophia Green", "Liam Carter", "Ava Turner"].map((n) => (
                <li key={n} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Avatar name={n} />
                    <p className="text-sm text-slate-900">{n}</p>
                </div>
                <button className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-800 hover:bg-emerald-200">
                    Follow
                </button>
                </li>
            ))}
            </ul>
        </section>

        {/* Trending Discussions */}
        <section className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
            <h2 className="text-sm font-semibold text-slate-900">Trending Discussions</h2>
            <ul className="mt-3 space-y-2">
            {[
                { t: "Inclusive Assessment Strategies", c: 25 },
                { t: "Accessibility in Remote Learning", c: 18 },
                { t: "Supporting Students with ADHD", c: 12 },
            ].map((it) => (
                <li key={it.t} className="flex items-center justify-between text-sm">
                <span className="text-slate-700">{it.t}</span>
                <span className="text-slate-500">{it.c}</span>
                </li>
            ))}
            </ul>
        </section>
        </aside>
    </div>
    </div>
</main>
);
}

/* ----------------------- UI helpers ----------------------- */

function Radio({
name,
label,
checked,
onChange,
}: {
name: string;
label: string;
checked: boolean;
onChange: () => void;
}) {
return (
<label className="flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2 text-sm hover:bg-slate-50">
    <input
    type="radio"
    name={name}
    checked={checked}
    onChange={onChange}
    className="h-4 w-4 accent-sky-600"
    aria-checked={checked}
    />
    <span className="text-slate-700">{label}</span>
</label>
);
}

function Avatar({ name }: { name: string }) {
const initials = name
.split(" ")
.map((s) => s[0])
.join("")
.slice(0, 2)
.toUpperCase();
return (
<div
    className="grid h-8 w-8 place-items-center rounded-full bg-sky-100 text-sky-700 text-sm font-semibold"
    aria-hidden="true"
    title={name}
>
    {initials}
</div>
);
}
