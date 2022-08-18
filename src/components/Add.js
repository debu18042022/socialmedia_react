import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Stack } from "@mui/system";
import { EmojiEmotions, Image, PersonAdd } from "@mui/icons-material";
import { myContextdata } from "./ContextData";
import { useNavigate } from "react-router-dom";

const SytledModal = styled(Modal)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const Userbox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

const Add = () => {
  const {
    logindata,
    img,
    setImg,
    caption,
    setCaption,
    postArray,
    setPostArray,
  } = useContext(myContextdata);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const getPostImg = (event) => {
    let imgName = URL.createObjectURL(event.target.files[0]);
    setImg(imgName);
  };

  const getPostCaption = (event) => {
    setCaption(event.target.value);
  };

  const sentPost = (event) => {
   
    let today = new Date().toLocaleDateString();
   
    let temp = {
      "username": logindata,
      "image": img,
      "captions": caption,
      "date": today,
      "share": "",
      "comment": [],
    };
    setPostArray((currentArray) => [...currentArray, temp]);
    setOpen(false)
  };

  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Delete"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50%)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <SytledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={280}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={5}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Create Post
          </Typography>
          <Userbox>
            <Avatar
              alt="Remy Sharp"
              src="https://image.shutterstock.com/image-photo/guy-cap-on-street-1825-260nw-1568066887.jpg"
              sx={{ width: 30, height: 30 }}
            />
           
            <Typography fontWeight={500} variant="span">
              {logindata}
            </Typography>
          </Userbox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={4}
            placeholder="What's on your mind?"
            variant="standard"
            onChange={getPostCaption}
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <PersonAdd color="error" />
            <Image color="success" />
            <input type="file" onChange={getPostImg} />
          </Stack>
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button onClick={sentPost}>Post</Button>
          </ButtonGroup>
        </Box>
      </SytledModal>
    </>
  );
};

export default Add;
