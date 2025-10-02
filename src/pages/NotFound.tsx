import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="bg-background/90 backdrop-blur-md border border-border rounded-2xl shadow-lg px-8 py-12 text-center max-w-md mx-auto">
        <h1 className="text-6xl font-extrabold text-accent glow-accent mb-4">404</h1>
        <p className="text-xl text-foreground/80 mb-6">
          Oops! The page you’re looking for doesn’t exist.
        </p>
        <a
          href="/"
          className="inline-block bg-accent text-accent-foreground font-semibold px-6 py-3 rounded-lg shadow glow-accent hover:bg-accent/90 transition-smooth"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
