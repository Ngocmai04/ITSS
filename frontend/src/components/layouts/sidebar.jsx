import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavItem = ({ to, icon, label }) => {
  const { pathname } = useLocation();
  const isActive = pathname === to;
  return (
    <Link to={to} className={`flex items-center gap-2 px-3 py-2 rounded hover:bg-green-100 ${isActive ? "bg-green-100 font-medium" : ""}`}>
      <span className="text-lg">{icon}</span> {label}
    </Link>
  );
};

const Sidebar = () => (
  <div className="w-64 bg-green-50 text-gray-800 p-4 flex flex-col justify-between">
    <div>
      <h1 className="text-2xl font-bold mb-6 text-green-700 flex items-center gap-2">🛒 Smart Meal</h1>
      <div className="text-sm text-gray-500 mb-2">Chức Năng Chính</div>
      <nav className="flex flex-col gap-1">
        <NavItem to="/" icon="🏠" label="Trang Chủ" />
        <NavItem to="/shopping" icon="🛍️" label="Danh Sách Mua Sắm" />
        <NavItem to="/store" icon="🧺" label="Cửa Hàng Thực Phẩm" />
        <NavItem to="/fridge" icon="🧊" label="Quản Lý Tủ Lạnh" />
        <NavItem to="/recipes" icon="📋" label="Công Thức Nấu Ăn" />
        <NavItem to="/plans" icon="🗓️" label="Lập Kế Hoạch Bữa Ăn" />
        <NavItem to="/stats" icon="📊" label="Thống Kê" />
      </nav>
    </div>
    <div className="flex flex-col gap-1 border-t pt-4 mt-4">
      <NavItem to="/settings" icon="⚙️" label="Cài Đặt" />
      <NavItem to="/profile" icon="👤" label="Hồ Sơ" />
    </div>
  </div>
);

export default Sidebar;
