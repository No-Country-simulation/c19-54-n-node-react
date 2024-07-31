"use client";
import React, { useState } from "react";

import { Eye, EyeOff, Facebook, } from "lucide-react"
import Link from "next/link";

const Login = () => {

    const [loginFormData, setLoginFormData] = useState({
        loginEmail: '',
        loginPassword: '',
    });

    const [showPassword, setShowPassword] = useState(false);
    //funcion para ocultar la contraseña
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const [formErrors, setFormErrors] = useState({});
    const validateForm = () => {
        const errors = validateLoginForm(loginFormData);
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginFormData({
            ...loginFormData,
            [name]: value,
        });
    };

    const handleLoginSubmit = () => {

    }
    return (
        <div className="min-h-screen  flex  justify-center bg-white text-brown">
            <div className="p-4 rounded shadow-xl w-[274px] flex flex-col">
                <h1 className=" text-xl font-bold text-center font-roboto  mx-auto mt-4 mb-8">
                    Iniciar sesión
                </h1>
                <form onSubmit={handleLoginSubmit}>
                    {/* Correo Electrónico para inicio de sesión */}
                    <div className="mb-4 mt-4">
                        <label
                            htmlFor="loginEmail"
                            className="block text-gray-700 text-sm font-semibold mb-2"
                        >
                            Correo Electrónico
                        </label>
                        <input
                            type="email"
                            id="loginEmail"
                            name="loginEmail"
                            placeholder="Email"
                            value={loginFormData.loginEmail}
                            onChange={handleChange}
                            className={`transition-all duration-300 ease-in-out transform scale-100 hover:scale-105 mr-10 bg-gray-50 border border-gray-300 text-black-500 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-teal-500 dark:focus:border-teal-500`}
                        />
                        {formErrors.loginEmail && (
                            <p className="text-red-500 text-sm mt-1">
                                {formErrors.loginEmail}
                            </p>
                        )}
                    </div>

                    {/* Contraseña */}
                    <div className="mb-4">
                        <label
                            htmlFor="loginPassword"
                            className="block text-gray-700 text-sm font-semibold mb-2"
                        >
                            Contraseña
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="loginPassword"
                                name="loginPassword"
                                placeholder="Contraseña"
                                value={loginFormData.loginPassword}
                                onChange={handleChange}
                                className={`transition-all duration-300 ease-in-out transform scale-100 hover:scale-105 mr-10 bg-gray-50 border border-gray-300 text-black-500 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-teal-500 dark:focus:border-teal-500`}
                            />
                            <button
                                type="button"
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? <Eye /> : <EyeOff />}
                            </button>
                        </div>
                        {formErrors.loginPassword && (
                            <p className="text-red-500 text-sm mt-1">
                                {formErrors.loginPassword}
                            </p>
                        )}
                    </div>

                    <div className="mt-2 flex flex-col">

                        <button
                            type="submit"
                            className=" transition-all duration-300 ease-in-out transform scale-100 hover:scale-105 mt-2 bg-b-green text-white rounded px-4 py-2 hover:bg-red-800 focus:outline-none"
                        >
                            Iniciar sesión
                        </button>
                        <button
                            type="submit"
                            className="  flex justify-center transition-all duration-300 ease-in-out transform scale-100 hover:scale-105 mt-2 bg-amber text-brown rounded px-4 py-2 hover:bg-red-800 focus:outline-none"
                        >
                            <Facebook /> <span className="ml-2">Inicia con facebook</span>
                        </button>
                        <button
                            type="submit"
                            className=" flex  justify-center text-brown transition-all duration-300 ease-in-out transform scale-100 hover:scale-105 mt-2 bg-amber  rounded px-4 py-2 hover:bg-red-800 focus:outline-none"
                        >
                            <p className="text-2xl">G</p><span className="ml-3 pt-1">Inicia con google</span>
                        </button>
                        <h2 className="text-center mt-2">¿Aún no tienes cuenta?</h2>
                        <h2 className="text-center">Crear cuenta como</h2>
                        <div className="flex justify-between">
                            <Link href="/Register">
                                <button
                                    type="submit"
                                    className=" transition-all duration-300 ease-in-out transform scale-100 hover:scale-105 mt-2 bg-amber text-white rounded px-4 py-2 hover:bg-red-800 focus:outline-none"
                                >
                                    Usuario
                                </button>
                            </Link>
                            <p className="mt-4">´ó</p>
                            <Link href="/SellerRegister">
                                <button
                                    type="submit"
                                    className=" transition-all duration-300 ease-in-out transform scale-100 hover:scale-105 mt-2 bg-amber text-white rounded px-4 py-2 hover:bg-red-800 focus:outline-none"
                                >
                                    Vendedor
                                </button>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;
