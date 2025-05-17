import React, { useState } from 'react'
import ChangePass from './ChangePass'
import { CiEdit } from 'react-icons/ci';
import { Button, Form, Input, Select } from 'antd';
import backImg from '../../assets/Home/backImage.png'
import { IoIosArrowForward } from 'react-icons/io';
const UpdateProfile = () => {
    const options = [];
    for (let i = 10; i < 36; i++) {
        options.push({
            value: i.toString(36) + i,
            label: i.toString(36) + i,
        });
    }

    const [image, setImage] = useState();
    const [tab, setTab] = useState(
        new URLSearchParams(window.location.search).get("tab") || "Profile"
    );

    const handlePageChange = (tab) => {
        setTab(tab);
        const params = new URLSearchParams(window.location.search);
        params.set("tab", tab);
        window.history.pushState(null, "", `?${params.toString()}`);
    };

    const handleChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    const onFinish = (values) => {
        console.log(values)
    };
    return (
        <div>
            <div
                className="relative bg-cover bg-center py-36 text-white"
                style={{ backgroundImage: `url(${backImg})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-black opacity-25"></div>

                <div className="relative z-10 h-full container m-auto">
                    <h1 className='text-3xl font-semibold pb-3'>Profile</h1>
                    <p className='flex items-center gap-2'>Home <IoIosArrowForward /> Edit Profile</p>
                </div>
            </div>
            <div className='p-10'>
                <div className="bg-white shadow-lg max-w-4xl m-auto ">

                    <div className=" py-10 px-4 lg-px-0">

                        <div className="flex justify-center items-center gap-5">
                            <div>
                                <div className="relative w-[140px] h-[124px] mx-auto">
                                    <input
                                        type="file"
                                        onInput={handleChange}
                                        id="img"
                                        style={{ display: "none" }}
                                    />
                                    <img
                                        style={{ width: 140, height: 140, borderRadius: "100%" }}
                                        src={`${image
                                            ? URL.createObjectURL(image)
                                            : `dd`
                                            }`}
                                        // src={img}
                                        alt=""
                                        className="shadow-2xl object-cover"
                                    />

                                    {tab === "Profile" && (
                                        <label
                                            htmlFor="img"
                                            className="
                            absolute top-1/2 -right-2
                            bg-white
                            rounded-full
                            w-6 h-6
                            flex items-center justify-center
                            cursor-pointer
                        "
                                        >
                                            <CiEdit color="#929394" />
                                        </label>
                                    )}
                                </div>
                            </div>
                            <div className="">
                                <div>
                                    <h2 className="text-sm text-blue-500">Hello</h2>
                                    <h1 className="text-2xl ">fdgf </h1>
                                </div>
                            </div>
                        </div>


                      <div className='flex justify-center pt-11'>
                          <div className="flex border border-[#16A34A] py-1 px-1  my-3">
                            <p
                                onClick={() => handlePageChange("Profile")}
                                className={`${tab === "Profile"
                                    ? "bg-[#16A34A] px-12 py-2 font-bold text-white"
                                    : " font-normal text-black"
                                    }  cursor-pointer px-12 py-2`}
                            >
                                Edit Profile
                            </p>
                            <p
                                onClick={() => handlePageChange("Change Password")}
                                className={`${tab === "Change Password"
                                    ? "bg-[#16A34A] px-9 py-2 font-bold text-white "
                                    : " font-normal text-black "
                                    }  cursor-pointer px-9 py-2`}
                            >
                                Change Password
                            </p>
                        </div>
                      </div>

                        <div className="  px-4">
                            <div className=" ">
                                {tab === "Profile" ? (
                                    <div className="  rounded-lg p-6">
                                        <h1 className='text-2xl pb-2 font-semibold'>Edit Your Profile</h1>
                                        <Form onFinish={onFinish} layout="vertical" >
                                            <Form.Item
                                                name="fullName"
                                                label={
                                                    <p className="text-[black] text-[16px] leading-5 font-normal">
                                                        Full Name
                                                    </p>
                                                }
                                            >
                                                <Input
                                                    style={{
                                                        width: "100%",
                                                        height: 40,
                                                        border: "1px solid #919191",
                                                        borderRadius: "8px",
                                                        color: "#919191",
                                                        outline: "none",
                                                    }}
                                                    className="text-[16px] leading-5"
                                                    placeholder="name123"
                                                />
                                            </Form.Item>
                                            <Form.Item
                                                name="email"
                                                label={
                                                    <p className="text-[black] text-[16px] leading-5 font-normal">
                                                        Email
                                                    </p>
                                                }
                                            >
                                                <Input
                                                    style={{
                                                        width: "100%",
                                                        height: 40,

                                                        borderRadius: "8px",
                                                        color: "#919191",

                                                        outline: "none",
                                                    }}
                                                    disabled
                                                    className="text-[16px] leading-5"
                                                    placeholder="xyz@gmail.com"
                                                />
                                            </Form.Item>
                                            <Form.Item
                                                name="phoneNumber"
                                                label={
                                                    <p className="text-[black] text-[16px] leading-5 font-normal">
                                                        Phone Number
                                                    </p>
                                                }
                                            >
                                                <Input
                                                    style={{
                                                        width: "100%",
                                                        height: 40,

                                                        borderRadius: "8px",
                                                        color: "#919191",

                                                        outline: "none",
                                                    }}
                                                    className="text-[16px] leading-5"
                                                    placeholder="+9900700007"
                                                />
                                            </Form.Item>
                                            <Form.Item
                                                label={
                                                    <p className="text-[black] text-[16px] leading-5 font-normal">
                                                        Product Of interests
                                                    </p>
                                                }>
                                                <Select
                                                    mode="tags"
                                                    style={{
                                                        width: "100%",
                                                        height: 40,

                                                        borderRadius: "8px",
                                                        color: "#919191",

                                                        outline: "none",
                                                    }}
                                                    placeholder="Tags Mode"
                                                    onChange={handleChange}
                                                    options={options}
                                                />
                                            </Form.Item>

                                            

                                            <Form.Item
                                                name="designation"
                                                label={
                                                    <p className="text-[black] text-[16px] leading-5 font-normal">
                                                        Location
                                                    </p>
                                                }
                                            >
                                                <Input
                                                    style={{
                                                        width: "100%",
                                                        height: 40,

                                                        borderRadius: "8px",
                                                        color: "#919191",

                                                        outline: "none",
                                                    }}
                                                    className="text-[16px] leading-5"
                                                    placeholder="Actor"
                                                />
                                            </Form.Item>
                                            <Form.Item
                                                name="About"
                                                label={
                                                    <p className="text-[black] text-[16px] leading-5 font-normal">
                                                        About Me
                                                    </p>
                                                }
                                            >
                                                <Input.TextArea
                                                    style={{
                                                        width: "100%",
                                                        height: 40,
                                                        
                                                        borderRadius: "8px",
                                                        color: "#919191",

                                                        outline: "none",
                                                    }}
                                                    className="text-[16px] leading-5"
                                                    placeholder="79/A Joker Vila, Gotham City"
                                                />
                                            </Form.Item>

                                            <Form.Item
                                                style={{
                                                    marginBottom: 0,
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                }}
                                            >
                                                <Button
                                                    type="primary"
                                                    htmlType="submit"
                                                    block
                                                    style={{
                                                        width: 197,
                                                        height: 48,
                                                        color: "#FCFCFC",
                                                        background: "#2E4CB9",
                                                    }}
                                                    className="font-normal text-[16px] leading-6 bg-[#2E4CB9]"
                                                >
                                                    Save Changes
                                                </Button>
                                            </Form.Item>
                                        </Form>
                                    </div>
                                ) : (
                                    <div className="  rounded-lg p-6">
                                        <h1 className="text-center text-secondary leading-7 text-2xl font-medium mb-7">
                                            Change Password
                                        </h1>
                                        <ChangePass></ChangePass>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateProfile