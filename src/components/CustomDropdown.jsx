import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FILTER_OPTIONS = [
  { id: 'shirts', label: 'Shirts' },
  { id: 'shoes', label: 'Shoes' },
  { id: 'watches', label: 'Watches' },
  { id: 'bags', label: 'Bags' },
];

const CustomDropdown = ({ optionsArray }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState({});

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleCheckboxChange = (id) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-between px-4 py-2 border rounded-md shadow-sm bg-white text-gray-700 focus:outline-none"
      >
        Categories
        <ChevronDown className="ml-2" />
      </button>

      {isOpen && (
        <div className="absolute left-0 z-10 mt-2 w-48 bg-white border rounded-lg shadow-lg">
          <div className="p-4">
            {FILTER_OPTIONS.map((option) => (
              <label key={option.id} className="flex items-center gap-2 py-1">
                <input
                  type="checkbox"
                  checked={!!selectedOptions[option.id]}
                  onChange={() => handleCheckboxChange(option.id)}
                  className="text-blue-600 focus:ring-0"
                />
                <span className="text-gray-700">{option.label}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
