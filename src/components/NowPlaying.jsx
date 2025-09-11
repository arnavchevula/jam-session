import useNowPlaying from "../hooks/useNowPlaying";

function NowPlaying({}) {
  const [musicians, setMusicians] = useNowPlaying();
  console.log(musicians);

  return (
    <div>
      {musicians.map(musician => {
        return (
          <div>
            <div>{musician.name}</div>
            <div>{musician.instrument}</div>
            <div>{musician.instagram}</div>
            <div>{musician.phoneNumber}</div>
            <div>{musician.email}</div>
          </div>
        );
      })}
    </div>
  );
}

export default NowPlaying;
