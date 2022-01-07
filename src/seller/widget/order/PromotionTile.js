import React from "react";
import { Card, CardActionArea, CardContent, CardMedia, Tooltip, Typography, } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

const PromotionTile = ({ promotionImageUrl, label, tooltip, ...props }) => {
  return (
    <Card>
      <CardActionArea
        sx={{ display: "flex", flexDirection: "column", pt: 3, px: 3 }}
      >
        <Tooltip title={tooltip}>
          <InfoIcon sx={{ alignSelf: "flex-end" }} />
        </Tooltip>
        <CardMedia
          component={"img"}
          src={promotionImageUrl}
          alt={""}
          sx={{ m: 4, width: "60px", height: "auto" }}
        />
        <CardContent>
          <Typography variant={"body2"}>{label}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PromotionTile;
