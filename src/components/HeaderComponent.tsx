import { useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-mt4-2.png";

function Header() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Trigger the file input dialog
    }
  };

  return (
    <header className="text-white mb-28 font-roboto  border-b-2 border-white">
      <div className=" mx-auto grid grid-cols-12 items-center px-12 py-4">
        {/* Logo (left-aligned, spans 3 columns) */}
        <div className="col-span-3 flex items-center">
          <img src={logo} alt="Logo MT4" className="h-10 w-24 object-contain" />
        </div>

        {/* Navigation Links (right-aligned, spans 9 columns) */}
        <nav className="col-span-9 flex items-center justify-end space-x-3 text-lg font-poppins">
          <Link
            to="/"
            className="text-white hover:text-[#8b4513] transition-colors px-2 py-1 rounded-md bg-transparent hover:bg-[#f1f1f1] font-medium"
          >
            Trang chủ
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-[#8b4513] transition-colors px-2 py-1 rounded-md bg-transparent hover:bg-[#f1f1f1] font-medium"
          >
            Giới thiệu
          </Link>
          <Link
            to="/contest"
            className="text-white hover:text-[#8b4513] transition-colors px-2 py-1 rounded-md bg-transparent hover:bg-[#f1f1f1] font-medium"
          >
            Cuộc thi
          </Link>
          <Link
            to="/exhibition"
            className="text-white hover:text-[#8b4513] transition-colors px-2 py-1 rounded-md bg-transparent hover:bg-[#f1f1f1] font-medium"
          >
            Triển lãm
          </Link>
          <Link
            to="/archive"
            className="text-white hover:text-[#8b4513] transition-colors px-2 py-1 rounded-md bg-transparent hover:bg-[#f1f1f1] font-medium"
          >
            Kho lưu trữ
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-[#8b4513] transition-colors px-2 py-1 rounded-md bg-transparent hover:bg-[#f1f1f1] font-medium"
          >
            Liên hệ
          </Link>

          {/* Upload File Button */}
          <button
            onClick={handleFileUpload}
            className="text-white hover:text-[#8b4513] rounded-md py-1 px-3 bg-transparent hover:bg-[#f1f1f1] transition-colors font-medium"
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
            className="text-white hover:text-[#8b4513] font-semibold transition-colors px-2 py-1 rounded-md bg-transparent hover:bg-[#f1f1f1]"
          >
            Sign In
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
