interface BufferArrayInput {
    buffer: ArrayBuffer;
}

export function bufferArrayToImageURL(bufferArray: BufferArrayInput): string {
    const arrayBuffer: ArrayBuffer = bufferArray.buffer;
    const buffer: Uint8Array = new Uint8Array(arrayBuffer);

    const image: Blob = new Blob([buffer], { type: "image/jpeg" });

    return URL.createObjectURL(image);
}
