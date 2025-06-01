import React, { forwardRef } from "react";
import { StyledButton } from "./styles";

const Button = forwardRef(
    ({ children, minWidth, link, className, onClick, ...props }, ref) => {
        return (
            <StyledButton
                {...props}
                $minWidth={minWidth}
                ref={ref}
                {...(link ? { to: link } : { as: "button", onClick, type: "button" })}
                className={className}
            >
                {children}
            </StyledButton>
        );
    }
);

export default Button;
