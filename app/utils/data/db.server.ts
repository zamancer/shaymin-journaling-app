type Contact = {
  id: number;
  name: string;
  lastContacted: Date | null;
};

const SAMPLE_CONTACTS: Contact[] = [
  { id: 1, name: "Xim", lastContacted: null },
  { id: 2, name: "Cor", lastContacted: null },
  { id: 3, name: "Xamster", lastContacted: null },
  { id: 4, name: "Gina", lastContacted: null },
  { id: 5, name: "Diego", lastContacted: null },
  { id: 6, name: "Luu", lastContacted: null },
  { id: 7, name: "Valentina", lastContacted: null },
  { id: 8, name: "Eric Yishconto", lastContacted: null },
  { id: 9, name: "Louis Yang", lastContacted: null },
  { id: 10, name: "Dules", lastContacted: null },
];

/**
 * Gets a list of contacts
 *
 * @returns {Contact[]} - List of contacts
 */
export const getContactList = () => {
  return SAMPLE_CONTACTS;
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
  }
};
