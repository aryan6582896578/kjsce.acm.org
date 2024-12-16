import * as React from "react";

export default function ContactForm() {
  const [formData, setFormData] = React.useState({
    fullName: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="flex flex-col items-start px-10 py-6 border border-solid bg-slate-300 border-gray-900 border-opacity-50 rounded-[20px] text-slate-950 max-w-[500px]"
    >
      <h2 className="self-end mr-4 text-2xl font-semibold">
        Wanna Connect with Us?
      </h2>
      
      <div className="w-full mt-8">
        <label htmlFor="fullName" className="block mb-2">Full Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full p-2 bg-transparent border border-gray-900 border-opacity-50 rounded"
          required
          aria-required="true"
        />
      </div>

      <div className="w-full mt-6">
        <label htmlFor="email" className="block mb-2">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 bg-transparent border border-gray-900 border-opacity-50 rounded"
          required
          aria-required="true"
        />
      </div>

      <div className="w-full mt-6">
        <label htmlFor="message" className="block mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 bg-transparent border border-gray-900 border-opacity-50 rounded min-h-[100px]"
          required
          aria-required="true"
        />
      </div>

      <button
        type="submit"
        className="self-end px-6 py-3 mt-6 text-base text-sky-50 bg-gray-900 rounded-lg border border-solid border-zinc-800 hover:bg-gray-800 transition-colors duration-200"
      >
        Submit
      </button>
    </form>
  );
}