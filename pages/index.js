import MeetupList from "@/components/meetups/MeetupList";

const SUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'First meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Panor%C3%A1mica_Oto%C3%B1o_Alc%C3%A1zar_de_Segovia.jpg/1280px-Panor%C3%A1mica_Oto%C3%B1o_Alc%C3%A1zar_de_Segovia.jpg',
    address: 'Some address',
    description: 'Thi is a first meetup'
  },
  {
    id: 'm2',
    title: 'Second meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Bodiam-castle-10My8-1197.jpg/1280px-Bodiam-castle-10My8-1197.jpg',
    address: 'Some address 2',
    description: 'Thi is a second meetup'
  }
]

export default function HomePage() {
  return <MeetupList meetups={SUMMY_MEETUPS} />
}