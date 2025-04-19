import React from "react";
import { CiLocationOn, CiSearch, CiUser } from "react-icons/ci";
import { LuPhoneCall } from "react-icons/lu";
import { IoMenu } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <header className="py-[24px]">
        <div className="container">
          <div className="flex justify-between items-center gap-[10px] xl:gap-[30px] lg:gap-[20px]">
            <button className="block text-[10px] text-white font-medium md:hidden sm:text-[12px] sm:font-bold">
              <IoMenu className="text-[30px] text-[#65906C] sm:text-[40px]" />{" "}
              МЕНЮ
            </button>
            <a
              href="#"
              draggable="false"
              className="text-[22px] text-white whitespace-nowrap xl:text-[30px] sm:text-[30px]"
            >
              Gurman Express
            </a>
            <form className="justify-between gap-[10px] p-[12px] rounded-[10px] bg-[#504B4A] items-center max-w-[380px] w-full xl:p-[14px] xl:max-w-[555px] md:flex hidden">
              <CiLocationOn className="text-[#CFCFCF] text-[22px] lg:text-[24px]" />
              <input
                type="text"
                placeholder="Введите адрес доставки"
                className="flex-2 w-full font-normal text-[16px] text-[#CFCFCF] lg:text-[18px]"
              />
              <CiSearch className="text-[#CFCFCF] text-[22px] lg:text-[24px]" />
            </form>
            <a
              href="tel:+998 95 505 69 69:+998 91 515 69 69"
              className=" md:flex  hidden gap-[10px] items-center"
            >
              <div className="items-center justify-center w-[40px] h-[40px] shrink-0 rounded-[50%] text-white text-[18px] bg-gradient-to-br from-[#618967] to-[#72A479] transition-all duration-300 hover:brightness-90 md:flex hidden">
                <LuPhoneCall />
              </div>
              <div className="hidden lg:flex flex-col">
                <span className="text-[#CFCFCF] text-[12px] font-normal">
                  Контакты:
                </span>
                <h3 className="text-[15px] whitespace-nowrap text-white font-bold xl:text-[16px]">
                  +998 95 505 69 69
                </h3>
              </div>
            </a>
            <div className="w-[2px] h-[34px] bg-[#FFFFFF4D] xl:h-[42px] lg:h-[38px] max-md:hidden"></div>
            <Link
              to="/korzina"
              href="#"
              className="flex items-center md:flex-row flex-col gap-[2px] md:gap-[20px] bg-gradient-to-br from-[#618967] to-[#72A479] py-[4px] px-[8px] rounded-[10px] transition-all duration-300 hover:brightness-90 xl:py-[12px] xl:px-[24px] md:py-[10px] md:px-[18px] sm:gap-[5px] sm:px-[10px]"
            >
              <span className="text-[24px] text-white md:hidden sm:text-[28px]">
                <TiShoppingCart />
              </span>
              <span className="w-[56px] h-[2px] bg-[#FFFFFF4D] md:hidden"></span>
              <span className="text-white text-[12px] font-semibold sm:text-[14px]">
                Корзина
              </span>
              <span className="w-[2px] h-[32px] bg-[#FFFFFF4D] max-md:hidden  "></span>
              <span className="md:flex hidden items-center justify-center w-[24px] h-[24px] text-[12px] font-semibold bg-white rounded-[50%]">
                0
              </span>
            </Link>
            <div className="w-[2px] h-[34px] bg-[#FFFFFF4D] xl:h-[42px] lg:h-[38px] max-md:hidden"></div>
            <a
              href="#"
              className="py-[10px] px-[12px] border border-[#FFFFFF4D] rounded-[10px] transition-all duration-300 hover:brightness-80 gap-[10px] items-center text-[18px] text-white font-medium xl:py-[12px] xl:px-[20px] lg:py-[10px] lg:px-[18px] md:flex hidden"
            >
              <CiUser className="text-[22px]" />
              <span className="lg:flex hidden">Войти</span>
            </a>
          </div>
          <form className="justify-between gap-[10px] p-[8px] max-md:flex hidden rounded-[10px] bg-[#504B4A] items-center w-full xl:p-[14px] xl:max-w-[555px] mt-[10px] sm:p-[10px]">
            <CiLocationOn className="text-[#CFCFCF] text-[22px] lg:text-[24px]" />
            <input
              type="text"
              placeholder="Введите адрес доставки"
              className="flex-2 w-full font-normal text-[14px] text-[#CFCFCF] lg:text-[18px] sm:text-[16px]"
            />
            <CiSearch className="text-[#CFCFCF] text-[22px] lg:text-[24px]" />
          </form>
        </div>
      </header>
    </>
  );
}

export default Header;
