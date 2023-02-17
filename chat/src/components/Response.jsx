import '../App.css';

export default function Response({data}) {
  const {from, time, text} = data;
  
  return (
 

<li className="clearfix">
<div className="message-data align-right">
  <span className="message-data-time">{time}</span> &nbsp; &nbsp;
  <span className="message-data-name">{from.name}</span>
  <i className="fa fa-circle me"></i>
</div>
<div className="message other-message float-right">
  {text}
</div>
</li>
  );
}
