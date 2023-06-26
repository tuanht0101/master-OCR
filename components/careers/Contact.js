import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
import baseUrl from '../../utils/baseUrl'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { set } from 'lodash'
import { resetCalls } from 'react-ga'
// import Dropzone from './DropZone'
import Dropzone from 'react-dropzone'
import en from '../../locales/en'
import vi from '../../locales/vi'

const alertContent = () => {
    MySwal.fire({
        title: 'Thank you!',
        text: 'Your contact was send successfully. We will contact to you later',
        icon: 'success',
        // timer: 5000,
        timerProgressBar: true,
        showConfirmButton: true,
    })
}

const alertNoFile = () => {
    MySwal.fire({
        title: 'Error!',
        text: 'You have not uploaded your CV yet. Please check again',
        icon: 'error',
        // timer: 5000,
        timerProgressBar: true,
        showConfirmButton: true,
    })
}

const alertWrongPhone = () => {
    MySwal.fire({
        title: 'Error!',
        text: 'Your phone number does not exist. Please check again',
        icon: 'error',
        // timer: 5000,
        timerProgressBar: true,
        showConfirmButton: true,
    })
}

// Form initial state
const INITIAL_STATE = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    // contact_file: '',
    message: '',
}

const ContactForm = ({ language }) => {
    const [t, setT] = React.useState(en)

    React.useEffect(() => {
        if (language == 'vi') {
            setT(vi)
            setOutput(<p>Kéo thả hoặc chọn tệp CV của bạn vào đây</p>)
        } else if (language == 'en') {
            setOutput(<p>Drag your CV here or click to select it</p>)
        }
    }, [language])

    //Use for dropzone
    const [output, setOutput] = useState(
        <div>
            <p>{t.career.contact.cv}</p>
        </div>
    )

    const [dropFile, setDropFile] = useState()

    const handleDrop = (acceptedFiles) => {
        setDropFile(acceptedFiles[0])
        setOutput(<p>{acceptedFiles[0].path}</p>)
        // uploadFile(dropFile);
    }

    const resetFormData = (e) => {
        e.name = ''
        e.email = ''
        e.phone = ''
        e.subject = ''
        e.message = ''
        setDropFile(null)
        setOutput(<p>{t.career.contact.cv}</p>)
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (e) => {
        // e.preventDefault();
        try {
            if (dropFile) {
                const url = 'https://blog-local.tunnel.techainer.com/api/contact/'
                let form_data = new FormData()
                form_data.append('name', e.name)
                form_data.append('email', e.email)
                form_data.append('phone', e.phone)
                form_data.append('subject', e.subject)
                form_data.append('message', e.message)
                form_data.append('contact_file', dropFile)

                const req = await axios.post(url, form_data, {
                    headers: {
                        Authorization:
                            'token 4309695a9c83b777fc54d87a7ab54a582f0747ae',
                    },
                })
                // resetFormData(e)
                if (req.data.status) {
                    setDropFile(null)
                    setOutput(<p>{t.career.contact.cv}</p>)
                    alertContent()
                    document.getElementById('contactForm').reset()
                } else alertWrongPhone()
            } else alertNoFile()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="contact-area ptb-80 feedback-area">
            <div className="container">
                <div className="section-title">
                    <h2>{t.career.contact.title}</h2>
                    <div className="bar"></div>
                    <p>{t.career.contact.desc}</p>
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-3 col-md-1"></div>
                    <div className="col-lg-6 col-md-12">
                        <form
                            id="contactForm"
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <div className="row">
                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <label>{t.career.contact.name}</label>
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            {...register('name', {
                                                required: true,
                                            })}
                                        />
                                        <div
                                            className="invalid-feedback"
                                            style={{ display: 'block' }}
                                        >
                                            {errors.name && 'Name is required.'}
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <label>{t.career.contact.email}</label>
                                        <input
                                            type="text"
                                            name="email"
                                            className="form-control"
                                            {...register('email', {
                                                required: true,
                                                pattern:
                                                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
                                            })}
                                        />
                                        <div
                                            className="invalid-feedback"
                                            style={{ display: 'block' }}
                                        >
                                            {errors.email &&
                                                'Email is required.'}
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <label>{t.career.contact.phone}</label>
                                        <input
                                            type="text"
                                            name="phone"
                                            id="number"
                                            className="form-control"
                                            {...register('phone', {
                                                required: true,
                                                pattern: /^[0-9]+$/i,
                                            })}
                                        />
                                        <div
                                            className="invalid-feedback"
                                            style={{ display: 'block' }}
                                        >
                                            {errors.phone &&
                                                'Number is required.'}
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <label>
                                            {t.career.contact.subject}
                                        </label>
                                        <input
                                            type="text"
                                            name="subject"
                                            className="form-control"
                                            {...register('subject', {
                                                required: true,
                                            })}
                                        />
                                        <div
                                            className="invalid-feedback"
                                            style={{ display: 'block' }}
                                        >
                                            {errors.subject &&
                                                'Subject is required.'}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <label>
                                            {t.career.contact.message}
                                        </label>
                                        <textarea
                                            name="message"
                                            cols="30"
                                            rows="5"
                                            className="form-control"
                                            {...register('message', {
                                                required: true,
                                            })}
                                        />
                                        <div
                                            className="invalid-feedback"
                                            style={{ display: 'block' }}
                                        >
                                            {errors.message &&
                                                'Message is required.'}
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12">
                                    <Dropzone
                                        accept=".pdf, .doc"
                                        onDrop={handleDrop}
                                    >
                                        {({ getRootProps, getInputProps }) => (
                                            <div
                                                {...getRootProps({
                                                    className: 'dropzone',
                                                })}
                                            >
                                                <input {...getInputProps()} />
                                                <div>{output}</div>
                                            </div>
                                        )}
                                    </Dropzone>
                                </div>

                                <div className="col-lg-12 col-md-12">
                                    <div>
                                        <button
                                            type="submit"
                                            className="btn btn-primary contact-no-img"
                                        >
                                            {t.button.send}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-3 col-md-1"></div>
                </div>
            </div>

            {/* Shape Images */}
            <div className="shape1">
                <img src="../../static/images/shape1.png" alt="shape" />
            </div>
            <div className="shape3">
                <img src="../../static/images/shape3.svg" alt="shape" />
            </div>
            <div className="shape4">
                <img src="../../static/images/shape4.svg" alt="shape" />
            </div>
            <div className="shape6 rotateme">
                <img src="../../static/images/shape4.svg" alt="shape" />
            </div>
            <div className="shape7">
                <img src="../../static/images/shape4.svg" alt="shape" />
            </div>
            <div className="shape8 rotateme">
                <img src="../../static/images/shape2.svg" alt="shape" />
            </div>
        </div>
    )
}

export default ContactForm
