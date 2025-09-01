import { useEffect } from "react";

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  useEffect(() => {
    // Scroll to top on page change
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-enter">
      {children}
    </div>
  );
};

export default PageTransition;