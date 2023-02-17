import "../App.css";
import Message from "./Message";
import Response from "./Response";
import Typing from "./Typing";

export default function MessageHistory({ list }) {
  return (
    <ul>
      {
        //    list.map(message => message.type === 'message' ? <Message key={message.id} data={message}/> : <Response key={message.id} data={message}/>)

        list.map((message) => {
          switch (message.type) {
            case "message":
              return <Message key={message.id} data={message} />;
            case "response":
              return <Response key={message.id} data={message} />;
            case "typing":
              return <Typing key={message.id} name={message.from.name} time={message.time}/>;
            default:
              return null;
          }
        })
      }
    </ul>
  );
}
