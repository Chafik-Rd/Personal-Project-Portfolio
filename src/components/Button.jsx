export const Button = ({text,style,icon="./src/assets/images/down-arrow.svg",iconStyle="w-6"}) => {
  return (
    <button className = {`px-8 py-4 rounded-xl flex gap-2 justify-center shadow-md cursor-pointer ${style}`}>
        <img src={icon} className={iconStyle}/>
        {text}
    </button>
  );
};
