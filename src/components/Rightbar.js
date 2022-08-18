import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";

import React from "react";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={250}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar
            alt="Remy Sharp"
            src="https://image.shutterstock.com/image-photo/guy-cap-on-street-1825-260nw-1568066887.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://image.shutterstock.com/image-photo/portrait-woman-260nw-181672937.jpg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://image1.masterfile.com/getImage/NzAwLTA2MjgyMDY3ZW4uMDAwMDAwMDA=AJzmAX/700-06282067en_Masterfile.jpg"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://i.insider.com/62129b83f0b06900185ebbe2?width=700"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://i.pinimg.com/originals/b2/a7/be/b2a7be4f5f0201bdac0c1b9adb749c2c.jpg"
          />

          <Avatar
            alt="Remy Sharp"
            src="https://image.shutterstock.com/image-photo/guy-cap-on-street-1825-260nw-1568066887.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://image.shutterstock.com/image-photo/portrait-woman-260nw-181672937.jpg"
          />
          <Avatar
            alt="Remy Sharp"
            src="https://image.shutterstock.com/image-photo/guy-cap-on-street-1825-260nw-1568066887.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://image.shutterstock.com/image-photo/portrait-woman-260nw-181672937.jpg"
          />
        </AvatarGroup>
        <Typography mt={2} mb={2} fontWeight={100}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q="
              alt=""
            />
          </ImageListItem>
          {/* <ImageListItem>
            <img
              src="https://media.istockphoto.com/photos/taj-mahal-mausoleum-in-agra-picture-id1146517111?k=20&m=1146517111&s=612x612&w=0&h=vHWfu6TE0R5rG6DJkV42Jxr49aEsLN0ML-ihvtim8kk="
              alt=""
            />
          </ImageListItem> */}
        </ImageList>

        <Typography mt={2} fontWeight={100}>
          Latest Conversations
        </Typography>

        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://image.shutterstock.com/image-photo/guy-cap-on-street-1825-260nw-1568066887.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
