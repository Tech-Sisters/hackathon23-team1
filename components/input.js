import clsx from "clsx";
import {useState} from "react";
import SearchIcon from "../public/vectors/SearchIcon";
import ViewPasswordIcon from "../public/vectors/EyeIcon";
import HidePasswordIcon from "../public/vectors/ViewEyeIcon";


const Input = ({
  mxWt,
  label,
  type = "text",
  name,
  placeholder,
  search,
  prefix,
  suffix,
  onChange,
  value,
  detail,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(true);

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleHidePassword = () => {
    setShowPassword((prev) => !prev);
  };
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div
      className={clsx(
        mxWt || "max-w-full",
        "w-full border rounded-[0.25rem] px-4 flex items-center gap-x-3 bg-white relative py-2",
        isFocused ? "border-[#336CFB]" : "border-[#dde2e5]"
      )}
    >
      {prefix ? prefix : search ? <SearchIcon /> : null}
      {label ? <label htmlFor={name} className="absolute -top-6 left-0 text-white text-base">{label}</label> : null}
      <input className="w-full border-none outline-none "
        type={type === "password" && showPassword ? "password" : "text"}
        name={name}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder || "Search"}
        id={name}
        onChange={onChange}
        value={value}
      />
      {suffix ? (
        suffix
      ) : type === "password" ? (
        <div>
          {showPassword ? (
            <span onClick={handleShowPassword}>
              <ViewPasswordIcon />
            </span>
          ) : (
            <span onClick={handleHidePassword}>
              <HidePasswordIcon />
            </span>
          )}
        </div>
      ) : null}
      {detail ? <span className="absolute -bottom-7 left-0 text-white text-sm">{detail}</span> : null}
    </div>
  );
};

export default Input;