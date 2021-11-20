import React, { useState } from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { CardActionArea, Checkbox, Divider, Grid } from "@mui/material";


const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function SideCard() {
  const [cards, setCards] = useState([
    {
      image: "./assets/sidebar/logo.png",
      id: "1",
      title: "Type",
      subTitle: "Truck",
      checked: false,
    },
    {
      image: "./assets/sidebar/logo.png",
      id: "2",
      title: "Type",
      subTitle: "Truck",
      checked: false,
    },
    {
      image: "./assets/sidebar/logo.png",
      id: "3",
      title: "Type",
      subTitle: "Truck",
      checked: false,
    },
    {
      image: "./assets/sidebar/logo.png",
      id: "4",
      title: "Type",
      subTitle: "Truck",
      checked: false,
    },
  ]);

  const toggleCard = (card) => {
    let updatedCards = cards.map((c, i) => {
      if (c.id === card.id) {
        c.checked = !c.checked;
      }

      return c;
    });
    setCards(updatedCards);
  };

  return (
    // <Card sx={{ maxWidth: 280, m: 1, height: "80px" }}>
    //   <CardActionArea>
    <div>
      {cards.map((data, index) => {
        return (
          <Card
            sx={{ maxWidth: 280, m: 1, height: "80px" }}
            key={index}
            onClick={() => {
              toggleCard(data);
            }}
          >
            <CardActionArea>
              <Grid
                container
                item
                xs={12}
                sx={{
                  backgroundColor: "#ffffff",
                  height: "80px",
                  justifyContent: "space-around",
                }}
              >
                <Grid
                  item
                  xs={5}
                  sx={{ paddingTop: "15px", px: 1, margin: "0px" }}
                >
                  <img
                    src={data.image}
                    alt="Car"
                    width="100px"
                    height="50px"
                    sx={{ background: "#fff", float: "left" }}
                  />
                </Grid>
                <Grid
                  item
                  xs={6.5}
                  sx={{ paddingTop: "15px", px: 1, margin: "0px" }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "#626970",
                      mb: 0.5,
                      letterSpacing: "0.09em",
                      fontFamily: "Lora",
                    }}
                  >
                    {data.title}
                  </Typography>
                  <Divider />
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      color: "#000",
                      mt: 0.5,
                      fontFamily: "Lora",
                    }}
                  >
                    {data.subTitle}
                    <Checkbox
                      {...label}
                      checked={data.checked}
                      sx={{
                        p: 0,
                        px: 1,
                        borderColor: "#626970",
                        CardActionArea: "null",
                      }}
                    />
                  </Typography>
                </Grid>
              </Grid>
            </CardActionArea>
          </Card>
        );
      })}
    </div>
  );
}
