import Star from "./Star";

export default function Stars({ count }) {
  const renderStars = (count) => {
    if (count > 0 && count <= 5) {
      const result = Array(count).fill("");
      return (
        <>
          {result.map((_, index) => (
            <Star key={index} />
          ))}
        </>
      );
    }
    return null;
  };

  return <ul className="card-body-stars u-clearfix">{renderStars(count)}</ul>;
}
