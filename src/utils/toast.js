import { toast, Bounce } from "react-toastify";

const toastProperties = {
    autoClose: 5000,
    closeOnClick: true,
    draggable: true,
    hideProgressBar: false,
    pauseOnHover: true,
    position: "top-right",
    progress: undefined,
    theme: "colored",
    transition: Bounce,
}

function mergeProperties(customProperties = {}) {
    return { ...toastProperties, ...customProperties };
}

function toastError(text, customProperties) {
    toast.error(text, mergeProperties(customProperties));
}

function toastSuccess(text, customProperties) {
    toast.success(text, mergeProperties(customProperties));
}

function toastInfo(text, customProperties) {
    toast.info(text, mergeProperties(customProperties));
}

export {
    toastError,
    toastSuccess,
    toastInfo,
};
