import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { fCurrency } from "@/utils/format-number";

import Label from "@/components/label";
import { ColorPreview } from "@/components/color-utils";

// ----------------------------------------------------------------------

export default function FoodCard({ food }: any) {
  const renderStatus = (
    <Label
      variant="filled"
      sx={{
        zIndex: 9,
        top: 16,
        right: 16,
        position: "absolute",
        textTransform: "uppercase",
      }}
    >
      {food.status}
    </Label>
  );

  const renderImg = (
    <Box
      component="img"
      alt={food.name}
      src={food.image}
      sx={{
        top: 0,
        width: 1,
        height: 1,
        objectFit: "cover",
        position: "absolute",
      }}
    />
  );

  const renderPrice = (
    <Typography variant="subtitle1">
      <Typography
        component="span"
        variant="body1"
        sx={{
          color: "text.disabled",
          textDecoration: "line-through",
        }}
      >
        {food.priceSale && fCurrency(food.priceSale)}
      </Typography>
      &nbsp;
      {fCurrency(food.price)}
    </Typography>
  );

  const renderDescription = (
    <Typography
      variant="caption"
      sx={{ fontSize: "12px", color: "gray", mb: 2 }}
    >
      Тайлбар: {food.description}
    </Typography>
  );
  const renderCategory = (
    <Typography
      variant="caption"
      sx={{ fontSize: "12px", color: "black", mb: 2 }}
    >
      Ангилал: {food.category.name}
    </Typography>
  );
  return (
    <Card
      sx={{
        ":hover": {
          cursor: "pointer",
        },
      }}
    >
      <Box sx={{ pt: "100%", position: "relative" }}>
        {food.status && renderStatus}

        {renderImg}
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Link color="inherit" underline="hover" variant="subtitle2" noWrap>
          {food.name}
        </Link>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          {renderPrice}
        </Stack>
        {renderCategory}
        {renderDescription}
      </Stack>
    </Card>
  );
}
