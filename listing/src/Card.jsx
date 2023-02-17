import "./App.css";

export default function Card({data}) {
  const { url, MainImage, title, currency_code, price, quantity } = data;

  function renderCodeCurrency(currency_code) {
    switch (currency_code) {
      case "USD":
        return "$";
      case "EUR":
        return "€";
      default:
        return currency_code;
    }
  }

  function getLeftClass(quantity) {
    if (quantity >= 0 && quantity <=10) return "level-low"
    else if (quantity >= 11 && quantity <=20) return 'level-medium'
    else return 'level-high'
  }

  return (
    <div className="item">
      <div className="item-image">
        <a href={url}>
          <img src={MainImage?.url_570xN} alt={title} />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{title.length > 50 ? title.slice(0, 50) + '...' : title}</p>
        <p className="item-price">
          {["USD", "EUR"].includes(currency_code)
            ? renderCodeCurrency(currency_code) + price
            : price + " " + renderCodeCurrency(currency_code)}
        </p>
        <p className={"item-quantity" + " " + getLeftClass(quantity)}>{quantity} left</p>
      </div>
    </div>
  );
}
