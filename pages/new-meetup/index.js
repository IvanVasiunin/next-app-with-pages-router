import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import Head from "next/head";
import { useRouter } from "next/router";

export default function NewMeetupPage() {
  const router = useRouter();

  async function addMeetUpHandler(enteredMeetUpData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetUpData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);

    router.push("/");
  }

  return (
    <>
      <Head>
        <title>Add a new meetup</title>
        <meta
          name="description"
          content="Add you own meetups!"
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetUpHandler} />
    </>
  );
}
