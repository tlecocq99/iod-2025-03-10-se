import React, { useContext } from "react";
import EmojiContext from "../context/EmojiContext";
import { Box, IconButton, Typography } from "@mui/material";
import MoodIcon from "@mui/icons-material/Mood";

export default function Emoji() {
  const { emoji, toggleMood } = useContext(EmojiContext);
  return (
    <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
      <Typography variant="h2" component="span" mr={1}>
        {emoji}
      </Typography>
      <IconButton onClick={toggleMood} color="primary">
        <MoodIcon />
      </IconButton>
    </Box>
  );
}
