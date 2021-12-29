import getVideoId from "./getVideoId";
function Person({ info }) {
  let videoId = "https://www.youtube.com/embed/" + getVideoId(info.url);
  return (
    <div className="master">
      <div className="name">
        <h2 style={{ color: info.color }}>{info.name}</h2>
      </div>
      <div className="content">
        <div className="video">
          {getVideoId(info.url).length === 11 ? (
            <iframe
              width="300px"
              height="200px"
              src={videoId}
              frameborder="0"
              allowfullscreen
            ></iframe>
          ) : (
            <a href={info.url}>
              <img
                width="300px"
                height="200px"
                src="https://helpdeskgeek.com/wp-content/pictures/2021/09/youtube-error.jpeg"
              ></img>
            </a>
          )}
        </div>
        <div className="body">
          <h4 style={{ color: info.color }} className="no">
            School: {info.school}{" "}
          </h4>
          <h4 style={{ color: info.color }}>Year: {info.year} </h4>
          <h4 style={{ color: info.color }}>Music: {info.music} </h4>
          <h4 style={{ color: info.color }}>SM: {info.socialMedia} </h4>
          <h4 style={{ color: info.color }}>BorM: {info.beachOrMountain} </h4>
        </div>
      </div>
    </div>
  );
}
export default Person;
