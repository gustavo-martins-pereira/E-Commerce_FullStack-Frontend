import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";

import { InputText } from "@components/dumbs/custom/InputText/InputText";
import { SubmitButton } from "@components/dumbs/custom/SubmitButton/SubmitButton";

import "./assets/css/register-login.css";

import ImagePlaceholder from "@assets/images/placeholder-image.svg";

export function RegisterLogin() {
    // STATES
    const [isLoginFormActive, setIsLoginFormActive] = useState(false);

    // HANDLES
    function handleActiveLoginForm() {
        setIsLoginFormActive(true);
    }

    function handleClickOutsideLogin() {
        if(isLoginFormActive) {
            setIsLoginFormActive(false);
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
                        loop={true}
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
                        {Array.from({ length: 12 }).map((_, index) => <SwiperSlide key={index}><img src={ImagePlaceholder} alt="" /></SwiperSlide>)}
                    </Swiper>

                    <Swiper
                        className="swiper-gallery mt-2"
                        modules={[Autoplay]}
                        spaceBetween={10}
                        slidesPerView={2.5}
                        centeredSlides={true}
                        loop={true}
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
                        {Array.from({ length: 12 }).map((_, index) => <SwiperSlide key={index}><img src={ImagePlaceholder} alt="" /></SwiperSlide>)}
                    </Swiper>
                </article>
            </section>

            {/* REGISTER / LOGIN */}
            <section className="section w-3/4 relative m-auto my-24 p-0 rounded-lg shadow-lg overflow-hidden md:w-1/2">
                {/* REGISTER FORM */}
                <section
                    className={`${isLoginFormActive ? "opacity-25" : "opacity-100"} px-4 py-8 pb-28 md:px-8 md:py-16 md:pb-36`}
                    onClick={handleClickOutsideLogin}
                >
                    <h3 className="text-center">Create your Account</h3>

                    <form>
                        <InputText
                            label="Username"
                            placeholder="Your username"
                            name="register-username"
                            inputType="text"
                        />

                        <InputText
                            label="Password"
                            placeholder="Your password"
                            name="register-password"
                            inputType="password"
                        />
                        <InputText
                            label="Confirm Password"
                            placeholder="Confirm Password"
                            name="register-confirmPassword"
                            inputType="password"
                        />

                        <SubmitButton className="btn-primary w-full" value="Sign Up" />
                    </form>
                </section>

                {/* LOGIN FORM */}
                <section
                    className={`bg-login-form absolute left-0 bottom-0 right-0 shadow-[0_0_10px_rgba(0,0,0,0.25)] px-4 py-8 transition-transform duration-500 md:px-8 md:py-16 md:pt-12 ${isLoginFormActive ? 'translate-y-0' : 'translate-y-3/4 cursor-pointer'}`}
                    style={{ borderRadius: "60% / 10% 10% 0 0" }}
                    onClick={handleActiveLoginForm}
                >
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
                </section>
            </section>
        </main>
    );
}