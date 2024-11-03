function getUSFormatFromDate(date) {
    const formattedDate = date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric"
    });

    const formattedTime = date.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
    });

    return `${formattedDate} ${formattedTime}`;
}

export {
    getUSFormatFromDate,
};
