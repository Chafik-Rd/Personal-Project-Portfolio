export const PageHeader = ({ header, text }) => {
  return (
    <div className="max-w-200 flex flex-col gap-6">
      <div className="flex flex-col gap-2 items-center">
        <h2 className="text-3xl md:text-4xl font-bold capitalize">{header}</h2>
        <span className="w-25 h-1 bg-linear-to-r from-mutedBlue-300 to-turquoise-400"></span>
      </div>
      {text && (
        <p className="text-mutedBlueGray text-base md:text-xl font-medium text-center">
          {text}
        </p>
      )}
    </div>
  );
};
