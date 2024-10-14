import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";

import { getAllProducts } from "@api/services/productService";
import { register as registerUser } from "@api/services/userService";
import { InputText } from "@components/dumbs/custom/inputs/InputText/InputText";
import { InputRadius } from "@components/dumbs/custom/inputs/InputRadius/InputRadius";
import { SubmitButton } from "@components/dumbs/custom/inputs/SubmitButton/SubmitButton";
import { bufferArrayToImageURL } from "@utils/bufferArrayToImageURL";
import { toastError, toastSuccess } from "@utils/toast";

import "./assets/css/register-login.css";

export function RegisterLogin() {
    // STATES
    const [products, setProducts] = useState([]);

    // FORM
    const { register, watch, handleSubmit, formState: {errors} } = useForm();

    const password = watch("password");

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
        const { username, password, role } = registerFormData;

        try {
            registerUser(username, password, role)
                .then(() => toastSuccess("Registration successful!"))
                .catch(error => {
                    toastError(error.response.data?.error);
                });
        } catch (error) {
            toastError("An Unexpected error occurred");
        }
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
            <section className="section w-3/4 relative m-auto my-24 p-0 rounded-lg shadow-lg overflow-hidden md:w-1/2">
                {/* REGISTER FORM */}
                <section className="px-4 py-8 md:px-8 md:py-16">
                    <h3 className="text-center">Create your Account</h3>

                    <form className="flex flex-col gap-4" onSubmit={handleSubmit(handleOnSubmitValidRegisterForm)}>
                        <InputText
                            label="Username"
                            id="register-username"
                            type="text"
                            placeholder="Your username"
                            register={register("username", {
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
                                },
                            })}
                            errorMessage={errors.username?.message}
                        />

                        <InputText
                            label="Password"
                            id="register-password"
                            type="password"
                            placeholder="Your password"
                            register={register("password", {
                                required: "The password is required",
                                minLength: {
                                    value: 8,
                                    message: "The password must be greater than 8",
                                },
                                maxLength: {
                                    value: 50,
                                    message: "The password must be less than 50",
                                },
                            })}
                            errorMessage={errors.password?.message}
                        />
                        <InputText
                            label="Confirm Password"
                            id="register-confirm-password"
                            type="password"
                            placeholder="Confirm Password"
                            register={register("confirmPassword", {
                                required: "The password is required",
                                minLength: {
                                    value: 8,
                                    message: "The password must be greater than 8",
                                },
                                maxLength: {
                                    value: 50,
                                    message: "The password must be less than 50",
                                },
                                validate: value => value === password || "The passwords do not match",
                            })}
                            errorMessage={errors.confirmPassword?.message}
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
                                    register={register("role", {
                                        required: "Please select a role",
                                    })}
                                    errorMessage={errors.role?.message}
                                />
                                <InputRadius
                                    name="register-user-role"
                                    id="register-user-role-seller"
                                    label="Seller"
                                    value="SELLER"
                                    register={register("role")}
                                />
                            </div>
                        </div>

                        <SubmitButton className="btn-primary w-full" value="Sign Up" />
                    </form>
                </section>

                {/* LOGIN FORM */}
                {/* <section className="bg-login-form px-4 py-8 md:px-8 md:py-16 md:pt-12"}>
                    <h3 className="text-center">Sign In</h3>

                    <form>
                        <InputText
                            label="Username"
                            placeholder="Your username"
                            name="login-username"
                            inputType="text"
                        />

                        <InputText
                            label="Password"
                            placeholder="Your password"
                            name="login-password"
                            inputType="password"
                        />

                        <SubmitButton
                            className="btn-primary w-full"
                            value="Sign In"
                        />
                    </form>
                </section> */}
            </section>

            <ToastContainer />
        </main>
    );
}