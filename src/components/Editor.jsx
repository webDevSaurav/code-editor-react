import React from "react";
import AceEditor from "react-ace";
import { makeStyles } from "@material-ui/core";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";

const useStyles = makeStyles((theme) => ({}));

const Editor = ({ mode, setValue, value, placeHolder }) => {
  const classes = useStyles();
  return (
    <AceEditor
      className={classes.editor}
      width="100%"
      height="60vh"
      placeholder={placeHolder}
      mode={mode}
      theme="monokai"
      name="blah2"
      onChange={setValue}
      fontSize={16}
      showPrintMargin={true}
      showGutter={true}
      highlightActiveLine={true}
      value={value}
    />
  );
};

export default Editor;
