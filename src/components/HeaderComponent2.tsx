import logo from "../assets/logo-mt4.png";

function Header() {
  const handleLogout = () => {
    // Thêm logic logout ở đây (ví dụ: xóa token, chuyển hướng đến trang đăng nhập)
    console.log("Logout");
  };

  return (
    <header className="bg-[#e1c288] text-[#4a3f35] py-2 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-12">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo MT4"
            className="h-8 w-24 object-contain"
          />
        </div>

        {/* Nút Logout bên phải */}
        <div>
          <button
            onClick={handleLogout}
            className="bg-[#4a3f35] text-white px-4 py-2 rounded-lg hover:bg-[#3b2f23] transition"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
