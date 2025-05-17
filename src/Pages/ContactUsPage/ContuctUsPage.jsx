import React from 'react'
import img from '../../assets/Home/contact.png'
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare, FaWhatsappSquare } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { Form, Input } from 'antd'
export const ContuctUsPage = () => {
  const handleSubmit = async (values) => {
    console.log(values)
  };
  return (
    <div className='container m-auto py-20'>
      <div className='flex items-center bg-white shadow-lg '>
        <div className='relative'>
          <img className='w-[600px]' src={img} alt="" />
          <div className='absolute  text-4xl px-7 pb-6 bottom-0 text-white'>
            <h1 className='text-xl pb-3'>Follow Us On</h1>
            <div className='flex gap-2'>
              <FaFacebookSquare />
              <FaTwitterSquare />
              <FaLinkedin />
              <AiFillInstagram />
              <FaWhatsappSquare />
            </div>
          </div>
        </div>
        <div className=' p-4 w-full px-20'>
          <h1 className='text-2xl font-semibold pb-1'>Get In Touch With Us</h1>
          <p className='pb-6'>There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</p>

          <Form onFinish={handleSubmit} layout="vertical">
            {/* Package Name */}
            <div className='grid grid-cols-2 gap-4'>
              <Form.Item
                label="First Name"
                name="first"
                rules={[{ required: true, message: "Please enter the First Name" }]}
              >
                <Input className="py-2" type="price" placeholder="First Name" />
              </Form.Item>

              <Form.Item
                label="Last Name"
                name="last"
                rules={[{ required: true, message: "Please enter the last Name" }]}
              >
                <Input className="py-2" type="price" placeholder="Last Name" />
              </Form.Item>
            </div>

            <Form.Item
              label="Email Address"
              name="email"
              rules={[{ required: true, message: "Please enter the email" }]}
            >
              <Input className="py-2" type="price" placeholder=" Email Address" />
            </Form.Item>
            <Form.Item
              label="Email Address"
              name="email"
              rules={[{ required: true, message: "Please enter the email" }]}
            >
              <Input className="py-2" type="price" placeholder=" Email Address" />
            </Form.Item>

            <Form.Item
              label="Company Name"
              name="company"
              rules={[{ required: true, message: "Please enter the company" }]}
            >
              <Input className="py-2" type="price" placeholder="Company Name" />
            </Form.Item>

             <Form.Item
            label="Details"
            name="details"
            rules={[{ required: true, message: "Please enter details" }]}
          >
            <Input.TextArea
              className="py-2"
              rows={4}
              type="price"
              placeholder="Enter Category"
            />
          </Form.Item>


            <div className="flex gap-3 mt-4">

              <button
                type="submit"

                className="px-7 py-2  bg-[#16A34A] text-white rounded"
              >
                Send Message
              </button>
            </div>
          </Form>
        </div>
      </div>

    </div>
  )
}
