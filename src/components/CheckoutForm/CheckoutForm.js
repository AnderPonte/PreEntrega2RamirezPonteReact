import { useState } from "react";

const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleConfirm = (event) => {
    event.preventDefault();

    const userData = {
      name,
      phone,
      email,
    };

    onConfirm(userData);
  };

  return (
    <div className="  mx-auto max-w-md p-4 bg-white rounded shadow">
      <form onSubmit={handleConfirm} className="flex flex-col ">
        <label className="block mb-2 font-semibold">
          Nombre:
          <input
            classname=" placeholder-gray-500 border content-center"
            type="text"
            value={name}
            onChange={({ target }) => setName(target.value)}
            placeholder=" Escribe tu nombre"
            required
          />
        </label>
        <label className="block mb-2 font-semibold">
          Telefono:
          <input
            classname="content-center placeholder-gray-500 border "
            type="text"
            value={phone}
            onChange={({ target }) => setPhone(target.value)}
            placeholder=" Escribe tu teléfono"
            required
          />
        </label>
        <label className="block mb-2 font-semibold">
          Email:
          <input
            classname="content-center placeholder-gray-500 border "
            type="text"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            placeholder=" Escribe tu email"
            required
          />
        </label>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Crear Orden
          </button>
        </div>
      </form>
    </div>
  );
};

export { CheckoutForm };
