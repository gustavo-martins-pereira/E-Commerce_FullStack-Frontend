import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";

import { InputText } from "@components/dumbs/windui/InputText/InputText";

import "./assets/css/register-login.css";

import ImagePlaceholder from "@assets/images/placeholder-image.svg";
import { useState } from "react";

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
                        allowTouchMove={false}
                    >
                        <SwiperSlide><img src={ImagePlaceholder} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={ImagePlaceholder} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={ImagePlaceholder} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={ImagePlaceholder} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={ImagePlaceholder} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={ImagePlaceholder} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={ImagePlaceholder} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={ImagePlaceholder} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={ImagePlaceholder} alt="" /></SwiperSlide>
                    </Swiper>

                    <Swiper
                        className="swiper-gallery mt-2"
                        modules={[Autoplay]}
                        spaceBetween={10}
                        slidesPerView={2.5}
                        centeredSlides={true}
                        loop={true}
                        speed={8000}
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
                        allowTouchMove={false}
                    >
                        <SwiperSlide><img src={ImagePlaceholder} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={ImagePlaceholder} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={ImagePlaceholder} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={ImagePlaceholder} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={ImagePlaceholder} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={ImagePlaceholder} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={ImagePlaceholder} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={ImagePlaceholder} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={ImagePlaceholder} alt="" /></SwiperSlide>
                    </Swiper>
                </article>
            </section>

            {/* REGISTER / LOGIN */}
            <section className="section w-3/4 relative m-auto my-24 p-0 rounded-lg shadow-lg overflow-hidden">
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

                        <input className="btn btn-secondary w-full" type="submit" value="Sign Up" />
                    </form>
                </section>

                {/* LOGIN FORM */}
                <section
                    className={`bg-slate-300 absolute left-0 bottom-0 right-0 px-4 py-8 transition-transform duration-500 translate-y-3/4 ${isLoginFormActive ? 'translate-y-0' : 'translate-y-3/4 cursor-pointer'} md:px-8 md:py-16 md:pt-12`}
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

                        <input className="btn btn-secondary w-full" type="submit" value="Sign In" />
                    </form>
                </section>
            </section>
        </main>
    );
}