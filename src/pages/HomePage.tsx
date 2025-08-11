import React from 'react';
import { ChevronRight, BookOpen, Users, Award, BarChart, DotIcon, PersonStanding, CaptionsIcon, Captions, Clock1, Cctv, CaptionsOff, SheetIcon, File } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const HomePage: React.FC = () => {
  return (
    <main id="main" className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-elementos-5 dark:to-elementos-5 text-black">
        <div className="container-tight py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-2xl md:text-4xl font-bold leading-tight">
                Aprende sin límites <div className="subh1 dark:text-white">Accesible para todos</div>
              </h1>
              <p className="text-l text-primary-800 dark:text-white">
                Experimente un aprendizaje inclusivo con nuestra plataforma completamente accesible diseñada para aprendices de todas las habilidades.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/about" className="btn-primary btn-lg dark:bg-gray-100 dark:hover:bg-gray-200 dark:text-primary-900">
                  Aprender
                </Link>
                <Link to="/courses" className="btn-outline bg-transparent text-blue-800 border-blue-800 hover:bg-white hover:text-primary-600 btn-lg">
                  Cursos
                </Link>
              </div>
            </div>
            
              <img 
                src={`${import.meta.env.BASE_URL}images/estudiantes.jpg`}
                alt="Students learning together" 
                className="shadow-2xl max-w-full h-auto"
                loading="lazy"
                width="600"
                height="400"
              />
            
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-simple-50 dark:bg-gray-900">
        <div className="container-tight">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Cursos Destacados</h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Descubre nuestras experiencias de aprendizaje accesibles más populares
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="transition-all duration-300 hover:shadow-lg">
              <div className="flex flex-col items-left text-left p-2">
                <div className='items-left flex md:inline-flex'>
                  <div className="w-6 h-6 bg-blue-600 dark:bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <PersonStanding className="h-4 w-4 text-primary-50 dark:text-primary-900" />
                  </div>
                  <div className='text-xs text-elementos-10 bg-elementos-1 rounded-lg w-max px-3 py-1 size-fit mx-3'>Totalmente Accesible</div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-left">Fundamentos de Accesibilidad</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Aprenda los conceptos básicos para crear experiencias web inclusivas para todos los usuarios.
                </p>
                <div className='flex items-center text-xs my-2 text-primary-600 dark:text-gray-300'>12 módulos <DotIcon className="h-3 w-3" /> 8 horas</div>
                <div className='ml-auto '><a className='dark:text-gray-300'>Inscríbete</a></div>
              </div>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-lg">
              <div className="flex flex-col items-left text-left p-2">
                <div className='items-left flex md:inline-flex'>
                  <div className="w-6 h-6 bg-blue-600 dark:bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <Captions className="h-4 w-4 text-primary-50 dark:text-primary-900" />
                  </div>
                  
                  <div className='text-xs text-elementos-20 bg-elementos-2 rounded-lg w-max px-3 py-1 size-fit mx-3'>Subtítulos disponibles
</div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-left">Marketing Digital</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Domina las estrategias de marketing digital con contenido de vídeo integral.                </p>
                <div className='flex items-center text-xs my-2 text-primary-600  dark:text-gray-300'>15 módulos <DotIcon className="h-3 w-3" /> 10 horas</div>
                <div className='ml-auto'><a className='dark:text-gray-300'>Inscríbete</a></div>
              </div>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-lg">
              <div className="flex flex-col items-left text-left p-2">
                <div className='items-left flex md:inline-flex'>
                  <div className="w-6 h-6 bg-blue-600 dark:bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <File className="h-4 w-4 text-primary-50 dark:text-primary-900" />
                  </div>
                  <div className='text-xs text-elementos-30 bg-elementos-3 rounded-lg w-max px-3 py-1 size-fit mx-3'>Transcripciones incluidas</div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-left">Administración de Proyectos</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Desarrolle habilidades esenciales de gestión de proyectos con ejercicios prácticos.
                </p>
                <div className='flex items-center text-xs my-2 text-primary-600  dark:text-gray-300'>20 módulos <DotIcon className="h-3 w-3" /> 15 horas</div>
                <div className='ml-auto'><a className='dark:text-gray-300'>Inscríbete</a></div>
              </div>
            </Card>

            
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container-tight">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Lo que dicen nuestros usuarios</h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Experiencias reales de nuestra diversa comunidad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            <Card className="transition-all duration-300 hover:shadow-lg">
              <div className="flex flex-col items-left text-left p-2">
                <div className='items-left flex md:inline-flex mb-3'>
                  

<div
  className="h-10 w-10 rounded-full bg-center bg-cover mt-1"
  style={{ backgroundImage: "url('/images/testimonio1.png" }} 
/>


                  <div className='text-sm  w-max px-3 py-1 size-fit mx-3 font-bold dark:text-gray-300'>Sarah Chen
                    <span className='block text-xs w-max py-1 size-fit font-normal'>UX Designer</span>
                  </div>
                  
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Las funciones de accesibilidad hicieron que el aprendizaje fuera mucho más fácil. Los subtítulos y las transcripciones me ayudaron a seguir el ritmo perfectamente.
                </p>
                
              </div>
            </Card>

           <Card className="transition-all duration-300 hover:shadow-lg">
              <div className="flex flex-col items-left text-left p-2">
                <div className='items-left flex md:inline-flex mb-3'>
                  

<div
  className="h-10 w-10 rounded-full bg-center bg-cover mt-1"
  style={{ backgroundImage: "url('/images/testimonio2.png" }}
/>


                  <div className='text-sm  w-max px-3 py-1 size-fit mx-3 font-bold dark:text-gray-300'>Marcus Johnson
                    <span className='block text-xs w-max py-1 size-fit font-normal'>Developer</span>
                  </div>
                  
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  ¡Finalmente, una plataforma que funciona con mi lector de pantalla! La navegación es intuitiva y el contenido está bien estructurado.
                </p>
                
              </div>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-lg">
              <div className="flex flex-col items-left text-left p-2">
                <div className='items-left flex md:inline-flex mb-3'>
                  

<div
  className="h-10 w-10 rounded-full bg-center bg-cover mt-1"
  style={{ backgroundImage: "url('/images/testimonio3.png" }}
/>


                  <div className='text-sm  w-max px-3 py-1 size-fit mx-3 font-bold dark:text-gray-300'>Elena Rodriguez
                    <span className='block text-xs w-max py-1 size-fit font-normal'>Marketing Manager</span>
                  </div>
                  
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  La función de contenido descargable es increíble. Puedo aprender sin conexión y repasar los materiales cuando lo necesito.
                </p>
                
              </div>
            </Card>

            
          </div>
        </div>
      </section>

      
    </main>
  );
};

export default HomePage;