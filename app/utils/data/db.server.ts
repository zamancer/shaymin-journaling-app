import fs from "fs";

export type Contact = {
  id: number;
  name: string;
  lastContacted: Date | null;
};

let SAMPLE_CONTACTS: Contact[] = [];

/**
 * Gets a list of contacts from the contacts.json file
 * If successful, it stores the contacts in memory to avoid
 * reading from the file every time.
 *
 * @returns {Contact[]} - List of contacts
 */
export const getContactList = () => {
  if (SAMPLE_CONTACTS.length > 0) {
    return SAMPLE_CONTACTS;
  }

  try {
    console.log("Reading contacts from file");
    const data = fs.readFileSync("contacts.json", "utf8");
    // Update the in-memory contacts
    SAMPLE_CONTACTS = JSON.parse(data);
    
    return SAMPLE_CONTACTS;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const getContactById = (id: number) => {
  return SAMPLE_CONTACTS.find((c) => c.id === id);
};

/**
 * Updates a contact's last contacted date to today
 * @param id the contact to update
 * @returns void
 */
export const updateLastContacted = (id: number) => {
  const contact = SAMPLE_CONTACTS.find((c) => c.id === id);
  if (contact) {
    contact.lastContacted = new Date();
    console.log(
      `Updated ${contact.name} last contacted to ${contact.lastContacted}`
    );
    saveContactsToFile();
  }
};

/**
 * Saves the contacts to a file called contacts.json
 * at the root of the project.
 */
const saveContactsToFile = () => {
  const data = JSON.stringify(SAMPLE_CONTACTS);
  fs.writeFileSync("contacts.json", data);
}
