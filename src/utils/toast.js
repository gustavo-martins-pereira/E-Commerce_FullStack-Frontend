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

async function toastPromise(promise, promiseMessages, customProperties) {
    return await toast.promise(
        promise,
        {
            pending: {
                render() {
                    return promiseMessages.pending;
                }
            },
            success: {
                render() {
                    return promiseMessages.success;
                }
            },
            error: {
                render({ data }) {
                    return data.response.data.error;
                }
            },
        },
        mergeProperties(customProperties)
    );
}

export {
    toastError,
    toastSuccess,
    toastInfo,
    toastPromise,
};
