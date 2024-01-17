import Chance from "chance";
import { differenceInDays } from "date-fns";
import { Contact } from "../data/db.server";

/**
 *  
 * @param contact A contact
 * @returns 
 */
const calculateWeight = (contact: Contact) => {
  if (contact.lastContacted === null) {
    return 1;
  } else {
    const daysSinceLastInteraction = differenceInDays(
      new Date(),
      contact.lastContacted
    );
    return 1 / (daysSinceLastInteraction + 1); // +1 to avoid division by zero
  }
};

const selectRandomContact = (contacts: Array<Contact>, chance: Chance.Chance) => {
  const weights = contacts.map(calculateWeight);
  return chance.weighted(contacts, weights);
};

export const getRandomContact = (contacts: Array<Contact>) => {
  const chance = new Chance();

  const contactToReachOut = selectRandomContact(contacts, chance);

  return contactToReachOut;
};
