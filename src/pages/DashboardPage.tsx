import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
GraduationCap,
Clock3,
Award,
Play,
CheckCircle2,
PlayCircle,
BadgeCheck,
ChevronRight,
} from "lucide-react";

type Course = {
id: string;
title: string;
subtitle: string;
status?: "in-progress" | "new";
progress: number; // 0–100
};

type Activity = {
id: string;
icon: "done" | "started" | "cert";
text: string;
when: string;
};

export default function DashboardPage() {
const { user } = useAuth();

// Mock data (cámbialo por tu API cuando gustes)
const stats = [
{ id: "completed", label: "Courses Completed", value: "12", sub:"+2 this month", icon: <GraduationCap className="h-4 w-4" aria-hidden="true" /> },
{ id: "hours",     label: "Hours Learned",     value: "84", sub:"+12 this week", icon: <Clock3 className="h-4 w-4" aria-hidden="true" /> },
{ id: "certs",     label: "Certificates",      value: "8",  sub:"+1 this month", icon: <Award className="h-4 w-4" aria-hidden="true" /> },
];

const courses: Course[] = [
{
    id: "a11y",
    title: "Web Accessibility Fundamentals",
    subtitle: "Chapter 3: ARIA Labels and Roles",
    status: "in-progress",
    progress: 68,
},
{
    id: "ux",
    title: "UX Design for Everyone",
    subtitle: "Module 2: User Research Methods",
    status: "new",
    progress: 25,
},
];

const activity: Activity[] = [
{ id: "1", icon: "done",    text: `Completed "Color Contrast Guidelines"`, when: "2 hours ago" },
{ id: "2", icon: "started", text: `Started "ARIA Labels and Roles"`,       when: "Yesterday" },
{ id: "3", icon: "cert",    text: `Earned "Accessibility Basics" certificate`, when: "3 days ago" },
];

const displayName =
user?.email ? user.email.split("@")[0].replace(/^\w/, c => c.toUpperCase()) : "Sarah";

return (
<main id="main" className="bg-[#f6f8fb] min-h-screen pb-16">
    <div className="container-tight px-4 pt-8">
    {/* Encabezado */}
    <h1 className="text-[22px] font-semibold text-slate-900">
        Welcome back, {displayName}!
    </h1>
    <p className="mt-1 text-slate-600">Continue your learning journey</p>

    {/* Métricas */}
    <section className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {stats.map(s => (
        <div
            key={s.id}
            className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
            role="group"
            aria-label={s.label}
        >
            <div className="flex items-start justify-between">
            <p className="text-sm text-slate-600">{s.label}</p>
            <span className="text-slate-400">{s.icon}</span>
            </div>
            <div className="mt-2 text-2xl font-semibold text-slate-900">{s.value}</div>
            <div className="mt-1 text-xs text-slate-500">{s.sub}</div>
        </div>
        ))}
    </section>

    <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Continue Learning */}
        <section aria-labelledby="continue-heading" className="lg:col-span-2">
        <div className="mb-2 flex items-center justify-between">
            <h2 id="continue-heading" className="text-base font-semibold text-slate-900">
            Continue Learning
            </h2>
            <Link
            to="/mis-cursos"
            className="inline-flex items-center gap-1 text-sm font-medium text-sky-700 hover:underline"
            >
            View all <ChevronRight className="h-4 w-4" />
            </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {courses.map((c) => (
            <article
                key={c.id}
                className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
            >
                <div className="flex items-start justify-between gap-3">
                <div>
                    <h3 className="text-sm font-semibold text-slate-900">{c.title}</h3>
                    <p className="text-sm text-slate-600">{c.subtitle}</p>
                </div>

                {c.status && (
                    <span
                    className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium ${
                        c.status === "in-progress"
                        ? "bg-sky-100 text-sky-700"
                        : "bg-emerald-100 text-emerald-700"
                    }`}
                    aria-label={c.status === "in-progress" ? "In Progress" : "New"}
                    >
                    {c.status === "in-progress" ? "In Progress" : "New"}
                    </span>
                )}
                </div>

                <div className="mt-3">
                <div className="flex items-center justify-between text-xs text-slate-600">
                    <span>Progress</span>
                    <span aria-live="polite">{c.progress}%</span>
                </div>
                <Progress value={c.progress} />
                </div>

                <Link
                to="/cursos"
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-md bg-sky-700 px-3 py-2 text-sm font-medium text-white hover:bg-sky-800 focus:outline-none focus:ring-4 focus:ring-sky-300"
                aria-label={`Continue learning ${c.title}`}
                >
                <Play className="h-4 w-4" /> Continue Learning
                </Link>
            </article>
            ))}
        </div>
        </section>

        {/* Recent Activity */}
        <section aria-labelledby="activity-heading" className="lg:col-span-2">
        <h2 id="activity-heading" className="mb-2 text-base font-semibold text-slate-900">
            Recent Activity
        </h2>
        <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
            <ol className="space-y-4">
            {activity.map((a) => (
                <li key={a.id} className="flex items-start gap-3">
                <StatusIcon type={a.icon} />
                <div className="min-w-0">
                    <p className="text-sm text-slate-800">{a.text}</p>
                    <p className="text-xs text-slate-500">{a.when}</p>
                </div>
                </li>
            ))}
            </ol>
        </div>
        </section>
    </div>
    </div>
</main>
);
}

/* ---------- UI helpers ---------- */

function Progress({ value }: { value: number }) {
const v = Math.max(0, Math.min(100, value));
return (
<div
    className="mt-1.5 h-2 w-full rounded-full bg-slate-200"
    role="progressbar"
    aria-valuenow={v}
    aria-valuemin={0}
    aria-valuemax={100}
    aria-label="Course progress"
>
    <div className="h-full rounded-full bg-sky-600" style={{ width: `${v}%` }} />
</div>
);
}

function StatusIcon({ type }: { type: "done" | "started" | "cert" }) {
if (type === "done")   return <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-500" aria-hidden="true" />;
if (type === "started")return <PlayCircle   className="mt-0.5 h-5 w-5 text-sky-500" aria-hidden="true" />;
return <BadgeCheck     className="mt-0.5 h-5 w-5 text-violet-500" aria-hidden="true" />;
}
