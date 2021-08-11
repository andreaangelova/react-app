import { useState } from "react";

const Rgister = () => {
  const inputs = [
    { id: "name", label: "Name", type: "text", requierd: true },
    { id: "middlename", label: "Middle Name", type: "text", requierd: false },
    { id: "surname", label: "SurName", type: "text", requierd: true },
    { id: "age", label: "Age", type: "number", requierd: true },
  ];
  const [formData, setFormData] = useState({
    name: "test",
    surname: "",
    middlename: "",
    age: 0,
  });
  const [submitted, setSubmitted] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log(formData);
  };
  return (
    <div>
      <h1>Welcome, Please register</h1>
      <form>
        {inputs.map((input) => {
          return (
            <div key={input.id}>
              <p>{input.label}</p>
              <input
                className={
                  !formData[input.id] && input.requierd && submitted
                    ? "error"
                    : ""
                }
                type={input.type}
                value={formData[input.id]}
                onChange={(e) =>
                  setFormData({ ...formData, [input.id]: e.target.value })
                }
              ></input>
            </div>
          );
        })}
        <br></br>
        <input type="submit" onClick={submit}></input>
      </form>
    </div>
  );
};

export default Rgister;
