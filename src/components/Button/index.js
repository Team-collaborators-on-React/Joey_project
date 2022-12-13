import React from "react";
import PropTypes from "prop-types";

const shapes = { RoundedBorder10: "rounded-radius10" };
const variants = {
  FillBlack9005f: "bg-black_900_5f text-white_A700_bf",
  GradientRed900Gray902: "bg-gradient  text-white_A700",
  FillGray700: "bg-gray_700 text-white_A700",
};
const sizes = {
  sm: "p-[12px] sm:p-[6px] md:p-[7px]",
  md: "md:p-[12px] p-[19px] sm:px-[15px] sm:py-[9px]",
  lg: "md:p-[19px] p-[29px] sm:px-[15px] sm:py-[14px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["RoundedBorder10"]),
  variant: PropTypes.oneOf([
    "FillBlack9005f",
    "GradientRed900Gray902",
    "FillGray700",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};
Button.defaultProps = {
  className: "",
  shape: "",
  variant: "FillBlack9005f",
  size: "sm",
};

export { Button };
