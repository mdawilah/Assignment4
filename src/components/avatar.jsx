export const Avatar = ({ username }) => {
  return (
    <div className="w-8 h-8 bg-indigo-600 text-white font-semibold rounded-full flex justify-center items-center">
      {username.charAt(0)}
    </div>
  );
};
