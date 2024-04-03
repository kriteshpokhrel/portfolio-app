import React from "react";
import { Box, Typography, createTheme } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import kritesh from "../../src/assests/images/circle-avatar.png";
import { ThemeProvider, responsiveFontSizes } from "@mui/material/styles";
import { Facebook, GitHub, Instagram, LinkedIn } from "@mui/icons-material";

const theme = responsiveFontSizes(
  createTheme({
    typography: {
      h3: {
        fontSize: 30,
        color: "#7d7d7d",
      },
      subtitle1: {
        textAlign: "center",
      },
      socialLinks: {
        fontSize: 17,
        textDecoration: "none",
        color: "black",
      },
      bold: {
        fontWeight: "bold",
        fontSize: 35,
        color: "#7d7d7d",
      },
      findMe: {
        fontSize: 20,
      },
      paragraph: {
        fontSize: 25,
      },
    },
  })
);

const siteList = [
  {
    name: "LinkedIn",
    link: "www.githubcom/kriteshpokhrel",
    iconName: LinkedIn,
  },
  {
    name: "GitHub",
    link: "www.linkedin.com/kriteshpokhrel",
    iconName: GitHub,
  },
  {
    name: "Facebook",
    link: "www.facebook.com/kriteshpokhrel",
    iconName: Facebook,
  },
  {
    name: "Instagram",
    link: "www.instagram.com/kritesh_pokhrel",
    iconName: Instagram,
  },
];

const createSocialMediaComponent = (site) => {
  const IconName = site.iconName;
  return (
    <a
      href={site.link}
      className="asd"
      style={{ color: "inherit", textDecoration: "none"}}
      key={site.name}
    >
      <IconName sx={{ marginRight: "1%" }}/>
      <Typography variant="socialLinks">{site.name}</Typography>
    </a>
  );
};

const personalDetails = {
  name: "Kritesh Pokhrel",
  company: "Eurofins IT Soltions India Pvt Ltd.",
  designation: "Associate Software Engineer",
};
export default function HomePage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: 60,
        backgroundColor: "#00000",
        height: "100%",
      }}
    >
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            verticalAlign: "center",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            width: "90%",
          }}
        >
          <Box
            className="col-md-5"
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            {/* <br />
          <Typography variant="h3">
            {personalDetails.name.toUpperCase()}
          </Typography>
          <Typography variant="subtitle1">
            {personalDetails.designation}
            <br />
            {personalDetails.company}
          </Typography> */}
            {/* <Box
            className="socialIcons"
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              marginTop: 1,
            }}
          ></Box> */}
            <Avatar src={kritesh} sx ={{width:"90%", height:'auto', marginTop: "10%"}} />
          </Box>
          <Box className="" sx={{ width: "95%" }}>
            <Typography variant="paragrap">
              <Typography variant="bold">Hello World!</Typography>
              <br />
              I'm <Typography variant="bold">{personalDetails.name}</Typography>
              , a fresher Web Developer. I have pursued B.E. Computer Science &
              Engineering from Visvesvaraya Technological University. I have
              been working since a year as an Associate Software Engineer at
              Eurofins IT Solutions India Pvt Ltd. I am familiar with Angular,
              React on front-end and C# on backend. I am also interested on
              UI/UX and have been working on it to enchance my skills.
            </Typography>
            <hr />
            <Typography variant="findMe">Connect with me:</Typography>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "column",
              }}
            >
              {siteList.map((site) => createSocialMediaComponent(site))}
            </div>{" "}
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
}
