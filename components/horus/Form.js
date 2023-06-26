import React from 'react'
import Modal from 'react-modal'
import en from '../../locales/en'
import vi from '../../locales/vi'
import { useForm } from 'react-hook-form'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        maxHeight: '80%',
        maxWidth: '80%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
}

// Form initial state
const INITIAL_STATE = {
    name: '',
    email: '',
    phone: '',
    demand: '',
    company: '',
}

const Form = ({ language }) => {
    const [t, setT] = React.useState(en)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    React.useEffect(() => {
        let lang = localStorage.getItem('lang')
        if (lang === 'vi') {
            setT(vi)
        } else {
            setT(en)
        }
    }, [language])

    const [modalIsOpen, setIsOpen] = React.useState(true)

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00'
        document.body.style.overflow = 'hidden'
    }

    function closeModal() {
        setIsOpen(false)
        document.body.style.overflow = 'scroll'
    }

    // const onSubmit = async (e) => {
    //     try {
    //         const url = 'https://blog-local.tunnel.techainer.com/api/contact/'
    //         let form_data = new FormData()
    //         form_data.append('name', e.name)
    //         form_data.append('email', e.email)
    //         form_data.append('phone', e.phone)
    //         form_data.append('subject', e.subject)
    //         form_data.append('message', e.message)

    //         const req = await axios.post(url, form_data, {
    //             headers: {
    //                 Authorization:
    //                     'token 4309695a9c83b777fc54d87a7ab54a582f0747ae',
    //             },
    //         })
    //         if (req.data.status) {
    //             alertContent()
    //             document.getElementById('contactForm').reset()
    //         } else alertWrongPhone()
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    return (
        <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <div className="horus-form">
                <div className="section-title">
                    <h2>{t.horus.form.title}</h2>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="info-side">
                            <div className="contact-info">
                                {t.horus.form.info}
                                <p>
                                    COO:{' '}
                                    <a href="tel:+84 394 869 567">
                                        +84 394 869 567
                                    </a>
                                </p>
                            </div>
                            <div className="contact-address">
                                {t === en ? 'Address' : 'Địa chỉ'}
                                <p>{t.horus.form.address}</p>
                            </div>
                            <div>
                                {t === en
                                    ? 'Some information about this product '
                                    : 'Thông tin về sản phẩm này '}{' '}
                                <br />
                                <iframe
                                    width="320"
                                    height="280"
                                    src="https://www.youtube.com/embed/KyvVqyWtahw"
                                    title="Horus - Cảnh báo sớm cháy khói"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                ></iframe>
                            </div>

                            {/* <div className="contact-image">
                                <img
                                    src="../../static/images/horus-image/fire.png"
                                    alt="fire"
                                />
                            </div> */}
                        </div>
                    </div>
                    <div className="container col-lg-6 col-md-12">
                        <div className="row align-items-center">
                            <form
                                id="contactForm"
                                // onSubmit={handleSubmit(onSubmit)}
                            >
                                <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group horus-form-input">
                                            <label>{t.horus.form.name}</label>
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
                                                {errors.name &&
                                                    'Name is required.'}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group horus-form-input">
                                            <label>{t.horus.form.email}</label>
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

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group horus-form-input">
                                            <label>{t.horus.form.phone}</label>
                                            <input
                                                type="text"
                                                name="phone"
                                                id="number"
                                                className="form-control"
                                                {...register('phone', {
                                                    required: false,
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
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group horus-form-input">
                                            <label>{t.horus.form.demand}</label>
                                            <input
                                                type="text"
                                                name="demand"
                                                id="demand"
                                                className="form-control"
                                                placeholder={t === en ? "Looking for a partner or making a purchase" : "Tìm kiếm đối tác hoặc mua hàng"}
                                                {...register('demand', {
                                                    required: false,
                                                })}
                                            />
                                            <div
                                                className="invalid-feedback"
                                                style={{ display: 'block' }}
                                            >
                                                {errors.demand &&
                                                    'Demand is required.'}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group horus-form-input">
                                            <label>
                                                {t.horus.form.company}
                                            </label>
                                            <input
                                                type="text"
                                                name="company"
                                                id="company"
                                                className="form-control"
                                                {...register('company', {
                                                    required: false,
                                                })}
                                            />
                                            <div
                                                className="invalid-feedback"
                                                style={{ display: 'block' }}
                                            >
                                                {errors.company &&
                                                    'Company is required.'}
                                            </div>
                                        </div>
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
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default Form
