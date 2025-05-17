import React from 'react'
import backImg from '../../assets/Home/backImage.png'
import { IoIosArrowForward } from 'react-icons/io'
const PrivacyPolicy = () => {
    return (
        <div>
            <div
                className="relative bg-cover bg-center py-36 text-white"
                style={{ backgroundImage: `url(${backImg})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-black opacity-25"></div>

                <div className="relative z-10 h-full container m-auto">
                    <h1 className='text-3xl font-semibold pb-3'>Privacy & Policy</h1>
                    <p className='flex items-center gap-2'>Home <IoIosArrowForward /> Privacy & Policy</p>
                </div>
            </div>
            <div className='container m-auto py-16'>
                Privacy Policy
                Welcome to iLera . These Terms and Conditions ("Terms") govern your use of our services provided through the App. By accessing or using the App, you agree to comply with and be bound by these Terms. If you do not agree with these Terms, you should not use the App.
                Services
                iLera allows users to book appointments with healthcare providers. We facilitate the booking process but are not responsible for the medical services provided by healthcare professionals. All medical services are provided by independent healthcare professionals.
                User Responsibilities
                Account Creation: To use certain features of the App, you may need to create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
                Confidentiality: You are responsible for maintaining the confidentiality of your account information and password. You agree to notify us immediately of any unauthorized use of your account.
                Use of Services: You agree to use the App only for lawful purposes and in accordance with these Terms. You will not use the App in any way that could damage, disable, overburden, or impair the App or interfere with any other party's use of the App.
                Appointments and Cancellations
                Booking: By booking an appointment through the App, you agree to provide accurate information. The healthcare provider has the right to accept or decline your appointment request.
                Cancellations: If you need to cancel an appointment, you must do so according to the cancellation policy of the healthcare provider. Failure to cancel within the stipulated time may result in a cancellation fee.
                Payments
                Fees: Any fees for services provided through the App are set by the healthcare providers. The App may facilitate the payment process but is not responsible for the services provided.
                Payment Information: You agree to provide valid payment information and authorize the App to charge your payment method for the services provided by the healthcare provider.
                Privacy Your use of the App is also gov
                Disclaimers and Limitation of Liability
                No Medical Advice: The App does not provide medical advice. Any content accessed through the App is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment.
                No Warranties: The App is provided "as is" without warranties of any kind, either express or implied.
                Limitation of Liability: To the maximum extent permitted by law, [App Name] shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (i) your use or inability to use the App; (ii) any unauthorized access to or use of our servers and/or any personal information stored therein.
                Changes to Terms
                We may update these Terms from time to time. If we make material changes, we will notify you by posting the updated Terms on the App or through other communications. Your continued use of the App after the changes become effective means you agree to the updated Terms.
            </div>
        </div>
    )
}

export default PrivacyPolicy