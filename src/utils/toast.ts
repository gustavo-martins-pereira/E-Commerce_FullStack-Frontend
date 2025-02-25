import { toast, Bounce, ToastPosition, Theme, ToastOptions } from "react-toastify";
import { ReactNode } from "react";

interface ToastProperties {
    autoClose: number;
    closeOnClick: boolean;
    draggable: boolean;
    hideProgressBar: boolean;
    pauseOnHover: boolean;
    position: ToastPosition;
    progress: undefined;
    theme: Theme;
    transition: typeof Bounce;
}

interface PromiseMessages {
    pending: string;
    success: string;
}

interface ErrorResponse {
    response: {
        data: {
            error: string;
        };
    };
}

const toastProperties: ToastProperties = {
    autoClose: 5000,
    closeOnClick: true,
    draggable: true,
    hideProgressBar: false,
    pauseOnHover: true,
    position: "top-right",
    progress: undefined,
    theme: "colored",
    transition: Bounce,
};

function mergeProperties(customProperties: Partial<ToastProperties> = {}): ToastProperties {
    return { ...toastProperties, ...customProperties };
}

function toastError(content: ReactNode, customProperties?: Partial<ToastProperties>): void {
    toast.error(content, mergeProperties(customProperties));
}

function toastSuccess(content: ReactNode, customProperties?: Partial<ToastProperties>): void {
    toast.success(content, mergeProperties(customProperties));
}

function toastInfo(content: ReactNode, customProperties?: Partial<ToastProperties>): void {
    toast.info(content, mergeProperties(customProperties));
}

function toastWarning(content: ReactNode, customProperties?: Partial<ToastProperties>): void {
    toast.warning(content, mergeProperties(customProperties));
}

async function toastPromise<T>(
    promise: Promise<T>,
    promiseMessages: PromiseMessages,
    customProperties?: Partial<ToastProperties>
): Promise<T> {
    return await toast.promise(
        promise,
        {
            pending: {
                render(): string {
                    return promiseMessages.pending;
                }
            },
            success: {
                render(): string {
                    return promiseMessages.success;
                }
            },
            error: {
                render({ data }: { data: any }): string {
                    if (data?.response?.data?.error) {
                        return data.response.data.error;
                    }
                    return 'An error occurred';
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
    type ToastProperties,
    type PromiseMessages
};
