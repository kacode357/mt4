import { useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-mt4.png";

function Header() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Trigger the file input dialog
    }
  };

  return (
    <header className="bg-[#fdf4e3] text-[#4a3f35] py-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-12">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo MT4"
            className="h-10 w-24 object-contain"
          />
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-6 text-lg">
          <Link
            to="/button1"
            className="text-[#4a3f35] hover:text-[#8b4513] transition-colors px-3"
          >
            Home
          </Link>
          <Link
            to="/button2"
            className="text-[#4a3f35] hover:text-[#8b4513] transition-colors px-3"
          >
            About Us
          </Link>
          <Link
            to="/button3"
            className="text-[#4a3f35] hover:text-[#8b4513] transition-colors px-3"
          >
            Services
          </Link>

          {/* Upload File Button */}
          <button
            onClick={handleFileUpload}
            className="text-[#4a3f35] hover:text-[#8b4513] border border-[#4a3f35] rounded-md py-2 px-4 transition-colors"
          >
            Upload File
          </button>

          {/* Hidden file input */}
          <input
            ref={fileInputRef}
            type="file"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                console.log("File selected:", file.name);
                // Handle the file upload here (e.g., send to the server)
              }
            }}
          />

          <Link
            to="/signin"
            className="text-[#8b4513] hover:text-[#4a3f35] font-semibold transition-colors px-3"
          >
            Sign In
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
