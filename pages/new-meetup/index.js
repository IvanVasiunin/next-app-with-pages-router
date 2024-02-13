import NewMeetupForm from "@/components/meetups/NewMeetupForm";

export default function NewMeetupPage() {
  function addMeetUpHandler(meetUpData) {
    console.log(meetUpData)
  }

  return <NewMeetupForm onAddMeetup={addMeetUpHandler} />
}