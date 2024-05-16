export const FormMessage = ({ message }: { message: string | undefined }) => (
  <div className="ml-1 mt-1 text-sm font-bold capitalize text-red-600 transition-all">
    {message}
  </div>
);
