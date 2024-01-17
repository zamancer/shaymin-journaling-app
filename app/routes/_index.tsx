import type { MetaFunction } from "@remix-run/node";
import { json, useLoaderData } from "@remix-run/react";
import { getContactList } from "~/utils/data/db.server";
import { prettyLastContact } from "~/utils/utils";

export const meta: MetaFunction = () => {
  return [
    { title: "Shaymin" },
    { name: "description", content: "The gratitude app" },
  ];
};

export const loader = () => {
  const contacts = getContactList();
  return json(contacts);
};

export default function Index() {
  const data = useLoaderData<typeof loader>();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1 className="text-3xl font-bold">Say Thanks</h1>
      <h2>Contacts</h2>

      <ul className="list-none max-w-xl">
        {data.map((contact) => (
          <li key={contact.id}>
            <div className="flex items-center justify-between p-2 border-2 border-gray-300 rounded-md my-2">
              <div>
                <h3>{contact.name}</h3>
                <p>
                  Last Contacted: {prettyLastContact(contact.lastContacted)}
                </p>
              </div>
              <div>
                <a
                  href={`/contacts/${contact.id}`}
                  className="underline hover:no-underline"
                >
                  Send Thanks
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
