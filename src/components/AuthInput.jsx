const AuthInput = ({ label, autoComplete }) => {
  const name = label.toLowerCase();
  const inputType =
    name == 'password' ? 'password' : name == 'username' ? 'email' : 'text';

  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm text-gray-900 font-medium pb-2"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={inputType}
        placeholder={`Enter your ${name}`}
        required
        autoComplete={autoComplete}
        className="w-full p-2 border-0 outline-none rounded-md shadow-md ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary bg-slate-100 text-gray-900 sm:text-sm sm:leading-6"
      />
    </div>
  );
};

export default AuthInput;
