import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { MoreHorizontal, Search } from "lucide-react";

type Status = "current" | "completed";

type Course = {
id: string;
title: string;
subtitle: string;
category: string;
status: Status;
progress: number; // 0–100
certificateUrl?: string;
};

const DATA: Course[] = [
{
id: "a11y-fund",
title: "Web Accessibility Fundamentals",
subtitle: "Learn the basics of making websites accessible to all users",
category: "Accessibility",
status: "current",
progress: 65,
},
{
id: "aria-sr",
title: "ARIA and Screen Readers",
subtitle: "Master ARIA attributes for better screen reader support",
category: "Accessibility",
status: "completed",
progress: 100,
certificateUrl: "#",
},
{
id: "inclusive-design",
title: "Inclusive Design Principles",
subtitle: "Design with accessibility in mind from the start",
category: "UX",
status: "current",
progress: 25,
},
];

/** Capítulo al que debe entrar cada curso al hacer “Continue Course” */
const FIRST_CHAPTER: Record<string, string> = {
"a11y-fund": "color-contrast",
"inclusive-design": "introduction",
// "aria-sr": "introduction" // (este está completed en el mock)
};

export default function MyCoursesPage() {
const [statusFilter, setStatusFilter] = useState<"all" | Status>("all");
const [categoryFilter, setCategoryFilter] = useState<string>("all");
const [query, setQuery] = useState("");

const categories = useMemo(() => {
const set = new Set(DATA.map((c) => c.category));
return ["all", ...Array.from(set)];
}, []);

const filtered = DATA.filter((c) => {
const byStatus = statusFilter === "all" ? true : c.status === statusFilter;
const byCategory = categoryFilter === "all" ? true : c.category === categoryFilter;
const byQuery =
    !query.trim() ||
    c.title.toLowerCase().includes(query.toLowerCase()) ||
    c.subtitle.toLowerCase().includes(query.toLowerCase());
return byStatus && byCategory && byQuery;
});

return (
<main id="main" className="bg-[#f6f8fb] min-h-screen pb-16">
    <div className="container-tight px-4 pt-6">
    <h1 className="text-[22px] font-semibold text-slate-900">My Courses</h1>
    <p className="mt-1 text-slate-600">
        Track your learning progress and continue your education journey
    </p>

    {/* Filtros */}
    <section className="mt-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
        <h2 className="sr-only">Filter Courses</h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {/* Status */}
        <label className="text-sm text-slate-700">
            Status
            <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as any)}
            className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none focus:ring-2 focus:ring-sky-600"
            >
            <option value="all">All Courses</option>
            <option value="current">Current</option>
            <option value="completed">Completed</option>
            </select>
        </label>

        {/* Category */}
        <label className="text-sm text-slate-700">
            Category
            <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none focus:ring-2 focus:ring-sky-600"
            >
            {categories.map((cat) => (
                <option key={cat} value={cat}>
                {cat === "all" ? "All Categories" : cat}
                </option>
            ))}
            </select>
        </label>

        {/* Search */}
        <div className="relative">
            <label htmlFor="course-search" className="text-sm text-slate-700">
            Search
            </label>
            <div className="mt-1 relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
                id="course-search"
                type="search"
                placeholder="Search courses..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full rounded-md border border-slate-300 bg-white pl-9 pr-3 py-2 text-slate-900 outline-none focus:ring-2 focus:ring-sky-600"
            />
            </div>
        </div>
        </div>
    </section>

    {/* Cards */}
    <section className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
        {filtered.map((c) => {
        const chapter = FIRST_CHAPTER[c.id] ?? "introduction";
        return (
            <article
            key={c.id}
            className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
            aria-labelledby={`course-${c.id}`}
            >
            <div className="flex items-start justify-between gap-3">
                {/* Badge status */}
                <span
                className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium ${
                    c.status === "current"
                    ? "bg-sky-100 text-sky-700"
                    : "bg-emerald-100 text-emerald-700"
                }`}
                aria-label={c.status === "current" ? "Current" : "Completed"}
                >
                {c.status === "current" ? "Current" : "Completed"}
                </span>

                <button
                type="button"
                className="rounded p-1 text-slate-500 hover:bg-slate-100"
                aria-label="More options"
                >
                <MoreHorizontal className="h-4 w-4" />
                </button>
            </div>

            <h3 id={`course-${c.id}`} className="mt-2 text-sm font-semibold text-slate-900">
                {c.title}
            </h3>
            <p className="mt-1 text-sm text-slate-600">{c.subtitle}</p>

            {/* Progress */}
            <div className="mt-3">
                <div className="flex items-center justify-between text-xs text-slate-600">
                <span>Progress</span>
                <span>{c.progress}%</span>
                </div>
                <Progress value={c.progress} color={c.status === "completed" ? "green" : "blue"} />
            </div>

            {/* CTA */}
            {c.status === "completed" ? (
                <Link
                to={c.certificateUrl || "#"}
                className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-800 hover:bg-emerald-100"
                >
                View Certificate
                </Link>
            ) : (
                <Link
                to={`/mis-cursos/${c.id}/${chapter}`}
                className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-sky-700 px-3 py-2 text-sm font-medium text-white hover:bg-sky-800 focus:outline-none focus:ring-4 focus:ring-sky-300"
                >
                Continue Course
                </Link>
            )}
            </article>
        );
        })}
    </section>
    </div>
</main>
);
}

/* ---------- UI helper ---------- */
function Progress({ value, color }: { value: number; color: "blue" | "green" }) {
const v = Math.max(0, Math.min(100, value));
const bar = color === "green" ? "bg-emerald-600" : "bg-sky-600";
return (
<div
    className="mt-1.5 h-2 w-full rounded-full bg-slate-200"
    role="progressbar"
    aria-valuenow={v}
    aria-valuemin={0}
    aria-valuemax={100}
    aria-label="Course progress"
>
    <div className={`h-full rounded-full ${bar}`} style={{ width: `${v}%` }} />
</div>
);
}
