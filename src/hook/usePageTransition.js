import { useNavigate, useLocation } from "react-router-dom";
import { coverScreen } from "../utils/animations";

export const usePageTransition = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (targetPath) => {
    if (location.pathname === targetPath) return;

    coverScreen(() => {
      navigate(targetPath);
    });
  };
};