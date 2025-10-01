import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface Translations {
  // Header Navigation Labels
  features: string;
  solutions: string;
  pricing: string;
  impact: string;
  contact: string;
  reviews: string;
  signIn: string;
  getStarted: string;
  
  // Navigation System Labels
  home: string;
  about: string;
  demo: string;
  help: string;
  
  // Hero Section
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  startLearning: string;
  watchDemo: string;
  
  // Features Section
  featuresTitle: string;
  featuresSubtitle: string;
  feature1Title: string;
  feature1Description: string;
  feature2Title: string;
  feature2Description: string;
  feature3Title: string;
  feature3Description: string;
  feature4Title: string;
  feature4Description: string;
  feature5Title: string;
  feature5Description: string;
  feature6Title: string;
  feature6Description: string;
  
  // Problem Section
  problemTitle: string;
  problemSubtitle: string;
  problemDescription: string;
  
  // Stats/Reviews Section
  reviewsTitle: string;
  reviewsSubtitle: string;
  
  // Pricing Section
  pricingTitle: string;
  pricingSubtitle: string;
  basicPlan: string;
  proPlan: string;
  enterprisePlan: string;
  month: string;
  choosePlan: string;
  
  // CTA Section
  ctaTitle: string;
  ctaDescription: string;
  ctaButton: string;
  
  // Footer
  footerDescription: string;
  product: string;
  company: string;
  support: string;
  legal: string;
  allRightsReserved: string;
  
  // Login Page
  loginTitle: string;
  loginSubtitle: string;
  email: string;
  password: string;
  rememberMe: string;
  forgotPassword: string;
  loginButton: string;
  orContinueWith: string;
  continueWithGoogle: string;
  continueWithMicrosoft: string;
  noAccount: string;
  createAccount: string;
  backToHome: string;
  signUpHere: string;
  
  // Register
  registerTitle: string;
  registerSubtitle: string;
  fullName: string;
  confirmPassword: string;
  acceptTerms: string;
  termsAndConditions: string;
  and: string;
  privacyPolicy: string;
  registerButton: string;
  orRegisterWith: string;
  alreadyHaveAccount: string;
  signInHere: string;
}

const translations: Record<Language, Translations> = {
  en: {
    features: 'Features',
    solutions: 'Solutions',
    pricing: 'Pricing',
    impact: 'Impact',
    contact: 'Contact',
    reviews: 'Reviews',
    signIn: 'Sign In',
    getStarted: 'Get Started',
    home: 'Home',
    about: 'About',
    demo: 'Demo',
    help: 'Help',
    heroTitle: 'Transform Your Academic Journey',
    heroSubtitle: 'with UniProject',
    heroDescription: 'The ultimate platform for students and educators to collaborate, learn, and achieve academic excellence together.',
    startLearning: 'Start Learning',
    watchDemo: 'Watch Demo',
    featuresTitle: 'Everything you need to succeed',
    featuresSubtitle: 'Powerful tools designed for modern education',
    feature1Title: 'Smart Collaboration',
    feature1Description: 'Work as a team in an organized manner with tools that facilitate the coordination of academic and work projects.',
    feature2Title: 'Progress Tracking',
    feature2Description: 'Monitor the progress of your projects in real time and access clear reports to make better decisions.',
    feature3Title: 'Resource Library',
    feature3Description: 'Access templates, documents and materials that support both academic development and business management.',
    feature4Title: 'Interactive Learning',
    feature4Description: 'Reinforce your knowledge with dynamic activities, multimedia resources and exercises applied to real projects.',
    feature5Title: 'Specialized Support',
    feature5Description: 'Receive support from academic tutors or business advisors when you need it.',
    feature6Title: 'Mobile Access',
    feature6Description: 'Manage your projects and resources from anywhere with a platform accessible on all your devices.',
    problemTitle: 'The Challenge',
    problemSubtitle: 'Traditional education systems struggle to keep pace with modern learning needs',
    problemDescription: 'Students face fragmented tools, lack of personalized guidance, and limited collaboration opportunities. UniProject bridges these gaps with an integrated, intelligent learning ecosystem.',
    reviewsTitle: 'What Students Say',
    reviewsSubtitle: 'Hear from our community of learners',
    pricingTitle: 'Choose Your Plan',
    pricingSubtitle: 'Flexible pricing for every learning journey',
    basicPlan: 'Basic',
    proPlan: 'Pro',
    enterprisePlan: 'Enterprise',
    month: '/month',
    choosePlan: 'Choose Plan',
    ctaTitle: 'Ready to transform your learning experience?',
    ctaDescription: 'Join thousands of students and educators who are already achieving more with UniProject.',
    ctaButton: 'Get Started Today',
    footerDescription: 'Empowering students and educators with cutting-edge tools for academic success.',
    product: 'Product',
    company: 'Company',
    support: 'Support',
    legal: 'Legal',
    allRightsReserved: 'All rights reserved.',
    loginTitle: 'Welcome Back',
    loginSubtitle: 'Sign in to your UniProject account',
    email: 'Email',
    password: 'Password',
    rememberMe: 'Remember me',
    forgotPassword: 'Forgot your password?',
    loginButton: 'Sign In',
    orContinueWith: 'Or continue with',
    continueWithGoogle: 'Continue with Google',
    continueWithMicrosoft: 'Continue with Microsoft',
    noAccount: "Don't have an account?",
    createAccount: 'Create Account',
    backToHome: 'Back to Home',
    signUpHere: 'Sign up here',
    registerTitle: 'Create Your Account',
    registerSubtitle: 'Join UniProject and start your learning journey',
    fullName: 'Full Name',
    confirmPassword: 'Confirm Password',
    acceptTerms: 'I accept the',
    termsAndConditions: 'Terms and Conditions',
    and: 'and',
    privacyPolicy: 'Privacy Policy',
    registerButton: 'Create Account',
    orRegisterWith: 'Or register with',
    alreadyHaveAccount: 'Already have an account?',
    signInHere: 'Sign in here',
  },
  es: {
    features: 'Características',
    solutions: 'Soluciones',
    pricing: 'Precios',
    impact: 'Impacto',
    contact: 'Contacto',
    reviews: 'Reseñas',
    signIn: 'Iniciar Sesión',
    getStarted: 'Comenzar',
    home: 'Inicio',
    about: 'Acerca de',
    demo: 'Demo',
    help: 'Ayuda',
    heroTitle: 'Transforma Tu Viaje Académico',
    heroSubtitle: 'con UniProject',
    heroDescription: 'La plataforma definitiva para estudiantes y educadores para colaborar, aprender y alcanzar la excelencia académica juntos.',
    startLearning: 'Comenzar a Aprender',
    watchDemo: 'Ver Demo',
    featuresTitle: 'Todo lo que necesitas para tener éxito',
    featuresSubtitle: 'Herramientas poderosas diseñadas para la educación moderna',
    feature1Title: 'Colaboración Inteligente',
    feature1Description: 'Trabaja en equipo sin problemas con herramientas de colaboración en tiempo real y espacios de trabajo compartidos.',
    feature2Title: 'Seguimiento de Progreso',
    feature2Description: 'Monitorea tu progreso académico con análisis detallados y perspectivas personalizadas.',
    feature3Title: 'Biblioteca de Recursos',
    feature3Description: 'Accede a una vasta colección de recursos educativos, plantillas y materiales de estudio.',
    feature4Title: 'Aprendizaje Interactivo',
    feature4Description: 'Interactúa con contenido interactivo, cuestionarios y experiencias de aprendizaje multimedia.',
    feature5Title: 'Soporte Experto',
    feature5Description: 'Obtén ayuda de tutores calificados y asesores académicos cuando lo necesites.',
    feature6Title: 'Acceso Móvil',
    feature6Description: 'Aprende en cualquier lugar, en cualquier momento con nuestra plataforma completamente responsiva.',
    problemTitle: 'El Desafío',
    problemSubtitle: 'Los sistemas educativos tradicionales luchan por mantenerse al día con las necesidades de aprendizaje modernas',
    problemDescription: 'Los estudiantes enfrentan herramientas fragmentadas, falta de orientación personalizada y oportunidades limitadas de colaboración. UniProject cierra estas brechas con un ecosistema de aprendizaje integrado e inteligente.',
    reviewsTitle: 'Lo Que Dicen Los Estudiantes',
    reviewsSubtitle: 'Escucha de nuestra comunidad de aprendices',
    pricingTitle: 'Elige Tu Plan',
    pricingSubtitle: 'Precios flexibles para cada viaje de aprendizaje',
    basicPlan: 'Básico',
    proPlan: 'Pro',
    enterprisePlan: 'Empresarial',
    month: '/mes',
    choosePlan: 'Elegir Plan',
    ctaTitle: '¿Listo para transformar tu experiencia de aprendizaje?',
    ctaDescription: 'Únete a miles de estudiantes y educadores que ya están logrando más con UniProject.',
    ctaButton: 'Comenzar Hoy',
    footerDescription: 'Empoderando a estudiantes y educadores con herramientas de vanguardia para el éxito académico.',
    product: 'Producto',
    company: 'Empresa',
    support: 'Soporte',
    legal: 'Legal',
    allRightsReserved: 'Todos los derechos reservados.',
    loginTitle: 'Bienvenido de Vuelta',
    loginSubtitle: 'Inicia sesión en tu cuenta de UniProject',
    email: 'Correo Electrónico',
    password: 'Contraseña',
    rememberMe: 'Recordarme',
    forgotPassword: '¿Olvidaste tu contraseña?',
    loginButton: 'Iniciar Sesión',
    orContinueWith: 'O continúa con',
    continueWithGoogle: 'Continuar con Google',
    continueWithMicrosoft: 'Continuar con Microsoft',
    noAccount: '¿No tienes una cuenta?',
    createAccount: 'Crear Cuenta',
    backToHome: 'Volver al Inicio',
    signUpHere: 'Regístrate aquí',
    registerTitle: 'Crea Tu Cuenta',
    registerSubtitle: 'Únete a UniProject y comienza tu viaje de aprendizaje',
    fullName: 'Nombre Completo',
    confirmPassword: 'Confirmar Contraseña',
    acceptTerms: 'Acepto los',
    termsAndConditions: 'Términos y Condiciones',
    and: 'y la',
    privacyPolicy: 'Política de Privacidad',
    registerButton: 'Crear Cuenta',
    orRegisterWith: 'O regístrate con',
    alreadyHaveAccount: '¿Ya tienes una cuenta?',
    signInHere: 'Inicia sesión aquí',
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export type { Language, Translations };