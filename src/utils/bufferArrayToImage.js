export function bufferArrayToImage(bufferArray) {
    const arrayBuffer = bufferArray;
    const buffer = new Uint8Array(arrayBuffer);

    const image = new Blob([buffer], { type: "image/jpeg" });

    return URL.createObjectURL(image);
}
