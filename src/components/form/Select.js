const Select = ({ name, id, options, text, handleOnchange, value }) => {
  return (
    <div className="flex flex-col gap-3 ">
      <label htmlFor={name} className="text-lg font-medium">
        {text}:{" "}
      </label>
      <select
        name={name}
        id={id}
        className="p-3 bg-[#efefef] outline-none cursor-pointer"
        value={value || ""}
        onChange={handleOnchange}
        required
      >
        {options.map(option =>
          <option value={option.id} key={option.id}>
            {option.name}
          </option>
        )}
      </select>
    </div>
  );
};

export default Select;
