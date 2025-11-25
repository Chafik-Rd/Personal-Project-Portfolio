export const PageHeader = ({ header, text }) => {
  return (
    <div className="flex max-w-200 flex-col gap-6">
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-2xl font-bold capitalize sm:text-3xl md:text-4xl">
          {header}
        </h2>
        <span className="from-mutedBlue-300 to-turquoise-400 h-1 w-25 bg-linear-to-r"></span>
      </div>
      {text && (
        <p className="text-mutedBlueGray text-center text-base font-medium md:text-xl">
          {text}
        </p>
      )}
    </div>
  );
};
