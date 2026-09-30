/** Five gold stars, drawn as inline SVG (no icon font, no emoji). */
export default function StarRating({
  label = "Rated 5 out of 5",
  className,
}: {
  label?: string;
  className?: string;
}) {
  return (
    <div className={className} role="img" aria-label={label}>
      <svg
        viewBox="0 0 100 18"
        className="h-4 w-auto"
        fill="#E8A33D"
        aria-hidden="true"
      >
        <defs>
          <path
            id="zm-star"
            d="M9 0.8l2.54 5.15 5.68.83-4.11 4.01.97 5.66L9 13.78l-5.08 2.67.97-5.66L.78 6.78l5.68-.83z"
          />
        </defs>
        {[0, 1, 2, 3, 4].map((index) => (
          <use key={index} href="#zm-star" x={index * 20.5} />
        ))}
      </svg>
    </div>
  );
}
