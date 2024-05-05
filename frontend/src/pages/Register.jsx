import { useState } from "react";
import Form from "../components/Form";

const Register = () => {
  const [userType, setUserType] = useState("");

  return (
    <Form route="/auth/api/register/" method="register" userType={userType}>
      <input
        list="user_type"
        className="form-input"
        placeholder="user"
        onChange={(e) => setUserType(e.target.value)}
      />
      <datalist id="user_type">
        <option value="user" />
        <option value="studio_owner" />
      </datalist>
    </Form>
  );
};

export default Register;
