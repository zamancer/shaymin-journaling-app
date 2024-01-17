/**
 * Pretty prints a stringified date as a timestamp.
 * If the date is null, returns an empty string.
 * 
 * @param date the date to pretty print or null
 * @returns 
 */
export const prettyPrintTimestamp = (dateStr: string | null) => {
    if (dateStr) {
        const date = new Date(dateStr);
        return date.toLocaleString();
    } else {
        return "";
    }
};
