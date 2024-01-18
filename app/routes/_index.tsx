import type { MetaFunction } from "@remix-run/node";
import { Link, json, useLoaderData } from "@remix-run/react";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { getContactList } from "~/lib/data/db.server";
import { prettyLastContact } from "~/lib/utils";

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
    <main className="flex justify-center">
      <section>
        <div className="text-center">
          <h1 className="text-3xl font-bold">Say Thanks</h1>
          <h2 className="text-xl font-semibold">My Contacts</h2>
        </div>

        <ul className="list-none">
          {data.map((contact) => (
            <li key={contact.id}>
              <Card className="flex items-center justify-between border-gray-300 my-2">
                <CardHeader>
                  <CardTitle>{contact.name}</CardTitle>
                  <CardDescription>
                    Last Contacted: {prettyLastContact(contact.lastContacted)}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <Button asChild>
                    <Link to={`/contacts/${contact.id}`}>Send Thanks</Link>
                  </Button>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
