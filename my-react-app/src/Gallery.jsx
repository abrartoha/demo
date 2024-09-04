function Profile ({name, surName}) {
  const source = "https://i.imgur.com/MK3eW3As.jpg";
  const alter = "Katherine Johnson";
  return (
    <>
      <img
        src={source}
        alt={alter}
      />
      <h1>{name} {surName}</h1>
    </>
  );
}

export default function Gallery() {
  let msg = "Amazing scientists";
  const color = "blue";
  return (
    <>
      <Profile name="Abrar" surName="Hossain"/>
      <Profile name="Toha" surName="Hossain"/>
      <Profile name="Chy" surName="Hossain"/>
    </>
  );
}


/* const Profile = () => {
  return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
}

export default () => {
  return (
    <Profile/>
  );
} */

