import { toast, Bounce } from "react-toastify";

function toastError(text) {
    toast.error(text, {
        autoClose: 5000,
        closeOnClick: true,
        draggable: true,
        hideProgressBar: false,
        pauseOnHover: true,
        position: "top-right",
        progress: undefined,
        theme: "colored",
        transition: Bounce,
    });
}

function toastSuccess(text) {
    toast.success(text, {
        autoClose: 5000,
        closeOnClick: true,
        draggable: true,
        hideProgressBar: false,
        pauseOnHover: true,
        position: "top-right",
        progress: undefined,
        theme: "colored",
        transition: Bounce,
    });
}

export {
    toastError,
    toastSuccess,
};
