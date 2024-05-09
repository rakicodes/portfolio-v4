import { Typography as MuiTypography } from "@mui/material";
import theme from "../theme/theme";

const Typography = ({
  variant,
  align,
  children,
  fontWeight = "regular",
  color,
  sx,
}) => {
  return (
    <>
      <MuiTypography
        align={align}
        variant={variant}
        color={color}
        sx={{ fontWeight: theme.fontWeight[fontWeight], ...sx }}
      >
        {children}
      </MuiTypography>
    </>
  );
};

export default Typography;
