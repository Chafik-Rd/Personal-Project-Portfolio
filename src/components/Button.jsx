export const Button = ({
  text,
  style,
  icon = {
    url: "./src/assets/images/icons/down-arrow.svg",
    alt: "icon down-arrow",
  },
  iconStyle = "w-6",
}) => {
  return (
    <button
      className={`rounded-xl flex gap-2 justify-center items-center shadow-md cursor-pointer hover:scale-95 ${style}`}
    >
      <img src={icon.url} alt={icon.alt} className={iconStyle} />
      {text}
    </button>
  );
};
