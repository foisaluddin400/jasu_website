import React, { useState } from "react";
import { DownOutlined, MenuOutlined, MoonOutlined, SunOutlined } from "@ant-design/icons";
import { Dropdown, Space, Drawer, Flex, Segmented } from "antd";
import Logo from "../assets/Home/logo.png";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";

export const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [size, setSize] = useState('large');
  const showDrawer = () => {
    setDrawerOpen(true);
  };

  const onClose = () => {
    setDrawerOpen(false);
  };

  // const dropdownItemsCompany = [
  //   {
  //     label: (
  //       <Link to="/company/about-us" rel="noopener noreferrer">
  //         About Us
  //       </Link>
  //     ),
  //     key: "about-us",
  //   },
  //   {
  //     label: (
  //       <Link to="/company/tech-pertners" rel="noopener noreferrer">
  //         Tech Partners
  //       </Link>
  //     ),
  //     key: "techPartners",
  //   },
  // ];

  // const dropdownItemsServices = [
  //   {
  //     label: (
  //       <Link to="/services/Structure-Cabling" rel="noopener noreferrer">
  //         Structure Cabling (Copper And Fiber)
  //       </Link>
  //     ),
  //     key: "structured",
  //   },
  //   {
  //     label: (
  //       <Link to="/services/Break-FixServices" rel="noopener noreferrer">
  //         Break/Fix Services
  //       </Link>
  //     ),
  //     key: "BreakFixServices",
  //   },
  // ];

  const dropdownItemsProfile = [
    {
      label: (
        <Link to="/profilePage" rel="noopener noreferrer">
          Profile
        </Link>
      ),
      key: "profilepage",
    },
    {
      label: (
        <Link to="/profilePage/ongoing-tickets" rel="noopener noreferrer">
          Ongoing Tickets
        </Link>
      ),
      key: "ongoing",
    },
  ];

  const items = [
    {
      key: "home",
      label: <Link to="/">Home</Link>,
    },
    // {
    //   key: "company",
    //   label: (
    //     <Dropdown menu={{ items: dropdownItemsCompany }} trigger={["click"]}>
    //       <Link onClick={(e) => e.preventDefault()}>
    //         <Space>
    //           Company
    //           <DownOutlined />
    //         </Space>
    //       </Link>
    //     </Dropdown>
    //   ),
    // },
    // {
    //   key: "services",
    //   label: (
    //     <Dropdown menu={{ items: dropdownItemsServices }} trigger={["click"]}>
    //       <Link onClick={(e) => e.preventDefault()}>
    //         <Space>
    //           Services
    //           <DownOutlined />
    //         </Space>
    //       </Link>
    //     </Dropdown>
    //   ),
    // },
    {
      key: "contactUs",
      label: <Link to="/contactUs">Contact Us</Link>,
    },
    {
      key: "blog",
      label: <Link to="/catelogue">Catelogue</Link>,
    },
    {
      key: "submitTicket",
      label: <Link to="/submit-a-ticket">Submit A Ticket</Link>,
    },
    {
      key: "profile",
      label: (
        <Dropdown menu={{ items: dropdownItemsProfile }} trigger={["click"]}>
          <Link onClick={(e) => e.preventDefault()}>
            <Space>
              <FaRegUserCircle />
              <DownOutlined />
            </Space>
          </Link>
        </Dropdown>
      ),
    },
  ];

  return (
    <div className="bg-white text-black py-5 shadow-lg">
      {/* Desktop Navbar */}
      <nav className="flex items-center lg:justify-between justify-between container m-auto">
        <img className="w-[100px]" src={Logo} alt="Logo" />
        <ul className="hidden md:flex space-x-9">
          {items.map((item) => (
            <li key={item.key} className="list-none hover:bg-[#F0FDF4] hover:text-[#16A34A] hover:border border-white border rounded hover:border-[#16A34A] px-4 py-2">
              {item.label}
            </li>
          ))}
        </ul>
        <button
          className="md:hidden text-2xl"
          onClick={showDrawer}
        >
          <MenuOutlined />
        </button>
        <div className="flex gap-5 items-center">
          <BiSearchAlt className="text-2xl"/>

          <div>
            <Flex gap="small" align="flex-start" vertical>

              <Segmented
                size={size}
                shape="round"
                options={[
                  { value: 'light', icon: <SunOutlined /> },
                  { value: 'dark', icon: <MoonOutlined /> },
                ]}
              />
            </Flex>
          </div>
          <button className="bg-[#205D39] text-white px-4 py-2 rounded ">Login</button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <Drawer title="" placement="right" onClose={onClose} open={drawerOpen}>
        <ul className="flex flex-col space-y-4">
          {items.map((item) => (
            <li key={item.key} className="list-none">
              {item.label}
            </li>
          ))}
        </ul>
      </Drawer>
    </div>
  );
};
