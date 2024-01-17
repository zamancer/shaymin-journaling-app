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
}

export default function Index() {
  const data = useLoaderData<typeof loader>();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Say Thanks</h1>
      <h2>Contacts</h2>

      <ul 
      style={
        {
          listStyle: "none",
          padding: "0",
          margin: "0",
          maxWidth: "500px",
        }
      }
      >
        {data.map((contact) => (
          <li key={contact.id}>
            <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0.5rem",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  margin: "0.5rem 0",
                }}
              >
                <div>
                  <h3>{contact.name}</h3>
                  <p>Last Contacted: {prettyLastContact(contact.lastContacted)}</p>
                </div>
                <div>
                  <a href={`/contacts/${contact.id}`}>
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
