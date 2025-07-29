import React from 'react';
import { ChevronRight, BookOpen, Users, Award, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const HomePage: React.FC = () => {
  return (
    <main id="main" className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 dark:from-primary-700 dark:to-primary-900 text-white">
        <div className="container-tight py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Education Accessible to Everyone
              </h1>
              <p className="text-xl text-primary-100 dark:text-primary-200">
                An inclusive learning platform designed to meet the unique needs of students with disabilities, providing equal opportunities for educational growth.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/courses" className="btn-primary btn-lg">
                  Explore Courses
                </Link>
                <Link to="/about" className="btn-outline bg-transparent text-white border-white hover:bg-white hover:text-primary-600 btn-lg">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Students learning together" 
                className="rounded-lg shadow-xl max-w-full h-auto"
                loading="lazy"
                width="600"
                height="400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container-tight">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">How We Support Your Learning Journey</h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our platform provides comprehensive support for diverse learning needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="transition-all duration-300 hover:shadow-lg">
              <div className="flex flex-col items-center text-center p-2">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Adaptive Content</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Learning materials that adapt to your preferred format and pace, whether text, audio, or visual.
                </p>
              </div>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-lg">
              <div className="flex flex-col items-center text-center p-2">
                <div className="w-16 h-16 bg-secondary-100 dark:bg-secondary-900 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-secondary-600 dark:text-secondary-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Inclusive Community</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Connect with peers and instructors in a supportive environment built on respect and understanding.
                </p>
              </div>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-lg">
              <div className="flex flex-col items-center text-center p-2">
                <div className="w-16 h-16 bg-accent-100 dark:bg-accent-900 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-accent-600 dark:text-accent-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Personalized Paths</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Learning journeys designed around your individual strengths, preferences, and goals.
                </p>
              </div>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-lg">
              <div className="flex flex-col items-center text-center p-2">
                <div className="w-16 h-16 bg-success-100 dark:bg-success-900 rounded-full flex items-center justify-center mb-4">
                  <BarChart className="h-8 w-8 text-success-600 dark:text-success-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Progress Tracking</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Monitor your achievements and growth with accessible, easy-to-understand visualizations.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Course Preview Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container-tight">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Featured Courses</h2>
              <p className="mt-2 text-xl text-gray-600 dark:text-gray-300">
                Explore our most popular inclusive learning experiences
              </p>
            </div>
            <Link to="/courses" className="mt-4 md:mt-0 inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300">
              View all courses <ChevronRight className="ml-1 h-5 w-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Course Card 1 */}
            <Card className="transition-all duration-300 hover:shadow-lg">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Introduction to Digital Literacy"
                  className="w-full h-48 object-cover rounded-t-lg"
                  loading="lazy"
                />
                <span className="absolute top-2 right-2 bg-primary-600 text-white text-xs font-semibold px-2 py-1 rounded">
                  Beginner
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold">Introduction to Digital Literacy</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Master essential computer skills with accessible, step-by-step guidance.
                </p>
                <div className="mt-4 flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <span>8 modules</span>
                  <span className="mx-2">•</span>
                  <span>4 weeks</span>
                </div>
                <Button variant="primary" fullWidth className="mt-4">
                  View Course
                </Button>
              </div>
            </Card>

            {/* Course Card 2 */}
            <Card className="transition-all duration-300 hover:shadow-lg">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Creative Expression through Art"
                  className="w-full h-48 object-cover rounded-t-lg"
                  loading="lazy"
                />
                <span className="absolute top-2 right-2 bg-secondary-600 text-white text-xs font-semibold px-2 py-1 rounded">
                  All Levels
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold">Creative Expression through Art</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Explore various artistic mediums adapted for different abilities and preferences.
                </p>
                <div className="mt-4 flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <span>6 modules</span>
                  <span className="mx-2">•</span>
                  <span>8 weeks</span>
                </div>
                <Button variant="primary" fullWidth className="mt-4">
                  View Course
                </Button>
              </div>
            </Card>

            {/* Course Card 3 */}
            <Card className="transition-all duration-300 hover:shadow-lg">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Professional Communication Skills"
                  className="w-full h-48 object-cover rounded-t-lg"
                  loading="lazy"
                />
                <span className="absolute top-2 right-2 bg-accent-600 text-white text-xs font-semibold px-2 py-1 rounded">
                  Intermediate
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold">Professional Communication Skills</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Develop workplace communication strategies with multiple expression options.
                </p>
                <div className="mt-4 flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <span>10 modules</span>
                  <span className="mx-2">•</span>
                  <span>12 weeks</span>
                </div>
                <Button variant="primary" fullWidth className="mt-4">
                  View Course
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-primary-50 dark:bg-primary-900/20">
        <div className="container-tight">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Success Stories</h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Hear from students who have transformed their learning experience with our platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <div className="p-2">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="h-5 w-5 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  "The adaptive content options allowed me to switch between reading and listening depending on my energy levels. This flexibility made all the difference in my learning journey."
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-primary-100 dark:bg-primary-800 flex items-center justify-center">
                    <span className="text-primary-600 dark:text-primary-300 font-semibold">ML</span>
                  </div>
                  <div className="ml-3">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Maria L.</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Digital Marketing Certificate</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <div className="p-2">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="h-5 w-5 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  "As someone with ADHD, the customizable interface and progress tracking features helped me stay focused and motivated throughout my course. I've finally found a learning system that works with my brain, not against it."
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-secondary-100 dark:bg-secondary-800 flex items-center justify-center">
                    <span className="text-secondary-600 dark:text-secondary-300 font-semibold">JR</span>
                  </div>
                  <div className="ml-3">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">James R.</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Web Development Fundamentals</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <div className="p-2">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="h-5 w-5 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  "The screen reader compatibility and keyboard navigation features made this platform the first one I could use independently. The course content was excellent, but the accessibility is what truly sets it apart."
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-accent-100 dark:bg-accent-800 flex items-center justify-center">
                    <span className="text-accent-600 dark:text-accent-300 font-semibold">ST</span>
                  </div>
                  <div className="ml-3">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Samuel T.</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Creative Writing Program</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 dark:bg-primary-700 text-white">
        <div className="container-tight text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Learning Journey?</h2>
          <p className="text-xl text-primary-100 dark:text-primary-200 mb-8 max-w-3xl mx-auto">
            Join our inclusive community today and experience education tailored to your unique needs and learning style.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/register" className="btn-accent btn-lg">
              Create Your Account
            </Link>
            <Link to="/courses" className="btn-outline bg-transparent text-white border-white hover:bg-white hover:text-primary-600 btn-lg">
              Browse Courses
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;