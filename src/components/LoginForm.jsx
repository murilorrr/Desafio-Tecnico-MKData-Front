import React, {useEffect, useState} from "react";

function LoginForm() {

  const [user, setUser] = useState({
    login: '',
    cadastroUnico: '',
  });

  const [disableButton, setDisableButton] = useState(false);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUser({...user, [name]: value});
  };

  useEffect(() => {
    const validateUser = () => Object.values(user).every((value) => value !== '');
    if (validateUser()) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [user]);

  return (
    <div >
      <form>
        <input
          type="text"
          name="login"
          placeholder="Login"
          onChange={handleChange}
          value={user.login}
          />
        <input
          type="text"
          name="cadastroUnico"
          onChange={handleChange}
          value={user.cadastroUnico}
          placeholder="Numero de cadastro unico"
          />
        <button disabled={disableButton} type="submit">Login</button>
      </form>
    </div>
  )
}

export default LoginForm;