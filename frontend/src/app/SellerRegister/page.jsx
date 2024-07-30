"use client";
import React, { useState } from "react";
import { validateRegisterForm, validateLoginForm } from "../Register/formValidation";
import { Eye, EyeOff } from "lucide-react"

const SellerRegister = () => {

    //estado para las validaciones
    const [formErrors, setFormErrors] = useState({});

    const [showRegisterForm, setShowRegisterForm] = useState(true);
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    //estado para mensaje de bienvenida Registro
    const [welcomeMessage, setWelcomeMessage] = useState("");
    //estado para mensaje de bienvenida Login
    const [welcomeMessageLogin, setWelcomeMessageLogin] = useState("");

    //estado para el form de registro
    const [registerFormData, setRegisterFormData] = useState({
        name: "",
        email: "",
        password: "",
    });
    //estado para el form de login
    const [loginFormData, setLoginFormData] = useState({
        loginEmail: "",
        loginPassword: "",
    });
    //funcion para ocultar la contraseña
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    // funcion para la vista del login
    const showLoginFormView = () => {
        setShowLoginForm(true);
        setShowRegisterForm(false);
    };
    // funcion para la vista del registro
    const showRegisterFormView = () => {
        setShowLoginForm(false);
        setShowRegisterForm(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (showRegisterForm) {
            setRegisterFormData({
                ...registerFormData,
                [name]: value,
            });
        } else {
            setLoginFormData({
                ...loginFormData,
                [name]: value,
            });
        }
    };

    //funcion para validaciones de los formularios
    const validateForm = () => {
        const formData = showRegisterForm ? registerFormData : loginFormData;
        const errors = showRegisterForm
            ? validateRegisterForm(formData)
            : validateLoginForm(formData);

        // Manejo de errores y lógica de formulario inválido

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    return (
        <div className="min-h-screen  flex  justify-center bg-white text-brown">
            <div className="p-4 rounded shadow-xl w-[274px] flex flex-col">
                {showRegisterForm ? (
                    <>
                        <h1 className="text-xl font-bold text-center font-roboto  mx-auto mt-4 mb-8">
                            Registrarse como vendedor
                        </h1>
                        <form>
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
                                    id="name"
                                    name="name"
                                    placeholder="Nombre"
                                    value={registerFormData.name}
                                    onChange={handleChange}
                                    className={`transition-all duration-300 ease-in-out transform scale-100 hover:scale-105 mr-10 bg-gray-50 border border-gray-300 text-black-500 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-teal-500 dark:focus:border-teal-500`}
                                />
                                {formErrors.name && (
                                    <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
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
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    value={registerFormData.email}
                                    onChange={handleChange}
                                    className={`transition-all duration-300 ease-in-out transform scale-100 hover:scale-105 mr-10 bg-gray-50 border border-gray-300 text-black-500 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-teal-500 dark:focus:border-teal-500`}
                                />
                                {formErrors.email && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {formErrors.email}
                                    </p>
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
                                        id="password"
                                        name="password"
                                        placeholder="Contraseña"
                                        value={registerFormData.password}
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
                                {formErrors.password && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {formErrors.password}
                                    </p>
                                )}
                            </div>

                            <div className="mt-6">
                                <button
                                    type="submit"
                                    className="transition-all duration-300 ease-in-out transform scale-100 hover:scale-105 w-full bg-b-green text-white rounded px-4 py-2 hover:bg-red-600 focus:outline-none"
                                >
                                    Abre tu tienda
                                </button>
                            </div>

                        </form>

                        <div className="mt-2 flex flex-col">
                            <h1 className="mt-2">¿Ya tienes una cuenta?</h1>
                            <button
                                className=" transition-all duration-300 ease-in-out transform scale-100 hover:scale-105 mt-2 bg-b-green text-white rounded px-4 py-2 hover:bg-red-800 focus:outline-none"
                                onClick={showLoginFormView}
                            >
                                Iniciar sesión
                            </button>

                        </div>
                    </>
                ) : null}

                {showLoginForm ? (
                    <>
                        <h1 className=" text-2xl font-semibold mb-2">
                            Iniciar sesión
                        </h1>
                        <form onSubmit={handleLoginSubmit}>
                            {/* Correo Electrónico para inicio de sesión */}
                            <div className="mb-4 mt-4">
                                <label
                                    htmlFor="loginEmail"
                                    className="block text-gray-700 text-sm font-semibold mb-2"
                                >
                                    {envelopeIcon} Correo Electrónico
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
                                    {lockIcon} Contraseña
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
                                        className="transition-all duration-300 ease-in-out transform scale-100 hover:scale-105 absolute right-2 top-1/2 transform-translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                                        onClick={togglePasswordVisibility}
                                    >
                                        {showPassword ? "Ocultar" : "Mostrar"}
                                    </button>
                                </div>
                                {formErrors.loginPassword && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {formErrors.loginPassword}
                                    </p>
                                )}
                            </div>

                            <div className="mt-6">
                                <button
                                    type="submit"
                                    className=" transition-all duration-300 ease-in-out transform scale-100 hover:scale-105 w-full bg-teal-500 text-white rounded px-4 py-2 hover:bg-red-600 focus:outline-none"
                                >
                                    Ingresar
                                </button>

                            </div>
                        </form>
                        <div className="mt-2 text-center">
                            <h1 className="text-sm text-gray-600 mb-2 mt-2">
                                ¿No tienes cuenta?{" "}
                            </h1>
                            <button
                                className="transition-all duration-300 ease-in-out transform scale-100 hover:scale-105 bg-teal-800 text-white rounded px-4 py-2 hover:bg-red-800 focus:outline-none"
                                onClick={showRegisterFormView}
                            >
                                Regístrate
                            </button>
                        </div>

                    </>
                ) : null}
            </div>


        </div>
    );
};

export default SellerRegister;