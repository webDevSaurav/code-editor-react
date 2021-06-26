import React, { useState } from "react";
import Editor from "./components/Editor";
import {
  Typography,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  makeStyles,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MyAppBar from "./components/MyAppBar";
const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  iframe: {
    width: "100%",
    minHeight: "100vh",
    height: "100%",
    background: "#fff",
  },
  accordion: {
    background: "#1A1B1F",
    color: "#fff",
  },
}));

const App = () => {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [javascript, setJavascript] = useState("");

  const [autoUpdate, setAutoUpdate] = useState(false);

  const [updatedSource, setUpdatedSource] = useState("");
  const classes = useStyles();
  const source = `
    <html>
        <head>
            <style>
                ${css}
            </style>
        </head>
        <body>
            ${html}
            <script>
                ${javascript}
            </script>
        </body>
    </html>
  `;

  const onRunHandler = () => {
    if (html.length === 0 && css.length === 0 && javascript.length === 0) {
      return;
    }
    setUpdatedSource(source);
  };

  const handleAutoUpdate = () => {
    setAutoUpdate((state) => !state);
    onRunHandler();
  };

  return (
    <div className={classes.container}>
      <MyAppBar
        autoUpdate={autoUpdate}
        handleAutoUpdate={handleAutoUpdate}
        onRunHandler={onRunHandler}
      />
      <Grid container>
        <Grid item xs={12} sm={12} md={6}>
          <Accordion className={classes.accordion} defaultExpanded={true}>
            <AccordionSummary expandIcon={<ExpandMoreIcon color="secondary" />}>
              <Typography variant="h5">HTML</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Editor
                mode="html"
                setValue={setHtml}
                value={html}
                placeHolder="Add html"
              />
            </AccordionDetails>
          </Accordion>
          <Accordion className={classes.accordion}>
            <AccordionSummary expandIcon={<ExpandMoreIcon color="secondary" />}>
              <Typography variant="h5">Css</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Editor
                mode="css"
                setValue={setCss}
                value={css}
                placeHolder="Add Css"
              />
            </AccordionDetails>
          </Accordion>
          <Accordion className={classes.accordion}>
            <AccordionSummary expandIcon={<ExpandMoreIcon color="secondary" />}>
              <Typography variant="h5">Javascript</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Editor
                mode="javascript"
                setValue={setJavascript}
                value={javascript}
                placeHolder="Add Javascript"
              />
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <iframe
            title="output"
            srcDoc={autoUpdate ? source : updatedSource}
            className={classes.iframe}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
