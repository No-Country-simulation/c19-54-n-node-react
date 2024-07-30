export const validateRegisterForm = (formData, showPassword) => {
  const errors = {};

  if (!formData.name.trim()) {
    errors.name = "El nombre es requerido";
  }

  if (!formData.email.trim()) {
    errors.email = "El correo electrónico es requerido";
  } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
    errors.email = "El correo electrónico no es válido";
  }

  if (!formData.password.trim()) {
    errors.password = "La contraseña es requerida";
  } else if (formData.password.length < 8) {
    errors.password = "La contraseña debe tener al menos 8 caracteres";
  }


  return errors;
};

export const validateLoginForm = (formData) => {
  const errors = {};

  if (!formData.loginEmail.trim()) {
    errors.loginEmail = "El correo electrónico es requerido";
  } else if (!/^\S+@\S+\.\S+$/.test(formData.loginEmail)) {
    errors.loginEmail = "El correo electrónico no es válido";
  }

  if (!formData.loginPassword.trim()) {
    errors.loginPassword = "La contraseña es requerida";
  }

  return errors;
};