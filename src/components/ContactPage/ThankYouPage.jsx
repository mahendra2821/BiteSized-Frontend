import { useNavigate } from "react-router-dom";

const ThankYouPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 p-6">
      <img
        src="https://illustrations.popsy.co/white/celebration.svg"
        alt="Thank You"
        className="w-64 mb-6"
      />
      <h2 className="text-3xl font-bold text-green-600 mb-2">Thank You!</h2>
      <p className="text-gray-700 mb-6 text-center">
        We've received your message. Our team will reach out shortly.
      </p>
      <button
        onClick={() => navigate("/dashboard")}
        className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700"
      >
        Go to Home
      </button>
    </div>
  );
};

export default ThankYouPage;
