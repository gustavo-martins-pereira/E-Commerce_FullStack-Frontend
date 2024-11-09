import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { IoIosClose } from "react-icons/io";

export function Modal({ title, onClose, children }) {
    // STATES
    const [isShowing, setIsShowing] = useState(true);

    // REFS
    const wrapperRef = useRef(null);

    // EFFECTS
    useEffect(() => {
        function handleClickOutside(event) {
            if(wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setIsShowing(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [wrapperRef]);

    // ACCESSIBILITY
    useEffect(() => {
        let html = document.querySelector("html");
        if(html) {
            if(isShowing && html) {
                html.style.overflowY = "hidden";

                const focusableElements = "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])";

                const modal = document.querySelector("#modal");
                const firstFocusableElement = modal.querySelectorAll(focusableElements)[0]; // Get first element to be focused inside modal

                const focusableContent = modal.querySelectorAll(focusableElements);
                const lastFocusableElement = focusableContent[focusableContent.length - 1]; // Get last element to be focused inside modal

                document.addEventListener("keydown", function (e) {
                    if(e.keyCode === 27) {
                        setIsShowing(false);
                    }

                    let isTabPressed = e.key === "Tab" || e.keyCode === 9;

                    if(!isTabPressed) return;

                    if(e.shiftKey) {
                        // If "SHIFT" key pressed for "SHIFT" + "TAB" combination
                        if(document.activeElement === firstFocusableElement) {
                            lastFocusableElement.focus(); // add focus for the last focusable element
                            e.preventDefault();
                        }
                    } else {
                        // If tab key is pressed
                        if(document.activeElement === lastFocusableElement) {
                            // If focused has reached to last focusable element then focus first focusable element after pressing tab
                            firstFocusableElement.focus(); // Add focus for the first focusable element
                            e.preventDefault();
                        }
                    }
                })

                firstFocusableElement.focus();
            } else {
                onClose();
                html.style.overflowY = "visible";
            }
        }
    }, [isShowing]);

    return (
        <>
            {isShowing && typeof document !== "undefined"
                ? ReactDOM.createPortal(
                    <div
                        className="bg-slate-300/20 w-screen h-screen fixed top-0 left-0 flex items-center justify-center backdrop-blur-sm z-20"
                        aria-labelledby="header-3a content-3a"
                        aria-modal="true"
                        tabIndex="-1"
                        role="dialog"
                    >
                        {/* MODAL */}
                        <div
                            ref={wrapperRef}
                            className="flex max-h-[90vh] w-11/12 max-w-xl flex-col gap-6 overflow-hidden rounded bg-white p-6 text-slate-500 shadow-xl shadow-slate-700/10"
                            id="modal"
                            role="document"
                        >
                            {/* HEADER */}
                            <header id="header-3a" className="flex items-center gap-4 px-2">
                                <h2 className="flex-1 text-3xl font-medium text-slate-700">
                                    {title}
                                </h2>
                                <button
                                    className="h-10 justify-self-center inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition duration-300 whitespace-nowrap tracking-wide hover:bg-icon-primary--hover focus:bg-icon-primary--focus focus-visible:outline-none disabled:cursor-not-allowed disabled:shadow-none disabled:hover:bg-transparent"
                                    onClick={() => setIsShowing(false)}
                                    aria-label="close dialog"
                                >
                                    <IoIosClose size="3rem" className="icon-primary" />
                                </button>
                            </header>

                            {/* BODY */}
                            <div id="content-3a" className="flex-1 px-2 overflow-auto">
                                {children}
                            </div>
                        </div>
                    </div>,
                    document.body
                )
                : null}
        </>
    );
}
