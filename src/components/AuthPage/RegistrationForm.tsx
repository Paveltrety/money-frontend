import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StateType } from "../../redux/store";
import { checkAuth, registration } from "../../redux/user/userActions";

function RegistrationForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useDispatch();
  const userInfo = useSelector((state: StateType) => state.user.info);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(checkAuth());
    }
  }, [dispatch]);

  if (userInfo) {
    return <h1>Пользователь {userInfo.email}</h1>;
  }
  return (
    <div>
      <input
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={() => dispatch(registration(email, password))}>
        Регистрация
      </button>
    </div>
  );
}

export default RegistrationForm;
