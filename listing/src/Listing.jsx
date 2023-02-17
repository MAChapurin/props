import Card from "./Card";
import "./App.css";
import CardRemoved from "./CardRemoved";

export default function Listing({ items }) {
  return (
    <div className="item-list">
      {items.map((el) =>
        el.state === "active" ? (
          <Card key={el.listing_id} data={el} />
        ) : (
          <CardRemoved key={el.listing_id} />
        )
      )}
    </div>
  );
}
