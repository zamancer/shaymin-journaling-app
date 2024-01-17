import {
  ActionFunction,
  LoaderFunction,
  LoaderFunctionArgs,
  json,
  redirect,
} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getContactList, updateLastContacted } from "~/utils/data/db.server";
import { prettyPrintTimestamp } from "~/utils/utils";

// Loader function to get data for the route
export const loader: LoaderFunction = async ({
  params,
}: LoaderFunctionArgs) => {

  let selectedContact = null;
  const allContacts = getContactList();

  if (params.id) {
    selectedContact = allContacts.find(
      (contact) => contact.id === Number(params.id)
    );
    
  } else {
    selectedContact = allContacts[0];
  }

  return json(selectedContact);
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const contactId = Number(formData.get("contactId"));

  if (!isNaN(contactId)) {
    // Update the last contacted time of the contact
    // In a real app, this would involve updating a record in a database
    updateLastContacted(contactId);

    // Redirect back to the contact page after updating
    return redirect(`/contacts/${contactId}`);
  }

  return redirect("/contacts");
};

export default function ContactRoute() {
  const contact = useLoaderData<typeof loader>();

  return (
    <div>
      <h1>Contact to Reach Out</h1>
      <p>Name: {contact.name}</p>
      <p>Last Contacted: {prettyPrintTimestamp(contact.lastContacted)}</p>

      <form
        action={`/contacts/${contact.id}`}
        method="post"
      >
        <input type="hidden" name="contactId" value={contact.id} />
        <button type="submit">Contact Now</button>
      </form>
    </div>
  );
}
