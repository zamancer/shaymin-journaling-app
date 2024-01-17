import { LoaderFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getContactList } from "~/lib/data/db.server";

import { prettyPrintTimestamp } from "~/lib/utils";
import { getRandomContact } from "~/lib/engines/random";

export const loader: LoaderFunction = async () => {
  const allContacts = getContactList();
  const data = getRandomContact(allContacts);
  return json(data);
};

export default function RandomContact() {
  const contact = useLoaderData<typeof loader>();

  return (
    <div>
      <h1>Contact to Reach Out</h1>
      <p>Name: {contact.name}</p>
      <p>Last Contacted: {prettyPrintTimestamp(contact.lastContacted)}</p>
    </div>
  );
}
