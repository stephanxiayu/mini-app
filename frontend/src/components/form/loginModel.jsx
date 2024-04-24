import React from "react";
import { useForm } from "react-hook-form";
import * as API from "../../network/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useUser } from "../../provider/UserProvider";
import { useNavigate } from "react-router-dom";
const TextInputField = ({
  name,
  label,
  type,
  placeholder,
  register,
  registerOption,
  error,
}) => (
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2">
      {label}
    </label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      {...register(name, registerOption)}
      className={`shadow appearance-none border ${
        error ? "border-red-500" : "border-gray-300"
      } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
    />
    {error && <p className="text-red-500 text-xs italic">{error.message}</p>}
  </div>
);

const LoginModal = ({ onDismiss, onLoginSuccessful }) => {
  const navigate = useNavigate();
  const { setNewUser } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const newUser = await API.login(data);

      if (newUser) {
        setNewUser(newUser);
        toast.success("Login erforderlich");
        navigate("/todo");
        onLoginSuccessful();
      } else {
        toast.error("Login failed");
      }
    } catch (error) {
      console.error(error);
      toast.error("Login failed");
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <ToastContainer theme="dark" />
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Login</h3>
          <div className="mt-2 px-7 py-3">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <TextInputField
                name="email"
                label="Email"
                type="email"
                placeholder="Email"
                register={register}
                registerOption={{ required: "Required" }}
                error={errors.email}
              />
              <TextInputField
                name="password"
                label="Password"
                type="password"
                placeholder="Password"
                register={register}
                registerOption={{ required: "Required" }}
                error={errors.password}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                Login
              </button>
            </form>
          </div>
          <div className="">
            <button
              onClick={onDismiss}
              className="mt-2 w-20 hover:bg-black hover:text-white"
            >
              close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
