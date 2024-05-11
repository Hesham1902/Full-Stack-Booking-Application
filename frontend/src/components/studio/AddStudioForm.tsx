import { SubmitHandler, useForm } from "react-hook-form";
import InputForm from "../auth/InputForm";
import { StudioInputs } from "../../types";
import { yupResolver } from "@hookform/resolvers/yup";
import { StudioSchema } from "../../utils/schema";
import Button from "../utils/Button";
import api from "../../api";
import { useNavigate } from "react-router-dom";

const AddStudioForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<StudioInputs>({
    defaultValues: {
      name: "",
      start_time: "",
      end_time: "",
      price_per_day: 0,
      working_days: "",
      address: "",
    },
    resolver: yupResolver(StudioSchema),
  });

  const inputsForm = [
    {
      label: "Studio name",
      type: "text",
      name: "name",
      placeholder: "Enter studio name",
      register: register("name"),
      error: errors.name,
    },
    {
      label: "Start time",
      type: "time",
      name: "start_time",
      placeholder: "Enter start time",
      register: register("start_time"),
      error: errors.start_time,
    },
    {
      label: "End time",
      type: "time",
      name: "end_time",
      placeholder: "Enter end time",
      register: register("end_time"),
      error: errors.end_time,
    },
    {
      label: "Price per day",
      type: "number",
      name: "price_per_day",
      placeholder: "Enter price per day",
      register: register("price_per_day"),
      error: errors.price_per_day,
    },
    {
      label: "Working days",
      type: "text",
      name: "working_days",
      placeholder: "Enter working days",
      register: register("working_days"),
      error: errors.working_days,
    },
    {
      label: "Address",
      type: "text",
      name: "address",
      placeholder: "Enter address",
      register: register("address"),
      error: errors.address,
    },
  ];

  const onSubmit: SubmitHandler<StudioInputs> = async ({
    name,
    start_time,
    end_time,
    price_per_day,
    working_days,
    address,
  }) => {
    try {
      await api.post("studio/api/v1/add/", {
        name,
        start_time,
        end_time,
        price_per_day,
        working_days,
        address,
      });
      navigate("/");
    } catch (error) {
      alert(`Registration failed:${error}`);
    }
  };
  return (
    <form
      className="flex flex-col gap-4 w-full max-w-lg"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
    >
      {inputsForm.map((input, index) => (
        <InputForm key={index} {...input} />
      ))}
      <Button type="submit" disabled={!isValid} title="Add Sudio" />
    </form>
  );
};

export default AddStudioForm;
