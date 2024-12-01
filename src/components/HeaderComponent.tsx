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
            to="/"
            className="text-[#4a3f35] hover:text-[#8b4513] transition-colors px-3"
          >
            Trang chủ
          </Link>
          <Link
            to="/about"
            className="text-[#4a3f35] hover:text-[#8b4513] transition-colors px-3"
          >
            Giới thiệu
          </Link>
          <Link
            to="/contest"
            className="text-[#4a3f35] hover:text-[#8b4513] transition-colors px-3"
          >
            Cuộc thi
          </Link>
          <Link
            to="/exhibition"
            className="text-[#4a3f35] hover:text-[#8b4513] transition-colors px-3"
          >
            Triển lãm
          </Link>
          <Link
            to="/archive"
            className="text-[#4a3f35] hover:text-[#8b4513] transition-colors px-3"
          >
            Kho lưu trữ
          </Link>
          <Link
            to="/contact"
            className="text-[#4a3f35] hover:text-[#8b4513] transition-colors px-3"
          >
            Liên hệ
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
