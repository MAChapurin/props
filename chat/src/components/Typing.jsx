import "../App.css";

export default function Typing({ name, time }) {
  return (
    <li>
      <div className="message-data">
        <span className="message-data-name">
          <i className="fa fa-circle online"></i>
          {name}
        </span>
        <span className="message-data-time">{time}</span>
      </div>
      <div>
        <i className="fa fa-circle online"></i>
        <i className="fa fa-circle online"></i>
        <i className="fa fa-circle online"></i>
      </div>
    </li>
  );
}
