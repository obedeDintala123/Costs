const Input = ({type, placeholder, name, id, text, handleOnchange, value, state}) => {
    return (
        <div className="flex flex-col gap-3">
            <label className="text-lg font-medium" htmlFor={name}>{text}:</label>
            <input className="p-3 bg-[#efefef] outline-none" type={type} placeholder={placeholder} name={name} id={id} value={value} onChange={handleOnchange} required />
        </div>
    )
}

export default Input