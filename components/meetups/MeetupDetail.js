import calsses from './MeetupDetail.module.css'

export default function MeetupDetail(props) {
  return (
    <section className={calsses.detail}>
      <img
        src={props.image}
        alt={props.title}
      />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  );
}
