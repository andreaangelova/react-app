import { useForm } from "react-hook-form";

const Rgister = () => {
  const inputs = [
    {
      id: "name",
      label: "Name",
      type: "text",
      requierd: true,
      validationText: "please enter name",
    },
    { id: "middlename", label: "Middle Name", type: "text", requierd: false },
    {
      id: "surname",
      label: "SurName",
      type: "text",
      requierd: true,
      validationText: "please enter surname",
    },
    {
      id: "email",
      label: "Email",
      type: "email",
      requierd: true,
      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      validationText: "please enter valid email",
    },
    {
      id: "age",
      label: "Age",
      type: "number",
      requierd: true,
      max: 100,
      validationText: "please enter valid age",
    },
  ];
  const submit = (values) => {
    console.log("submitted");
    console.log(values);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors,
  } = useForm({
    defaultValues: { name: "John" },
  });
  const restForm = () => {
    reset();
    setTimeout(() => {
      clearErrors();
    }, 10);
  };
  return (
    <div>
      <h1>Welcome, Please register</h1>
      <form onSubmit={handleSubmit(submit)}>
        {inputs.map((input) => {
          return (
            <div key={input.id}>
              <p>{input.label}</p>
              <input
                className={errors[input.id] ? "error" : ""}
                type={input.type}
                {...register(input.id, {
                  required: input.requierd,
                  pattern: input.pattern,
                  max: input.max,
                })}
              ></input>
              {errors[input.id] && input.validationText && (
                <p>{input.validationText}</p>
              )}
            </div>
          );
        })}
        <br></br>
        <input type="submit"></input>
        <br></br>
        <button onClick={restForm}>Reset Form</button>
      </form>
    </div>
  );
};

export default Rgister;
