import { Grid, Button, Typography } from "@mui/material";
export default function Home() {
  return (
    <main>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Typography variant="h3">Welcome MUI Framework</Typography>
        </Grid>
        <Grid xs={12} md={6}>
          <Button variant="contained" color="secondary">
            Hi bitch
          </Button>
        </Grid>
      </Grid>
    </main>
  );
}
