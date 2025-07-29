export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'teacher' | 'admin';
  accessibilityPreferences: AccessibilityPreferences;
  avatar?: string;
}

export interface AccessibilityPreferences {
  textSize: 'normal' | 'large' | 'larger';
  highContrast: boolean;
  reduceMotion: boolean;
  screenReader: boolean;
  captionsEnabled: boolean;
  keyboardNavigation: boolean;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  modules: Module[];
  instructor: string;
  duration: number; // in minutes
  thumbnail?: string;
  tags: string[];
}

export interface Module {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
  quizzes: Quiz[];
  activities: Activity[];
}

export interface Lesson {
  id: string;
  title: string;
  content: LessonContent;
  duration: number; // in minutes
  order: number;
  completed: boolean;
}

export interface LessonContent {
  text?: string;
  audioUrl?: string;
  videoUrl?: string;
  transcription?: string;
  attachments?: Attachment[];
}

export interface Attachment {
  id: string;
  title: string;
  type: 'pdf' | 'document' | 'image' | 'audio' | 'video';
  url: string;
  description?: string;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  questions: Question[];
  timeLimit?: number; // in minutes
  passingScore: number;
  allowMultipleAttempts: boolean;
}

export interface Question {
  id: string;
  text: string;
  type: 'multiple-choice' | 'true-false' | 'matching' | 'short-answer';
  options?: string[];
  correctAnswer: string | string[];
  points: number;
  feedback?: string;
}

export interface Activity {
  id: string;
  title: string;
  description: string;
  type: 'assignment' | 'discussion' | 'group-work' | 'interactive';
  dueDate?: string;
  completed: boolean;
  instructions: string;
  resources?: Attachment[];
}

export interface UserProgress {
  userId: string;
  courseId: string;
  completedLessons: string[];
  completedQuizzes: Record<string, QuizAttempt>;
  completedActivities: string[];
  lastAccessed: string;
  overallProgress: number; // percentage
}

export interface QuizAttempt {
  quizId: string;
  attemptDate: string;
  score: number;
  answers: Record<string, string | string[]>;
  feedback?: string;
  passed: boolean;
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  read: boolean;
  createdAt: string;
  link?: string;
}