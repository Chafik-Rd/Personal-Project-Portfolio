export const IconCard = ({icon,style}) => {
    return (
        <div className={`p-3 rounded-xl ${style}`}>
            <img src={icon.url} alt={icon.alt} />
        </div>
    )
}