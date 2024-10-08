import "../SelectedVideo/SelectedVideo.scss";
import like from "../../assets/images/icons/likes.svg";
import eye from "../../assets/images/icons/views.svg";
import Comments from "../Comments/Comments";

export default function SelectedVideo(props) {
  const {
    title,
    channel,
    description,
    image,
    views,
    timestamp,
    likes,
    comments,
  } = props.selectedVideo;

  const date = new Date(timestamp);

  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();

  const fullDate = `${day}/${month}/${year}`;

  return (
    <div className="selected">
      <div className={`selected__video-background ${props.hideVideo}`}>
        <video
          poster={image}
          alt={`picture about ${title}`}
          className="selected__video"
          controls
        />
      </div>
      <div className={`selected__content-container ${props.desktopComments}`}>
        <h1 className="selected__title">{title}</h1>
        <div className="selected__div">
          <ul className="selected__list">
            <div className="selected__subcontainer">
              <li className="selected__item selected__item-modifier">
                <p className="selected__channel">By {channel}</p>
              </li>
              <li className="selected__item">{`${fullDate}`}</li>
            </div>
            <div className="selected__subcontainer">
              <li className="selected__item">
                <img
                  className="selected__img"
                  src={eye}
                  alt="like button"
                ></img>
                {views}
              </li>
              <li className="selected__item">
                <img
                  className="selected__img"
                  src={like}
                  alt="like button"
                ></img>
                {likes}
              </li>
            </div>
          </ul>
        </div>
        <p className="selected__description">{description}</p>
        { comments && <Comments comments={comments} /> }
      </div>
    </div>
  );
}
