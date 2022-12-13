import React from "react";
const variantClasses = {
  h1: "font-bold md:text-[48px] sm:text-[48px] text-[72px]",
  h2: "font-bold sm:text-[40px] md:text-[46px] text-[50px]",
  h3: "font-bold sm:text-[27px] md:text-[29px] text-[31px]",
  h4: "font-bold sm:text-[19px] md:text-[21px] text-[23px]",
  h5: "font-normal text-[18px]",
  h6: "text-[16px]",
  body1: "font-normal text-[15px]",
  body2: "font-normal text-[11px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
