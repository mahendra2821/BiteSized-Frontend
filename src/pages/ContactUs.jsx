


import { useRef, useState } from "react";
import { Mail, Phone, MapPin, CheckCircle, ArrowLeft } from "lucide-react";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";

export default function ContactUs() {
  const form = useRef();
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);

  const validateForm = (data) => {
    const newErrors = {};
    if (!data.user_name.trim()) newErrors.user_name = "Name is required";
    if (!data.user_email.trim()) {
      newErrors.user_email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.user_email)) {
      newErrors.user_email = "Invalid email format";
    }
    if (!data.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (sending) return;
    const data = {
      user_name: form.current.user_name.value,
      user_email: form.current.user_email.value,
      message: form.current.message.value,
    };

    if (!validateForm(data)) return;

    setSending(true);
    emailjs
      .sendForm("Mahe", "YOUR_TEMPLATE_ID", form.current, "rosi3VkNC9rRXTHQj")
      .then(() => {
        setSubmitted(true);
        toast.success("Message sent successfully!");
        form.current.reset();
        setSending(false);
      })
      .catch(() => {
        toast.error("Failed to send message. Try again later.");
        setSending(false);
      });
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-green-300 via-green-200 to-green-400 px-6 py-10 text-center animate-fadeIn">
        <img
          src="https://illustrations.popsy.co/white/celebration.svg"
          alt="Success"
          className="w-64 mb-6 animate-fadeInUp"
        />
        <CheckCircle className="text-green-600 w-20 h-20 mb-3 animate-pulse" />
        <h1 className="text-3xl font-extrabold text-green-800 mb-2 animate-fadeInUp">
          Thank You!
        </h1>
        <p className="text-gray-700 mb-8 max-w-md mx-auto animate-fadeInUp">
          We've received your message and will contact you soon.
        </p>
        <button
          onClick={() => navigate("/")}
          className="flex items-center justify-center gap-2 bg-green-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-green-700 transform hover:scale-105 transition-all duration-300 focus:ring-4 focus:ring-green-300 animate-fadeInUp"
        >
          <ArrowLeft size={20} /> Go Back Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full relative flex flex-col justify-center md:mt-0 items-center px-4 sm:px-6 py-12 overflow-hidden">
      {/* Full-page green animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-green-300 via-green-200 to-green-400 animate-gradientBackground -z-10"></div>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl sm:text-5xl font-extrabold mb-12 text-center text-green-900 tracking-wide relative z-10"
      >
        Contact Us
      </motion.h1>

      <div className="grid sm:grid-cols-2 gap-12 w-full max-w-6xl relative z-10">
        {/* Contact Info */}
        <div className="space-y-8 text-gray-800 select-none">
          <ContactInfoIcon Icon={Phone} text="+91 9398944199" color="text-green-700" />
          <ContactInfoIcon Icon={Mail} text="jammulamahendra28210702@gmail.com" color="text-green-700" />
          <ContactInfoIcon Icon={MapPin} text="123 Wellness St, Hyderabad, India" color="text-green-700" />
        </div>

        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          noValidate
          className="bg-white/90 backdrop-blur-lg w-full sm:w-[90%] md:w-[100%] max-w-lg mx-auto shadow-2xl rounded-3xl p-8 sm:p-12 transition-transform hover:scale-[1.02]"
        >
          <FloatingInput id="user_name" name="user_name" type="text" label="Your Name" error={errors.user_name} />
          <FloatingInput id="user_email" name="user_email" type="email" label="Your Email" error={errors.user_email} />
          <FloatingTextarea id="message" name="message" label="Your Message" error={errors.message} />

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button
              type="submit"
              disabled={sending}
              className={`flex-1 bg-gradient-to-r from-green-600 to-green-800 text-white py-3 sm:py-4 rounded-3xl font-semibold shadow-lg hover:from-green-700 hover:to-green-900 active:scale-95 transform transition ${
                sending ? "cursor-not-allowed opacity-70" : ""
              }`}
            >
              {sending ? "Sending..." : "Send Message"}
            </button>
            <button
              type="reset"
              onClick={() => setErrors({})}
              className="flex-1 bg-gray-200 text-gray-700 py-3 sm:py-4 rounded-3xl font-semibold shadow-inner hover:bg-gray-300 active:scale-95 transform transition"
            >
              Reset
            </button>
          </div>
        </form>
      </div>

      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
}

function ContactInfoIcon({ Icon, text, color }) {
  return (
    <div className="flex items-center gap-5">
      <Icon className={`w-10 h-10 ${color}`} />
      <p className="text-xl font-medium">{text}</p>
    </div>
  );
}

function FloatingInput({ id, name, type, label, error }) {
  return (
    <div className="relative my-6">
      <input
        id={id}
        name={name}
        type={type}
        autoComplete="off"
        placeholder=" "
        className={`peer block w-full rounded-2xl border border-gray-300 bg-transparent px-5 pt-6 pb-3 text-gray-900 placeholder-transparent focus:border-green-500 focus:ring-2 focus:ring-green-400 focus:outline-none transition ${
          error ? "border-red-500" : ""
        }`}
      />
      <label
        htmlFor={id}
        className={`absolute left-5 top-4 text-gray-500 text-base font-semibold transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400 peer-focus:top-4 peer-focus:text-base peer-focus:text-green-600 ${
          error ? "text-red-500 peer-focus:text-red-600" : ""
        }`}
      >
        {label}
      </label>
      {error && (
        <p className="mt-2 text-sm text-red-600 animate-shake" role="alert" aria-live="assertive">
          {error}
        </p>
      )}
    </div>
  );
}

function FloatingTextarea({ id, name, label, error }) {
  return (
    <div className="relative my-6">
      <textarea
        id={id}
        name={name}
        rows="5"
        placeholder=" "
        className={`peer block w-full rounded-2xl border border-gray-300 bg-transparent px-5 pt-6 pb-3 text-gray-900 placeholder-transparent focus:border-green-500 focus:ring-2 focus:ring-green-400 focus:outline-none transition resize-none ${
          error ? "border-red-500" : ""
        }`}
      />
      <label
        htmlFor={id}
        className={`absolute left-5 top-4 text-gray-500 text-base font-semibold transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400 peer-focus:top-4 peer-focus:text-base peer-focus:text-green-600 ${
          error ? "text-red-500 peer-focus:text-red-600" : ""
        }`}
      >
        {label}
      </label>
      {error && (
        <p className="mt-2 text-sm text-red-600 animate-shake" role="alert" aria-live="assertive">
          {error}
        </p>
      )}
    </div>
  );
}
