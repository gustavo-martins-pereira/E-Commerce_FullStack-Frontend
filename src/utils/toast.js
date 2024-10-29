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

function toastError(content, customProperties) {
    toast.error(content, mergeProperties(customProperties));
}

function toastSuccess(content, customProperties) {
    toast.success(content, mergeProperties(customProperties));
}

function toastInfo(content, customProperties) {
    toast.info(content, mergeProperties(customProperties));
}

function toastWarning(content, customProperties) {
    toast.warning(content, mergeProperties(customProperties));
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
    toastWarning,
    toastPromise,
};
