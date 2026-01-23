import React from "react";
import { motion } from "motion/react";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Footer from "@/components/footer";

const allProjects = [
  {
    title: "JavaGeniusAI",
    description:
      "An AI-powered Java learning platform with interactive coding challenges and real-time feedback.",
    tags: ["Java", "AI", "Spring Boot", "React"],
    url: "https://javageniusai.netlify.app/",
  },
  {
    title: "Occasio",
    description:
      "Full-stack event management platform with JWT-based login, event creation, and ticket booking.",
    tags: ["Java", "Spring Boot", "MySQL"],
  },
  {
    title: "FoodOrderingManagement",
    description:
      "A backend system for a multi-vendor food delivery platform enabling user/vendor onboarding and real-time order processing.",
    tags: ["Java", "Spring Boot", "REST API"],
  },
  {
    title: "face_mask_detection",
    description:
      "A computer vision project using ML to detect face masks in real-time video streams.",
    tags: ["Python", "OpenCV", "ML"],
  },
  {
    title: "TimeSheet",
    description:
      "An efficient timesheet management system for employees to log hours, generate reports, and manage weekly productivity.",
    tags: ["Java", "Spring Boot", "JPA"],
  },
  {
    title: "fullstack_developer_capstone",
    description:
      "A full-stack capstone project demonstrating end-to-end application development skills.",
    tags: ["React", "Spring Boot", "Full-Stack"],
  },
  {
    title: "BankProject",
    description:
      "A standalone Java-based ATM system simulating core banking operations like transfers, deposits, and withdrawals.",
    tags: ["Java", "Core Java"],
  },
  {
    title: "SpamMailPrediction_ML",
    description:
      "A machine learning project that classifies emails as spam or legitimate using NLP techniques.",
    tags: ["Python", "Machine Learning"],
  },
  {
    title: "HealthcareSvu-dev",
    description:
      "Frontend development for the SVU Health Center application, focusing on user interface and experience.",
    tags: ["React", "JavaScript", "Healthcare"],
  },
  {
    title: "HealthcareSvu-api-dev",
    description:
      "API development for the SVU Health Center, managing data and business logic for the healthcare platform.",
    tags: ["Node.js", "Express.js", "API"],
  },
  {
    title: "thefgh-portal-front",
    description:
      "The official frontend for The FGH Portal, built with modern web technologies for a seamless user experience.",
    tags: ["React", "Frontend"],
  },
  {
    title: "thefgh-portal-back",
    description:
      "Backend services for The FGH Portal, handling server-side logic, authentication, and database interactions.",
    tags: ["Node.js", "Backend"],
  },
  {
    title: "Ciropsys-landing-frontend",
    description:
      "The official landing page for Ciropsys, built with modern frontend technologies for a responsive and engaging design.",
    tags: ["HTML", "CSS", "JS"],
  },
  {
    title: "Orange-Ripening-Prediction",
    description:
      "Predicts the ripening stage of oranges from images using custom-trained machine learning models.",
    tags: ["Python", "ML", "CV"],
  },
  {
    title: "OrderManagement",
    description:
      "A foundational order management system to handle product listings, orders, and customer data.",
    tags: ["Java", "Spring Boot"],
  },
  {
    title: "StudentManagement",
    description:
      "A comprehensive system for managing student records, courses, enrollments, and academic progress.",
    tags: ["Java", "Backend"],
  },
  {
    title: "ModelSelection",
    description:
      "A project to identify the most effective machine learning model for a given dataset by comparing performance metrics.",
    tags: ["Python", "Scikit-learn"],
  },
  {
    title: "Ciropsys-landing-backend",
    description:
      "Server-side code for the Ciropsys landing page, handling contact forms and other backend logic.",
    tags: ["Node.js", "Express.js"],
  },
  {
    title: "FlyAMore",
    description:
      "A flight booking system concept, exploring API integration and complex state management.",
    tags: ["Java", "Backend"],
  },
  {
    title: "OIBSIP",
    description:
      "A repository for tasks and projects completed during the Oasis Infobyte (OIBSIP) Internship program.",
    tags: ["Web Dev", "Internship"],
  },
  {
    title: "Rock vs Mine Prediction",
    description:
      "ML model to classify sonar signals as rocks or mines using supervised learning.",
    tags: ["Python", "ML"],
  },
  {
    title: "Diabetes Prediction",
    description:
      "Predicts diabetes occurrence based on health metrics using classification algorithms.",
    tags: ["Python", "ML"],
  },
  {
    title: "House Price Prediction",
    description:
      "Regression model to predict house prices based on various features and location data.",
    tags: ["Python", "ML"],
  },
  {
    title: "Fake News Prediction",
    description:
      "NLP-based classifier to detect fake news articles using text analysis.",
    tags: ["Python", "NLP"],
  },
  {
    title: "Loan Status Prediction",
    description:
      "Predicts loan approval status based on applicant information and credit history.",
    tags: ["Python", "ML"],
  },
  {
    title: "Wine Quality Prediction",
    description:
      "Classification model to predict wine quality based on chemical properties.",
    tags: ["Python", "ML"],
  },
  {
    title: "Car Price Prediction",
    description:
      "Regression model to estimate car prices based on specifications and market data.",
    tags: ["Python", "ML"],
  },
  {
    title: "Gold Price Prediction",
    description:
      "Time series forecasting model to predict gold prices based on historical trends.",
    tags: ["Python", "ML"],
  },
  {
    title: "Heart Disease Prediction",
    description:
      "Classification model to predict heart disease risk using medical parameters.",
    tags: ["Python", "ML"],
  },
  {
    title: "Credit Card Fraud Detection",
    description:
      "Anomaly detection system to identify fraudulent credit card transactions.",
    tags: ["Python", "ML"],
  },
  {
    title: "Medical Insurance Cost Prediction",
    description:
      "Regression model to predict medical insurance costs based on personal factors.",
    tags: ["Python", "ML"],
  },
  {
    title: "BigMart Sales Prediction",
    description:
      "Predicts product sales for BigMart stores using historical sales data.",
    tags: ["Python", "ML"],
  },
  {
    title: "Customer Segmentation",
    description:
      "Clustering algorithm to segment customers based on purchasing behavior.",
    tags: ["Python", "ML"],
  },
  {
    title: "Parkinson's Disease Prediction",
    description:
      "Classification model to detect Parkinson's disease from voice measurements.",
    tags: ["Python", "ML"],
  },
  {
    title: "Titanic Survival Prediction",
    description:
      "Classic ML problem predicting passenger survival on the Titanic.",
    tags: ["Python", "ML"],
  },
  {
    title: "Calorie Burnt Prediction",
    description:
      "Regression model to predict calories burned during exercise based on activity metrics.",
    tags: ["Python", "ML"],
  },
  {
    title: "Movie Recommendation System",
    description:
      "Collaborative filtering system to recommend movies based on user preferences.",
    tags: ["Python", "ML"],
  },
  {
    title: "Breast Cancer Classification",
    description:
      "Binary classification model to detect breast cancer from medical imaging data.",
    tags: ["Python", "ML"],
  },
];

export default function ProjectsPage() {
  const navigate = useNavigate();

  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main className="min-h-screen pt-16 pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button
              onClick={() => navigate("/")}
              variant="ghost"
              className="mb-8 -ml-4 hover:bg-transparent hover:text-primary cursor-pointer"
            >
              <ArrowLeft className="mr-2 w-5 h-5" />
              Back to Home
            </Button>

            <div className="mb-12">
              <h1 className="text-4xl font-medium lg:text-5xl mb-4">
                All Projects
              </h1>
              <p className="text-muted-foreground text-lg">
                A comprehensive collection of my work across various domains
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * index, duration: 0.5 }}
              >
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-card border border-border rounded-2xl p-6 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 block h-full cursor-pointer"
                  >
                    <div className="flex flex-col h-full">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>

                      <p className="text-muted-foreground text-sm mb-6 flex-grow">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="group relative bg-card border border-border rounded-2xl p-6 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 h-full">
                    <div className="flex flex-col h-full">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>

                      <p className="text-muted-foreground text-sm mb-6 flex-grow">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
