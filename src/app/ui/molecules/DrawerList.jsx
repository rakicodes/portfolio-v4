import { Button, Grid, Link } from "@mui/material"
import Typography from "../atoms/Typography"
import theme from "../theme/theme";

const DrawerList = () => {
  return (
    <Grid
    container
    flexDirection="column"
    gap={theme.spacing(4)}
    padding={theme.spacing(4)}
    maxHeight="100vh"
    alignItems="center">
    <Grid item>
        <Typography
            variant="h5"
            fontWeight="semibold">
            <Link
                href="#about"
                aria-label="Going to about section"
                underline="none"
                color={theme.palette.secondary.main}
                sx={{ "&:hover": { color: theme.palette.primary.main } }}>
                About Me
            </Link>
        </Typography>
    </Grid>
    <Grid item>
        <Typography
            variant="h5"
            fontWeight="semibold">
            <Link
                href="#skills"
                aria-label="Going to skills section"
                underline="none"
                color={theme.palette.secondary.main}
                sx={{ "&:hover": { color: theme.palette.primary.main } }}>
                Skills
            </Link>
        </Typography>
    </Grid>
    <Grid item>
        <Typography
            variant="h5"
            fontWeight="semibold">
            <Link
                href="#projects"
                aria-label="Going to projects section"
                underline="none"
                color={theme.palette.secondary.main}
                sx={{ "&:hover": { color: theme.palette.primary.main } }}>
                Projects
            </Link>
        </Typography>
    </Grid>
    <Grid item>
        <Typography
            variant="h5"
            fontWeight="semibold">
            <Link
                href="#contact"
                aria-label="Going to contact section"
                underline="none"
                color={theme.palette.secondary.main}
                sx={{ "&:hover": { color: theme.palette.primary.main } }}>
                Contact
            </Link>
        </Typography>
    </Grid>
    <Grid item>
        <Button variant="outlined"><Link href="/Resume.pdf" target="_blank" underline="none">Resume</Link></Button>
    </Grid>
</Grid>
  )
}

export default DrawerList