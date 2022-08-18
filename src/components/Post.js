import React, { useContext, useState, useEffect } from "react";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  Grid,
  IconButton,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  BorderBottom,
  Comment,
  Favorite,
  FavoriteBorder,
  Send,
  ShowChart,
} from "@mui/icons-material";
import { myContextdata } from "./ContextData";
import { textAlign } from "@mui/system";

const Post = () => {
  const { postArray, setPostArray, comment, setComment, logindata } =
    useContext(myContextdata);
  const [open, setOpen] = useState(false);
  const [sharepost, setSharepost] = useState("");

  // postArray.length ? console.log(postArray) : <></>;

  const PostComment = (indx) => {
    let a = document.getElementById(indx);
    postArray.map((item, index) => {
      if (index === indx) {
        setSharepost(logindata +"share this post with " + item.username);
        item.comment.push(comment);
      }
    });

    if (a.style.display === "block") {
      a.style.display = "none";
    } else {
      a.style.display = "block";
    }
    setComment("");
  };

  const share = (indx) => {
    setSharepost();
    console.table(postArray);
    postArray.map((item, index) => {
      if (index === indx) {
        setSharepost(logindata + "share this post with " + item.username);
        item.share = logindata + " share this post with " + item.username;
      }
    });
  };

  const show = (index) => {
    let a = document.getElementById(index);
    if (a.style.display === "block") {
      a.style.display = "none";
    } else {
      a.style.display = "block";
    }
  };

  return (
    <>
      {postArray.map((item, index) => (
        <>
          <Card
            sx={{
              marginLeft: 5,
              marginRight: 5,
              marginTop: 5,
              marginBottom: 1,
            }}
          >
            {console.log(postArray)}
            <div
              style={{
                marginLeft: "20px",
                marginTop: "20px",
                fontWeight: "300",
                marginTop: "5px",
              }}
            >
              {item.share}
            </div>

            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={item.username}
              subheader={item.date}
            />

            <CardMedia
              component="img"
              height="350"
              image={item.image}
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {item.captions}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite sx={{ color: "red" }} />}
                />
              </IconButton>
              <IconButton aria-label="share" onClick={() => share(index)}>
                <ShareIcon />
              </IconButton>
              <IconButton sx={{ marginLeft: 2 }} onClick={() => show(index)}>
                <Comment />
              </IconButton>
            </CardActions>
          </Card>
          <Card
            id={index}
            sx={{
              marginLeft: 5,
              marginRight: 5,
              textAlign: "center",
              alignItems: "center",
              display: "none",
            }}
          >
            <TextField
              placeholder="comments..."
              sx={{
                width: "90%",
                border: "none",
                outline: "none",
              }}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></TextField>
            <IconButton>
              <Send onClick={() => PostComment(index)} />
            </IconButton>
          </Card>

          {item.comment.length > 0 ? (
            <Card
              sx={{
                marginLeft: 5,
                marginRight: 5,
                border: "none",
                boxShadow: "none",
                backgroundColor: "#E0EBEA",
                
              }}
            >
              {item.comment.map((item) => (
                <CardHeader subheader={item} />
              ))}
            </Card>
          ) : (
            <></>
          )}
        </>
      ))}
    </>
  );
};

export default Post;
