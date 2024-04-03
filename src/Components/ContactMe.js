import React from "react";
import { Box, Typography, createTheme } from "@mui/material";
import { ThemeProvider, responsiveFontSizes } from "@mui/material/styles";

const theme = responsiveFontSizes(
  createTheme({
    typography: {
      h2: {
        fontWeight: "bold",
        fontSize: 35,
        color: "#7d7d7d",
        marginBottom: "none"
      },
      p: {
        fontSize: 15,
      },
    },
  })
);

export default function ContactMe() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 80,
          backgroundColor: "#00000",
          height: "100%",
        }}
      ></Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          variant="h2"
          className="h1-responsive font-weight-bold text-center my-2"
        >
          Contact us
        </Typography>
        <Typography
          variant="p"
          className="text-center w-responsive mx-auto mb-5"
        >
          Do you have any queries? Feel free to contact.
        </Typography>
      </Box>
      <Box style={{ display: "flex", justifyContent: "center" }}>
        <div className="row">
          <div className="col-md-9 px-4" style={{ borderRight: "1px solid #ccc"}}>
            <div className="row">
              <div className="col-md-6">
                <div className="md-form mb-0">
                  <label htmlFor="name" className="">
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-6 py-md-0 py-4">
                <div className="md-form mb-0">
                  <label htmlFor="email" className="">
                    Your email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="form-control"
                  />
                </div>
              </div>
            </div>

            <div className="row py-4">
              <div className="col-md-12">
                <div className="md-form mb-0">
                  <label htmlFor="subject" className="">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="form-control"
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="md-form">
                  <label htmlFor="message">Your message</label>
                  <textarea
                    type="text"
                    id="message"
                    name="message"
                    rows="2"
                    className="form-control md-textarea"
                  ></textarea>
                </div>
              </div>
            </div>
         
            <div className="row">
              <div className="col-md-12 text-center text-md-left py-4">
                <a className="btn btn-primary" href="/">
                  Send
                </a>
              </div>
         
            </div>
          </div>
          <div className="col-md-3 text-center py-md-5">
          
            <ul className="list-unstyled ">
              <li>
                <p>Bangalore, Karnataka, India</p>
              </li>

              <li>
                <p>+91-7624838470</p>
                <p>+97-9866068872</p>
              </li>

              <li>
                <p>kriteshpokharel100@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>
      </Box>
    </ThemeProvider>
  );
}
