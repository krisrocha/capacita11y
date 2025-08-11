import { useEffect, useState } from 'react';

interface Curso {
id: number;
titulo: string;
descripcion: string;
duracion: string;
nivel: string;
imagen: string;
categoria: string;
}

const Courses = () => {
const [cursos, setCursos] = useState<Curso[]>([]);
const [busqueda, setBusqueda] = useState('');
const [categoriasSeleccionadas, setCategoriasSeleccionadas] = useState<string[]>([]);

useEffect(() => {
fetch(`${import.meta.env.BASE_URL}data/cursos.json`)
    .then((response) => response.json())
    .then((data) => setCursos(data))
    .catch((error) => console.error('Error al cargar los cursos:', error));
}, []);

const handleCheckboxChange = (categoria: string) => {
setCategoriasSeleccionadas((prev) =>
    prev.includes(categoria)
    ? prev.filter((c) => c !== categoria)
    : [...prev, categoria]
);
};

const cursosFiltrados = cursos.filter((curso) => {
const coincideBusqueda = curso.titulo.toLowerCase().includes(busqueda.toLowerCase());
const coincideCategoria =
    categoriasSeleccionadas.length === 0 ||
    categoriasSeleccionadas.includes(curso.categoria);
return coincideBusqueda && coincideCategoria;
});

return (
<div className="flex flex-col md:flex-row p-6 gap-6">
    {/* Sidebar de Categorías */}
    <aside className="w-full md:w-1/4">
    <h2 className="text-xl font-semibold mb-4">Categorías</h2>
    <ul className="space-y-2 dark:text-white">
        {['Accesibilidad', 'Educación', 'Necesidades Especiales', 'Tecnología', 'Artes y Humanidades'].map((categoria) => (
        <li key={categoria}>
            <label className="inline-flex items-center">
            <input
                type="checkbox"
                checked={categoriasSeleccionadas.includes(categoria)}
                onChange={() => handleCheckboxChange(categoria)}
                className="form-checkbox"
            />
            <span className="ml-2">{categoria}</span>
            </label>
        </li>
        ))}
    </ul>
    </aside>

    {/* Contenido principal */}
    <main className="w-full md:w-3/4" id="main">
    <div className="mb-6">
        <label htmlFor="busqueda" className="mb-1 block text-sm text-slate-700 dark:text-white">
                Buscar cursos
            </label>
        <input
        id="busqueda"
        type="text"
        placeholder="Buscar cursos"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="w-full p-3 border rounded-md"
        />
    </div>
    <h1 className="text-2xl font-bold mb-6">Cursos Destacados</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cursosFiltrados.map((curso) => (
        <div key={curso.id} className="border rounded-lg overflow-hidden shadow">
            <img
            src={`${import.meta.env.BASE_URL}images/${curso.imagen}`}
            alt=""
            className="w-full h-48 object-cover"
            />
            <div className="p-4">
            <h2 className="font-semibold text-lg mb-2">{curso.titulo}</h2>
            <p className="text-sm text-gray-600 mb-2">{curso.descripcion}</p>
            <p className="text-sm text-gray-500">
                Duración: {curso.duracion} | Nivel: {curso.nivel}
            </p>
            </div>
        </div>
        ))}
    </div>
    </main>
</div>
);
};

export default Courses;