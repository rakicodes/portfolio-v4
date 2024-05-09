import { Box, Chip } from "@mui/material"
import theme from "../theme/theme"

const Chips = ({ list }) => {
  return (
    <Box sx={{
        display:"flex",
        gap: 1,
        flexWrap: "wrap"
    }}>
        {
            list.map((item, i) =>
                <Chip key={i} label={item} sx={{ backgroundColor: theme.palette.primaryOpacity.main, color: theme.palette.primary.light }} />
            )
        }
    </Box>
  )
}

export default Chips