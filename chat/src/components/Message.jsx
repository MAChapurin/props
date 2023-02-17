import '../App.css';

export default function Message({data}) {
  const {from, time, text} = data
  return (
    <li>
    <div className="message-data">
      <span className="message-data-name"><i className="fa fa-circle online"></i>{from.name}</span>
      <span className="message-data-time">{time}</span>
    </div>
    <div className="message my-message">
     {text}
    </div>
  </li>
  );
}
