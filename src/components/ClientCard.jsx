



import React, { useState, useEffect, useRef } from "react";
import {
  MoreVertical,
  Phone,
  Mail,
  Calendar,
  Eye,
  PhoneCall,
  MessageCircle,
  X,
  Lock,
  Unlock,
} from "lucide-react";
import { Menu } from "@headlessui/react";

const statusColors = {
  active: "bg-gradient-to-r from-green-300 to-green-500 text-green-900",
  paused: "bg-gradient-to-r from-yellow-300 to-yellow-500 text-yellow-900",
  inactive: "bg-gradient-to-r from-red-300 to-red-500 text-red-900",
};

const planColors = {
  Basic: "bg-gradient-to-r from-gray-300 to-gray-500 text-gray-900",
  Premium: "bg-gradient-to-r from-purple-300 to-purple-500 text-purple-900",
  Pro: "bg-gradient-to-r from-blue-300 to-blue-500 text-blue-900",
};

const CORRECT_PASSWORD = "2821"; // replace with your own secure password check

export default function ClientCard({ client }) {
  const {
    name,
    condition,
    email,
    phone,
    started,
    lastContact,
    plan,
    goals,
    progress,
    status,
  } = client;

  // States for modals
  const [modalType, setModalType] = useState(null); // 'details', 'call', 'message'
  const [callDate, setCallDate] = useState("");
  const [callTime, setCallTime] = useState("");
  const [message, setMessage] = useState("");

  // Unlock state for sensitive info
  const [locked, setLocked] = useState(true);
  const [passwordPromptOpen, setPasswordPromptOpen] = useState(false);
  const [inputPassword, setInputPassword] = useState("");
  const menuRef = useRef();

  const progressColor =
    progress > 80
      ? "from-green-400 to-green-600"
      : progress > 50
      ? "from-yellow-400 to-yellow-600"
      : "from-red-400 to-red-600";

  // Hashing helpers
  const maskName = (fullName) => {
    if (!fullName) return "";
    return fullName[0] + "**";
  };

  const maskEmail = (emailAddr) => {
    if (!emailAddr) return "";
    const [user, domain] = emailAddr.split("@");
    if (!domain) return "***";
    return user[0] + "****@" + domain;
  };

  // Close all modals + reset password input
  const closeModal = () => {
    setModalType(null);
    setCallDate("");
    setCallTime("");
    setMessage("");
  };

  // Open menu and prompt password if locked
  const handleMenuClick = () => {
    if (locked) {
      setPasswordPromptOpen(true);
    }
  };

  // Handle password submit
  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (inputPassword === CORRECT_PASSWORD) {
      setLocked(false);
      setPasswordPromptOpen(false);
      setInputPassword("");
      // Automatically open menu after unlocking
      if (menuRef.current) {
        menuRef.current.click();
      }
    } else {
      alert("Incorrect password");
    }
  };

  // Prevent modal close when clicking inside password form
  const passwordModalClick = (e) => e.stopPropagation();

  const handleScheduleCall = (e) => {
    e.preventDefault();
    alert(`Call scheduled with ${name} on ${callDate} at ${callTime}`);
    closeModal();
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    alert(`Message sent to ${name}: "${message}"`);
    closeModal();
  };

  return (
    <>
      <div
        tabIndex={0}
        className="bg-white md:mt-0 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col sm:flex-row gap-6 justify-between p-6 ring-1 ring-transparent focus-within:ring-green-800 focus:outline-none"
      >
        <div className="flex gap-5 items-center sm:items-start">
          <div className="flex-shrink-0 h-20 w-20 rounded-full bg-gray-300 flex items-center justify-center text-4xl font-extrabold text-gray-700 select-none">
            {locked ? maskName(name) : name}
          </div>

          <div className="space-y-1 max-w-xs">
            <h2 className="text-xl font-bold text-gray-900 truncate">
              {locked ? maskName(name) : name}
            </h2>
            <p className="text-sm text-gray-600 italic">{condition}</p>

            <div className="mt-3 space-y-1 text-xs text-gray-600 select-text">
              <div className="flex items-center gap-1.5">
                <Mail className="w-5 h-5 text-gray-400" />
                {locked ? (
                  <span title={email} className="italic select-none">
                    {maskEmail(email)}
                  </span>
                ) : (
                  <a href={`mailto:${email}`} className="hover:underline truncate" title={email}>
                    {email}
                  </a>
                )}
              </div>
              <div className="flex items-center gap-1.5">
                <PhoneCall className="w-5 h-5 text-gray-400" />
                <a href={`tel:${phone}`} className="hover:underline" title={phone}>
                  {phone}
                </a>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-5 h-5 text-gray-400" />
                <span>Started: {started}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-5 h-5 text-gray-400" />
                <span>Last Contact: {lastContact}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mt-4">
              <span
                className={`text-xs font-semibold px-3 py-1 rounded-full shadow-inner ${statusColors[status]}`}
              >
                {status.toUpperCase()}
              </span>
              <span
                className={`text-xs font-semibold px-3 py-1 rounded-full shadow-inner ${planColors[plan]}`}
              >
                {plan} Plan
              </span>
            </div>
          </div>
        </div>

        <div className="flex-1 sm:ml-10 flex flex-col justify-between">
          <div>
            <div className="mb-2 text-sm font-semibold text-gray-700 select-none">Progress</div>
            <div className="relative w-full h-3 rounded-full bg-gray-200 overflow-hidden shadow-inner">
              <div
                className={`absolute top-0 left-0 h-full rounded-full bg-gradient-to-r ${progressColor} transition-all duration-700 ease-in-out`}
                style={{ width: `${progress}%`, boxShadow: `0 0 8px rgba(0,0,0,0.15)` }}
              />
            </div>
            <div className="mt-1 text-xs text-right text-gray-500 font-mono select-none">{progress}%</div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {goals.map((goal, i) => (
              <span
                key={i}
                className="bg-blue-100 text-blue-900 text-xs font-semibold px-3 py-1 rounded-full shadow-sm select-none"
                title={goal}
              >
                {goal}
              </span>
            ))}
          </div>

          {/* Actions Dropdown with lock icon */}
          <div className="mt-6 flex justify-end items-center gap-2">
            <div>
              {locked ? (
                <Lock className="w-5 h-5 text-gray-400" title="Locked - enter password to unlock" />
              ) : (
                <Unlock className="w-5 h-5 text-green-500" title="Unlocked" />
              )}
            </div>
            <Menu as="div" className="relative inline-block text-left">
              <Menu.Button
                ref={menuRef}
                onClick={handleMenuClick}
                className="p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-400"
                aria-label="Open actions menu"
              >
                <MoreVertical className="w-6 h-6 text-gray-600" />
              </Menu.Button>

              <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right bg-white border border-gray-200 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 z-20 focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`flex items-start gap-3 w-full p-3 rounded-lg transition ${
                        active ? "bg-green-50" : "bg-white"
                      }`}
                      onClick={() => locked ? setPasswordPromptOpen(true) : setModalType("details")}
                    >
                      <Eye className="w-6 h-6 text-green-600" />
                      <div className="text-left">
                        <div className="font-semibold text-green-800">View Details</div>
                        <p className="text-sm text-green-700">
                          Open full client profile with history and charts.
                        </p>
                      </div>
                    </button>
                  )}
                </Menu.Item>

                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`flex items-start gap-3 w-full p-3 rounded-lg transition ${
                        active ? "bg-yellow-50" : "bg-white"
                      }`}
                      onClick={() => locked ? setPasswordPromptOpen(true) : setModalType("call")}
                    >
                      <Phone className="w-6 h-6 text-yellow-600" />
                      <div className="text-left">
                        <div className="font-semibold text-yellow-800">Schedule Call</div>
                        <p className="text-sm text-yellow-700">Book a consultation or follow-up call.</p>
                      </div>
                    </button>
                  )}
                </Menu.Item>

                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`flex items-start gap-3 w-full p-3 rounded-lg transition ${
                        active ? "bg-blue-50" : "bg-white"
                      }`}
                      onClick={() => locked ? setPasswordPromptOpen(true) : setModalType("message")}
                    >
                      <MessageCircle className="w-6 h-6 text-blue-600" />
                      <div className="text-left">
                        <div className="font-semibold text-blue-800">Send Message</div>
                        <p className="text-sm text-blue-700">Send quick email or SMS updates.</p>
                      </div>
                    </button>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Menu>
          </div>
        </div>
      </div>

      {/* Modals */}
      {modalType === "details" && (
        <Modal title={`Details for ${name}`} onClose={closeModal}>
          <h3 className="text-lg font-semibold mb-4">Client Profile</h3>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Condition:</strong> {condition}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Phone:</strong> {phone}</p>
          <p><strong>Started:</strong> {started}</p>
          <p><strong>Last Contact:</strong> {lastContact}</p>
          <p><strong>Plan:</strong> {plan}</p>
          <p><strong>Status:</strong> {status}</p>
          <p className="mt-4 italic text-gray-600">
            (You can replace this with graphs, charts, or detailed history)
          </p>
        </Modal>
      )}

      {modalType === "call" && (
        <Modal title={`Schedule Call with ${name}`} onClose={closeModal}>
          <form onSubmit={handleScheduleCall} className="space-y-4">
            <label className="block">
              <span className="font-semibold">Select Date</span>
              <input
                type="date"
                required
                value={callDate}
                onChange={(e) => setCallDate(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded p-2 focus:ring-green-400 focus:outline-none"
              />
            </label>
            <label className="block">
              <span className="font-semibold">Select Time</span>
              <input
                type="time"
                required
                value={callTime}
                onChange={(e) => setCallTime(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded p-2 focus:ring-green-400 focus:outline-none"
              />
            </label>

            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={closeModal}
                className="px-4 py-2 rounded border border-gray-400 hover:bg-gray-100 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
              >
                Schedule
              </button>
            </div>
          </form>
        </Modal>
      )}

      {modalType === "message" && (
        <Modal title={`Send Message to ${name}`} onClose={closeModal}>
          <form onSubmit={handleSendMessage} className="space-y-4">
            <label className="block">
              <span className="font-semibold">Message</span>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded p-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Type your message here..."
              />
            </label>

            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={closeModal}
                className="px-4 py-2 rounded border border-gray-400 hover:bg-gray-100 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                Send
              </button>
            </div>
          </form>
        </Modal>
      )}

      {/* Password prompt modal */}
      {passwordPromptOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-40"
          onClick={() => setPasswordPromptOpen(false)}
          aria-modal="true"
          role="dialog"
        >
          <form
            onSubmit={handlePasswordSubmit}
            onClick={passwordModalClick}
            className="bg-white rounded-xl shadow-lg max-w-sm w-full p-6 relative"
          >
            <button
              type="button"
              onClick={() => setPasswordPromptOpen(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
              aria-label="Close password prompt"
            >
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-2xl font-bold mb-4">Enter Password</h2>
            <input
              type="password"
              value={inputPassword}
              onChange={(e) => setInputPassword(e.target.value)}
              placeholder="Password"
              className="w-full border border-gray-300 rounded p-2 mb-4 focus:ring-green-400 focus:outline-none"
              autoFocus
              required
            />
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setPasswordPromptOpen(false)}
                className="px-4 py-2 rounded border border-gray-400 hover:bg-gray-100 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
              >
                Unlock
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

// Reusable Modal component
function Modal({ title, onClose, children }) {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-30"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="bg-white rounded-xl shadow-lg max-w-md w-full p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <div>{children}</div>
      </div>
    </div>
  );
}

