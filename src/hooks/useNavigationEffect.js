import { useEffect } from "react";
import { useNavigationType, useLocation } from "react-router-dom";

const useNavigationEffect = () => {
  const action = useNavigationType();
  const { pathname } = useLocation();

  // Scroll to the top on navigation, except on "POP" action (back navigation)
  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  // Update document title and meta description based on the current pathname
  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Home Page";
        metaDescription = "Welcome to our website. Explore our services, features, and much more.";
        break;
      case "/about-us":
        title = "About Us";
        metaDescription = "Learn more about our team, our mission, and what drives us.";
        break;
      case "/features":
        title = "Features";
        metaDescription = "Discover the unique features that set our services apart.";
        break;
      case "/services":
        title = "Services";
        metaDescription = "Explore our wide range of services designed to meet your needs.";
        break;
      case "/contact":
        title = "Contact Us";
        metaDescription = "Get in touch with us for any queries or support.";
        break;
      case "/pricing":
        title = "Pricing";
        metaDescription = "Find the right plan for your needs with our transparent pricing.";
        break;
      case "/faqs":
        title = "FAQs";
        metaDescription = "Have questions? Find answers to frequently asked questions here.";
        break;
      default:
        title = "";
        metaDescription = "The page you are looking for does not exist or has been moved.";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector('head > meta[name="description"]');
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);
};

export default useNavigationEffect;
