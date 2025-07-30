export const Button = ({
  text,
  style,
  icon = {
    url: "./src/assets/images/down-arrow.svg",
    alt: "icon down-arrow",
  },
  iconStyle = "w-6",
}) => {
  return (
    <button
      className={`px-8 py-4 rounded-xl flex gap-2 justify-center shadow-md cursor-pointer ${style}`}
    >
      <img src={icon.url} alt={icon.alt} className={iconStyle} />
      {text}
    </button>
  );
};
