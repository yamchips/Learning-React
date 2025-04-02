import { FormEvent, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters." }),
  age: z
    .number({ invalid_type_error: "Age field is required." })
    .min(18, { message: "Age must be at least 18." }),
});
type FormData = z.infer<typeof schema>;

// this can help react recognize errors. so we have hints
// interface FormData {
//   name: string;
//   age: number;
// }

const Form2 = () => {
  // method 2: use react-hook-form library to simplify code
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }, // Validation, disable submit button
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  console.log(register("name"));
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  // console.log(formState.errors);

  // method 1: use state hook to create person object
  //   const [person, setPerson] = useState({ name: "", age: "" });
  //   const handleSubmit = (e: FormEvent) => {
  //     e.preventDefault();
  //     console.log(person);
  //   };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name")} //, { required: true, minLength: 3 }
          //   onChange={(e) => {
          //     setPerson({ ...person, name: e.target.value });
          //   }}
          //   value={person.name}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
        {/* {errors.name?.type === "required" && (
          <p className="text-danger">The name field is required</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-danger">The min length is 3</p>
        )} */}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age", { valueAsNumber: true })}
          //   onChange={(e) => {
          //     setPerson({ ...person, age: e.target.value });
          //   }}
          //   value={person.age}
          id="age"
          type="number"
          className="form-control"
        />
        {errors.age && <p className="text-danger">{errors.age.message}</p>}
      </div>
      <button disabled={!isValid} className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form2;
