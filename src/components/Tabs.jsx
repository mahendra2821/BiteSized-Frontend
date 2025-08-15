const tabs = ['All', 'Active', 'Pending', 'Paused'];

export default function Tabs({ current, onChange }) {
  return (
    <div className="flex space-x-2 mb-4">
      {tabs.map(tab => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`px-4 py-2 rounded-full border ${
            current === tab
              ? 'bg-green-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
