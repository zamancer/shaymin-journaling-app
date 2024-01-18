import { LoaderFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getContactList } from "~/lib/data/db.server";

import { prettyPrintTimestamp } from "~/lib/utils";
import { getRandomContact } from "~/lib/engines/random";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";

export const loader: LoaderFunction = async () => {
  const allContacts = getContactList();
  const data = getRandomContact(allContacts);
  return json(data);
};

export default function RandomContact() {
  const contact = useLoaderData<typeof loader>();

  return (
      <main className="flex justify-center py-4">
        <Card className="lg:min-w-[400px]">
          <CardHeader>
            <CardTitle>{contact.name}</CardTitle>
            <CardDescription>
            Last Contacted: {prettyPrintTimestamp(contact.lastContacted)}
            </CardDescription>
          </CardHeader>

          <CardContent>
            <h3 className="text-lg font-semibold">Notes</h3>
            <p>{contact.notes}</p>
          </CardContent>
        </Card>
      </main>
  );
}
