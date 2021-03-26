import * as React from "react";
import { Button as MaterialButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const btnVariants = makeStyles({
  primary: {
    backgroundColor: "black",
    color: "orange",
  },
  secondary: {
    color: "green",
    "&:hover": {
      backgroundColor: "red",
    },
  },
});

const Button = ({ variant = "contained", className, children }) => {
  return (
    <MaterialButton variant={variant} className={btnVariants()[className]}>
      {children}
    </MaterialButton>
  );
};

export { Button };
