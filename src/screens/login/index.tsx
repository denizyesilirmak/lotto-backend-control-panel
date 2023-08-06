import { Button } from "primereact/button";
import { Fieldset } from "primereact/fieldset";
import { InputText } from "primereact/inputtext";
import { useEffect, useState } from "react";

const LoginScreen: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [serverStatus, setServerStatus] = useState(null) as any;

  useEffect(() => {
    if (username.length > 3 && password.length > 6) {
      setIsValid(true);
    }
  }, [username, password]);

  if (isValid) {
    console.log("Login success");
  }

  useEffect(() => {
    fetch("https://semiz.fun/api/v1/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setServerStatus(data);
      });
  }, []);

  return (
    <div className="p-d-flex p-jc-center p-ai-center p-flex-column">
      <Fieldset legend="Lotto API">
        <div className="p-text-center mb-3">
          <small>Lotto API control panel login</small>
        </div>
        <div className="p-fluid">
          <div className="p-inputgroup my-2">
            <span className="p-inputgroup-addon">
              <i className="pi pi-user"></i>
            </span>
            <InputText
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="p-inputgroup my-2">
            <span className="p-inputgroup-addon">
              <i className="pi pi-lock"></i>
            </span>
            <InputText
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="p-text-center">
            <small>
              Server status:{" "}
              {serverStatus?.data.status === "online" ? "Online" : "Offline"}
            </small>
          </div>
          <div className="p-text-center mb-2">
            <small>Uptime: {serverStatus?.data.uptime}</small>
          </div>
        </div>

        <Button
          label="Login"
          icon="pi pi-check"
          className={`p-mt-3 p-button-success ${isValid ? "" : "p-disabled"}`}
        />
      </Fieldset>
    </div>
  );
};

export default LoginScreen;
