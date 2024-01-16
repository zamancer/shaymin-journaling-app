import type { MetaFunction } from "@remix-run/node";
import { json, useLoaderData } from "@remix-run/react";
import { getContactList } from "~/utils/data/db.server";

export const meta: MetaFunction = () => {
  return [
    { title: "Shaymin" },
    { name: "description", content: "The gratitude app" },
  ];
};

export const loader = () => {
  const contacts = getContactList();
  return json(contacts);
}

export default function Index() {
  const data = useLoaderData<typeof loader>();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Say Thanks</h1>
      <h2>Contacts</h2>

      <ul>
        {data.map((contact) => (
          <li key={contact.id}>
            {/* <a href={`/contacts/${contact.id}`}>{contact.name}</a> */}
            <span>{contact.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
