import { PageHeroSection, ContactInfoSection, MapSection } from '../Components/CommonComponents'
import JsonData from '../Data/Data.json'
import { SubmitButtonLoader } from '../Components/SubmitButtonLoader'
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';

const url = `https://my-portfolio-api-9i61.onrender.com/api/v1/contact`

const toastObj = {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
}


const InputField = ({ inputs, handleInput, label, type, fieldName, width=null }) => {
    return (
        <>
            {(type === 'text' || type === 'email') &&
                <div className={`${width === 'full' ? 'sm:col-span-2' : 'sm:col-span-1'}`}>
                    <label htmlFor={fieldName} className="block text-gray-600 font-medium">
                        {label}
                    </label>
                    <input
                        type={type}
                        id={fieldName}
                        name={fieldName}
                        onChange={(e) => handleInput(e)}
                        className="mt-2 block w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                </div>
            }

            {(type === 'textarea') &&
                <div className="sm:col-span-2">
                    <label htmlFor={fieldName} className="block text-gray-600 font-medium">
                        {label}
                    </label>
                    <textarea
                        id={fieldName}
                        name={fieldName}
                        rows="5"
                        onChange={(e) => handleInput(e)}
                        className="mt-2 block w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        required
                    ></textarea>
                </div>
            }
        </>
    )
}

const ContactUs = () => {
    const dataList = Object.values(JsonData.contactUs)

    const [inputs, setInputs] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)

    const handleInput = (event) => {
        const fieldName = event.target.name
        const fieldValue = event.target.value
        setInputs((prevValue) => ({ ...prevValue, [fieldName]: fieldValue }))
    }

    const submitFormData = (async (event) => {
        try {
            event.preventDefault()
            setIsSubmit(prevValue => !prevValue)
            const response = await fetch(url, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(inputs)
            })

            const prx = await response.json()

            if (prx.status === 'success') {
                toast.success(prx?.message, toastObj)
                document.contactForm.reset()
            } else {
                toast.error(prx?.message, toastObj)
            }
            setIsSubmit(prevValue => !prevValue)

        } catch (error) {
            toast.success(error?.message, toastObj)
            setIsSubmit(prevValue => !prevValue)
        }
    })

    return (
        <>
            {/* Hero Section */}
            <PageHeroSection title='Contact Us' subTitle='We’d love to hear from you!' />

            {/* Contact Info Section */}
            <ContactInfoSection dataList={dataList} />


            {/* Contact Form Section */}
            <section className="bg-white">
                <div className="container mx-auto py-16 px-4">
                    <div className="bg-white shadow-lg rounded-lg p-8">
                        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Send Us a Message</h2>
                        <form className="grid grid-cols-1 sm:grid-cols-2 gap-6" onSubmit={submitFormData} name='contactForm'>
                            {/* Name Input */}

                            <InputField inputs={inputs} handleInput={handleInput} label='Name' type='text' fieldName='name' />
                            <InputField inputs={inputs} handleInput={handleInput} label='Email' type='email' fieldName='email' />
                            <InputField inputs={inputs} handleInput={handleInput} label='Subject' type='text' fieldName='subject' width='full'/>
                            <InputField inputs={inputs} handleInput={handleInput} label="Message" type='textarea' fieldName='message' />

                            {/* Submit Button */}
                            <div className="sm:col-span-2">
                                <button
                                    disabled={isSubmit}
                                    type="submit"
                                    className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-300"
                                >
                                    {isSubmit ? 'Please wait. . .' : 'Send Message'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>


            {/* Map Section */}
            <MapSection />
            <ToastContainer />

        </>
    );
}

export default ContactUs