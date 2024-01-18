import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Pretty prints a stringified date as a timestamp.
 * If the date is null, returns an empty string.
 * 
 * @param date the date to pretty print or null
 * @returns {string} the pretty printed date or an empty string
 */
export const prettyPrintTimestamp = (dateStr: string | null) => {
    if (dateStr) {
        const date = new Date(dateStr);
        return date.toLocaleString();
    } else {
        return "";
    }
};

/**
 * Pretty prints the last time a person was contacted based 
 * on a stringified timestamp value.
 * 
 * E.g. if the last contacted date was today or yesterday, it will return
 * "Today" or "Yesterday".
 * If the date was more than 2 days ago, but less than 7 days ago it 
 * willl say "a week ago".
 * 
 * If the date was more than a week ago, it will return the date in the format
 * "Month Day, Year" e.g. "January 1, 2021".
 * 
 * If the date is null, returns the string "Not yet".
 * 
 * @returns {string} 
 */
export const prettyLastContact = (dataStr: string | null) => {
    if (dataStr) {
        const date = new Date(dataStr);
        const today = new Date();
        const yesterday = new Date();
        yesterday.setDate(today.getDate() - 1);
        const aWeekAgo = new Date();
        aWeekAgo.setDate(today.getDate() - 7);

        if (date.toDateString() === today.toDateString()) {
            return "Today";
        } else if (date.toDateString() === yesterday.toDateString()) {
            return "Yesterday";
        } else if (date > aWeekAgo) {
            return "A week ago";
        } else {
            return date.toLocaleDateString();
        }
    } else {
        return "Not yet";
    }
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
