import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFlip, Navigation } from "swiper/modules";
import { useForm } from "react-hook-form";

import { getAllProducts, updateProduct } from "@api/services/productService";
import { register, login, refreshToken } from "@api/services/userService";
import { InputText } from "@components/dumbs/custom/inputs/InputText/InputText";
import { InputRadius } from "@components/dumbs/custom/inputs/InputRadius/InputRadius";
import { SubmitButton } from "@components/dumbs/custom/inputs/SubmitButton/SubmitButton";
import { bufferArrayToImageURL } from "@utils/bufferArrayToImageURL";
import { toastError, toastSuccess, toastInfo } from "@utils/toast";

import Register from "./assets/images/register.svg";
import Login from "./assets/images/login.svg";

import "./assets/css/register-login.css";

export function RegisterLogin() {
    // STATES
    const [products, setProducts] = useState([]);

    // REFS
    const swiperRef = useRef(null);

    // FORM HOOKS (Separate for Register and Login)
    const {
        register: registerFormRegister,
        watch: registerFormWatch,
        handleSubmit: handleRegisterSubmit,
        formState: { errors: registerErrors }
    } = useForm();

    const {
        register: loginFormRegister,
        handleSubmit: handleLoginSubmit,
        formState: { errors: loginErrors }
    } = useForm();

    const registerPassword = registerFormWatch("registerPassword");

    // EFFECTS
    useEffect(() => {
        async function fetchProductsData() {
            const products = await getAllProducts();
            setProducts(products);
        }

        fetchProductsData();
    }, []);

    // HANDLES
    function handleOnSubmitValidRegisterForm(registerFormData) {
        const { registerUsername, registerPassword, role } = registerFormData;

        try {
            register(registerUsername, registerPassword, role)
                .then(() => {
                    toastSuccess("Registration successful!");
                    toastInfo("Now login with your new Account.", { autoClose: 10000 });
                    swiperRef.current.slideNext();
                })
                .catch(error => {
                    toastError(error.response.data?.error);
                });
        } catch (error) {
            toastError("An Unexpected error occurred");
        }
    }

    function handleOnSubmitValidLoginForm(loginFormData) {
        const { loginUsername, loginPassword } = loginFormData;

        try {
            login(loginUsername, loginPassword)
                .then(response => {
                    toastSuccess("Login successful!");

                    localStorage.setItem("accessToken", response.data.accessToken);
                })
                .catch(error => {
                    toastError(error.response.data?.error);
                });
        } catch (error) {
            toastError("An Unexpected error occurred");
        }
    }

    async function fetchProtectedResource() {
        try {
            const accessToken = localStorage.getItem("accessToken");
            await resourceWithToken(accessToken);
        } catch (error) {
            if(error.response.data.error == "Token expired") {
                refreshToken()
                    .then(response => {
                        localStorage.setItem("accessToken", response.data.accessToken);
                        fetchProtectedResource();
                    });
            }
        }
    }

    function handleNextSlide() {
        swiperRef.current.slideNext();
    }

    function handlePrevSlide() {
        swiperRef.current.slidePrev();
    }

    return (
        <main>
            {/* PRODUCTS GALLERY */}
            <section className="flex flex-col gap-12">
                <header className="section flex flex-col gap-4 pb-4 text-center">
                    <h2>Unlock the Power of Your Account</h2>
                    <p>Register or login to access exclusive benefits and personalized shopping experience.</p>
                </header>

                <article>
                    <Swiper
                        className="swiper-gallery"
                        modules={[Autoplay]}
                        spaceBetween={10}
                        slidesPerView={2.5}
                        centeredSlides={true}
                        loop={products.length >= 3}
                        speed={8000}
                        allowTouchMove={false}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 9,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 10,
                            },
                        }}
                    >
                        {products.slice(0, 20).map(product => <SwiperSlide key={product.id}><img className="w-full max-h-80 object-fill" src={bufferArrayToImageURL(product.image.data)} alt="" /></SwiperSlide>)}
                    </Swiper>

                    <Swiper
                        className="swiper-gallery mt-2"
                        modules={[Autoplay]}
                        spaceBetween={10}
                        slidesPerView={2.5}
                        centeredSlides={true}
                        loop={products.length >= 3}
                        speed={8000}
                        allowTouchMove={false}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                            reverseDirection: true,
                        }}
                        breakpoints={{
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 9,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 10,
                            },
                        }}
                    >
                        {products.slice(-20).map(product => <SwiperSlide key={product.id}><img className="w-full max-h-80 object-fill" src={bufferArrayToImageURL(product.image.data)} alt="" /></SwiperSlide>)}
                    </Swiper>
                </article>
            </section>

            {/* REGISTER / LOGIN */}
            <Swiper
                className="section w-3/4 relative m-auto my-24 p-0 rounded-lg pointer-events-none md:w-10/12"
                wrapperClass="swiper-wrapper swiper-wrapper-rg"
                effect={"flip"}
                grabCursor={false}
                navigation={true}
                modules={[EffectFlip, Navigation]}
                onSwiper={swiper => (swiperRef.current = swiper)}
            >
                {/* REGISTER FORM */}
                <SwiperSlide
                    className="flex flex-col gap-4 shadow-lg px-4 py-8 md:px-8 md:py-16 lg:grid lg:grid-cols-2 lg:items-center lg:gap-4"
                    tag="section"
                >
                    <div>
                        <h3 className="text-center">Create your Account</h3>

                        <form
                            className="flex flex-col gap-2 mt-8"
                            onSubmit={handleRegisterSubmit(handleOnSubmitValidRegisterForm)}
                        >
                            <InputText
                                label="Username"
                                id="register-username"
                                type="text"
                                placeholder="Your username"
                                register={registerFormRegister("registerUsername", {
                                    required: "The username is required",
                                    minLength: {
                                        value: 5,
                                        message: "The username must be greater than 5",
                                    },
                                    maxLength: {
                                        value: 50,
                                        message: "The username must be less than 50",
                                    },
                                    pattern: {
                                        value: /^[A-Za-z][a-zA-Z0-9]+$/,
                                        message: "The username must start with a letter and contain only letters and numbers",
                                    }
                                })}
                                errorMessage={registerErrors.registerUsername?.message}
                            />

                            <InputText
                                label="Password"
                                id="register-password"
                                type="password"
                                placeholder="Your password"
                                register={registerFormRegister("registerPassword", {
                                    required: "The password is required",
                                    minLength: {
                                        value: 8,
                                        message: "The password must be greater than 8",
                                    },
                                    maxLength: {
                                        value: 50,
                                        message: "The password must be less than 50",
                                    }
                                })}
                                errorMessage={registerErrors.registerPassword?.message}
                            />

                            <InputText
                                label="Confirm Password"
                                id="register-confirm-password"
                                type="password"
                                placeholder="Confirm Password"
                                register={registerFormRegister("registerConfirmPassword", {
                                    required: "The password is required",
                                    validate: value => value === registerPassword || "The passwords do not match",
                                })}
                                errorMessage={registerErrors.registerConfirmPassword?.message}
                            />

                            <div className="flex flex-col gap-2">
                                <p className="font-semibold">Role</p>
                                <div className="flex gap-4">
                                    <InputRadius
                                        name="register-user-role"
                                        id="register-user-role-user"
                                        label="User"
                                        value="USER"
                                        checked={true}
                                        register={registerFormRegister("role", {
                                            required: "Please select a role"
                                        })}
                                        errorMessage={registerErrors.role?.message}
                                    />
                                    <InputRadius
                                        name="register-user-role"
                                        id="register-user-role-seller"
                                        label="Seller"
                                        value="SELLER"
                                        register={registerFormRegister("role")}
                                    />
                                </div>
                            </div>

                            <SubmitButton className="btn-primary w-full mt-4" value="Sign Up" />
                        </form>
                    </div>

                    <div className="flex flex-col gap-4 items-center">
                        <img className="hidden lg:block" src={Register} alt="" />
                        <p className="text-center text-sm">
                            Already have an account?
                            <br />
                            <span
                                className="text-link-primary cursor-pointer hover:underline"
                                onClick={handleNextSlide}
                            >
                                Sign in
                            </span>
                        </p>
                    </div>
                </SwiperSlide>

                {/* LOGIN FORM */}
                <SwiperSlide
                    className="flex flex-col-reverse gap-4 shadow-lg px-4 py-8 md:px-8 md:py-16 lg:grid lg:grid-cols-2 lg:items-center lg:gap-4"
                    tag="section"
                >
                    <div className="flex flex-col gap-4 items-center">
                        <img className="hidden lg:block" src={Login} alt="" />
                        <p className="text-center text-sm">
                            Do you not have an account?
                            <br />
                            <span
                                className="text-link-primary cursor-pointer hover:underline"
                                onClick={handlePrevSlide}
                            >
                                Sign Up
                            </span>
                        </p>
                    </div>

                    <div>
                        <h3 className="text-center">Sign In</h3>

                        <form
                            className="flex flex-col gap-2 mt-8"
                            onSubmit={handleLoginSubmit(handleOnSubmitValidLoginForm)}
                        >
                            <InputText
                                label="Username"
                                id="login-username"
                                type="text"
                                placeholder="Your username"
                                register={loginFormRegister("loginUsername", {
                                    required: "The username is required"
                                })}
                                errorMessage={loginErrors.loginUsername?.message}
                            />

                            <InputText
                                label="Password"
                                id="login-password"
                                type="password"
                                placeholder="Your password"
                                register={loginFormRegister("loginPassword", {
                                    required: "The password is required"
                                })}
                                errorMessage={loginErrors.loginPassword?.message}
                            />

                            <SubmitButton className="btn-primary w-full mt-4" value="Sign In" />
                        </form>
                        <button className="bg-red w-20 h-20" onClick={fetchProtectedResource}>TEST ME</button>
                    </div>
                </SwiperSlide>
            </Swiper>
        </main>
    );
}
