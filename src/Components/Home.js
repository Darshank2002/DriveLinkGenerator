import React, { useState } from "react";
import {
  Container,
  Box,
  TextField,
  Grid,
  Button,
  Alert,
  AlertTitle,
} from "@mui/material";
import Download from "../LinkToDownload";
import "../static/css/index.css";
import drive from "../static/assets/drive.png";
import google from "../static/assets/google.png";
function Home() {
  const [link, setLink] = useState("");
  const [downLink, setDownLink] = useState("");
  const [status, setStatus] = useState("ok");
  const [flag, setFlag] = useState("error");
  const [copied, setCopied] = useState("Copy");
  const handleChange = (e) => {
    const value = e.target.value;
    setLink(value);
    console.log(link);
  };

  const generate = () => {
    if (link) {
      const down = Download(link);
      console.log(Download(link));
      if (down[1] === "success") {
        setStatus("Success");
        setFlag("success");
        console.log("success");
      } else if (down[1] === "danger") {
        setStatus("Not a Valid Link! Try again");
        setFlag("error");
        console.log("Danger ");
      }
      setDownLink(down[0]);
    }
  };

  function handleCopy() {
    console.log("Copied! ");
    const el = document.createElement("input");
    el.value = downLink;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setCopied("Copied!");
  }

  function reset() {
    setLink("");
    setDownLink("");
    setCopied("Copy");
    setStatus("ok");
    setFlag("error");
  }

  return (
    <Container>
      <Box id="Main">
        <Box sx={{ textAlign: "center", py: 4 }}>
          <img src={drive} alt="" height="50px" />
          <img src={google} alt="" height="50px" />
          <h1>Google Drive Download Link Generator</h1>
          <h4>
            Paste public sharable URL of your document here to generate the
            download link
          </h4>
        </Box>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item sm={7}>
            <Box sx={{ justifyContent: "center", textAlign: "center" }}>
              <TextField
                id="outlined-basic"
                fullWidth
                value={link}
                onChange={handleChange}
                label="Paste the public link of GDrive file here"
                variant="outlined"
              />
            </Box>
          </Grid>
          <Grid item sm={3} md={1}>
            {!downLink && (
              <Button
                variant="contained"
                type="submit"
                size="large"
                sx={{ height: "100%" }}
                onClick={generate}
              >
                Generate
              </Button>
            )}
            {downLink && (
              <Button
                variant="contained"
                color="error"
                type="submit"
                size="large"
                sx={{ height: "100%" }}
                onClick={reset}
              >
                Reset
              </Button>
            )}
          </Grid>
        </Grid>
        <Grid container justifyContent="center" sx={{ my: 5 }}>
          <Grid item xs={8} md={8}>
            {downLink && (
              <Alert id="LinkOutput" severity={flag}>
                <AlertTitle severity={flag}>
                  <strong>{status}</strong>
                </AlertTitle>
                <p>
                  <strong>Download Link </strong>
                  {flag === "success" ? downLink : "Not found"}
                </p>
              </Alert>
            )}
          </Grid>
          {flag === "success" && (
            <Button variant="contained" onClick={handleCopy}>
              {copied}
            </Button>
          )}
        </Grid>
      </Box>
      <Box sx={{ textAlign: "center" }} id="Footer">
        <strong>
          Created with ❤️ and 🧠 by{" "}
          <a href="https://www.linkedin.com/in/darshankadam15/" target="_blank">
            Darshan
          </a>
        </strong>
      </Box>
    </Container>
  );
}

export default Home;
