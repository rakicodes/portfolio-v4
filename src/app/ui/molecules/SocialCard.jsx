import { Box, Link } from "@mui/material";
import theme from "../theme/theme";

const SocialCard = ({ link, icon, name, site }) => {
  return (
    <Box
      color={theme.palette.tertiary.light}
      sx={{
        "&:hover": {
          borderColor: theme.palette.primary.main,
          color: theme.palette.primary.main
        },
        cursor: "pointer"
      }}
    >
      <Link
        href={link}
        aria-label={`Going to ${name} ${site}`}
        target="_blank"
        sx={{
          display: "flex",
          alignItems: "center",
          color: "inherit"
        }}
      >
        {icon}
      </Link>
    </Box>
  );
};

export default SocialCard;
