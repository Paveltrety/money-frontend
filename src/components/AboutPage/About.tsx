import { Link, Navigate, useLocation } from "react-router-dom";
import useCheckAuthoraized from "../../helpers/useCheckAuthoraized";

function About() {
  const auth = useCheckAuthoraized();
  const location = useLocation();

  if (auth) {
    return <Navigate to="/dashboard" state={{ from: location }} />;
  }
  return (
    <div>
      <Link to="/authorization">Авторизация</Link>

      <h1>Страница для всех</h1>
    </div>
  );
}

export default About;
