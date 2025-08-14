export const SkillCard = ({icon}) => {
  return (
    <li className="flex justify-center items-center h-20 w-45  mx-4 md:mx-8">
      <img src={icon.url} alt={icon.alt} className="h-15  object-cover" />
    </li>
  );
};
