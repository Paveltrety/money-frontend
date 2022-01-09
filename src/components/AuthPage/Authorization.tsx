import { useCallback, useState } from 'react';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';

const Authorization = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);
  const toggleShowLoginForm = useCallback(() => {
    setShowLoginForm(!showLoginForm);
  }, [showLoginForm]);
  return (
    <>
      <div>
        <button disabled={showLoginForm} onClick={toggleShowLoginForm}>Логин</button>
        <button disabled={!showLoginForm} onClick={toggleShowLoginForm}>Авторизация</button>
      </div>
      {showLoginForm ? <LoginForm /> : <RegistrationForm />}
    </>
  );
};

export default Authorization;
