"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form"
//import { toast, Toaster } from 'react-hot-toast';
import { Eye, EyeOff } from "lucide-react"



const Register = () => {

  // validaciones con useForm
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = handleSubmit(async data => {
    data.roles = "user"
    console.log(data);
    const res = await fetch('https://api-react-node.vercel.app/auth/register', {
      method: 'POST',
      body: data,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    const resJson = await res.json()
    console.log(data);
    console.log(resJson);
  })



  //funcion para ocultar la contraseña

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen  flex  justify-center bg-white text-brown">
      <div className="p-4 rounded shadow-xl w-[274px] flex flex-col">
        <h1 className="text-xl font-bold text-center font-roboto  mx-auto mt-4 mb-8">
          Registrarse
        </h1>
        <form onSubmit={onSubmit}>
          {/* Nombre */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Nombre
            </label>
            <input
              type="text"
              {...(register("name", {
                required: {
                  value: true,
                  message: "El nombre es requerido"
                }
              }))}
              id="name"
              name="name"
              placeholder="Nombre"
              className={`transition-all duration-300 ease-in-out transform scale-100 hover:scale-105 mr-10 bg-gray-50 border border-gray-300 text-black-500 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-teal-500 dark:focus:border-teal-500`}
            />
            {errors.name && (
              <span className="text-dark-pink text-sm">{errors.name.message}</span>
            )}
          </div>

          {/* Correo Electrónico */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Correo Electrónico
            </label>
            <input
              type="email"
              {...(register("email", {
                required: {
                  value: true,
                  message: "El email es requerido"
                }
              }))}
              id="email"
              name="email"
              placeholder="Email"
              className={`transition-all duration-300 ease-in-out transform scale-100 hover:scale-105 mr-10 bg-gray-50 border border-gray-300 text-black-500 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-teal-500 dark:focus:border-teal-500`}
            />
            {errors.email && (
              <span className="text-dark-pink text-sm">{errors.email.message}</span>
            )}
          </div>
          {/* Contraseña */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Contraseña
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                {...(register("password", {
                  required: {
                    value: true,
                    message: "La contraseña es requerida"
                  }
                }))}
                id="password"
                name="password"
                placeholder="Contraseña"
                className={`transition-all duration-300 ease-in-out transform scale-100 hover:scale-105 mr-10 bg-gray-50 border border-gray-300 text-black-500 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-teal-500 dark:focus:border-teal-500`}
              />
              {errors.password && (
                <span className="text-dark-pink text-sm">{errors.password.message}</span>
              )}
              <button
                type="button"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <Eye /> : <EyeOff />}
              </button>
            </div>

          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="transition-all duration-300 ease-in-out transform scale-100 hover:scale-105 w-full bg-b-green text-white rounded px-4 py-2 hover:bg-red-600 focus:outline-none"
            >
              Registrarse
            </button>
          </div>

        </form>

        <div className="mt-2 flex flex-col">
          <h1 className="mt-2">¿Ya tienes una cuenta?</h1>
          <button
            className=" transition-all duration-300 ease-in-out transform scale-100 hover:scale-105 mt-2 bg-b-green text-white rounded px-4 py-2 hover:bg-red-800 focus:outline-none">
            Iniciar sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
