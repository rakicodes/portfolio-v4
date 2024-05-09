import React from "react";
import Hero from "./Hero";
import Experience from "./Experience";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import MinimalistHeader from "../../organisms/MinimalistHeader";
import { Grid } from "@mui/material";
import MinimalistFooter from "../../organisms/MinimalistFooter";
import theme from "../../theme/theme";

const Minimalist = ({ hero, skills, experiences, projects, socials, about, contactDesc }) => {
  return (
    <Grid container backgroundColor={theme.palette.tertiary.main}>
      <Grid id="top" item xs={12}>
        <MinimalistHeader />
      </Grid>
      <Grid item xs={12} paddingBottom={theme.spacing(6)}>
        <Hero hero={hero} socials={socials.links} />
      </Grid>
      <Grid id="skills" item xs={12} paddingBottom={theme.spacing(6)}>
        <Skills skills={skills}/>
      </Grid>
      <Grid item xs={12} paddingBottom={theme.spacing(6)}>
        <Experience experiences={experiences} />
      </Grid>
      <Grid id="about" item xs={12} paddingBottom={theme.spacing(6)}>
        <About about={about} />
      </Grid>
      <Grid id="projects" item xs={12} paddingBottom={theme.spacing(6)}>
        <Projects projects={projects} />
      </Grid>
      <Grid id="contact" item xs={12} paddingBottom={theme.spacing(6)}>
        <Contact contactDesc={contactDesc} socials={socials} />
      </Grid>
      <Grid item xs={12}>
        <MinimalistFooter />
      </Grid>
    </Grid>
  );
};

export default Minimalist;
