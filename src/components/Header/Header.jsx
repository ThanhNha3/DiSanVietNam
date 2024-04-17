import { useState } from "react";
import "./Header.css";

import { Link } from "@nodemodule/react-router-dom";
export default function Header() {
  const [activeTab, setActiveTab] = useState(1);
  const [showNav, setShowNav] = useState(true);
  return (
    <div className="header flex items-center justify-center py-5  w-full absolute z-10 ">
      <div className="container flex justify-between items-center">
        {/* <div className="text-white font-bold text-[25px] ">VietNam Heritage</div> */}
        <div className="text-white font-bold text-[25px] ">DI TÍCH VIỆT NAM</div>
        <div className="flex items-center gap-4">
          <ul
            style={{ display: showNav ? "flex" : "none" }}
            className="gap-8 text-white list-tab"
          >
            <Link
              to="/"
              onClick={() => {
                setActiveTab(1);
              }}
              className={activeTab === 1 ? "tab active" : ""}
            >
              Giới thiệu
            </Link>
            <Link
              to={"/history"}
              onClick={() => {
                setActiveTab(2);
              }}
              className={activeTab === 2 ? "tab active" : ""}
            >
              Lịch sử
            </Link>
            <Link
              to={"/image"}
              onClick={() => {
                setActiveTab(3);
              }}
              className={activeTab === 3 ? "tab active" : ""}
            >
              Hình ảnh
            </Link>
          </ul>
          <div
            id="menuIcon"
            onClick={() => setShowNav(!showNav)}
          >
            <i className="bx bx-menu text-[30px] text-white "></i>
          </div>
        </div>
      </div>
    </div>
  );
}
