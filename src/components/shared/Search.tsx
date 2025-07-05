import * as React from "react";
import { FaSearch } from "react-icons/fa";

interface SearchProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const Search: React.FC<SearchProps> = ({ value, onChange, placeholder }) => {
  const [input, setInput] = React.useState(value);
  React.useEffect(() => { setInput(value); }, [value]);
  React.useEffect(() => {
    const handler = setTimeout(() => { onChange(input); }, 300);
    return () => clearTimeout(handler);
  }, [input, onChange]);
  return (
    <div className="relative w-full max-w-xs">
      <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-10 pr-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
        aria-label={placeholder || "Search"}
      />
    </div>
  );
}; 