export const SkillCard = ({ icon }) => {
  return (
    <li className="mx-4 flex h-20 w-45 items-center justify-center md:mx-8">
      <img src={icon.url} alt={icon.alt} className="h-15 object-cover" />
    </li>
  );
};
