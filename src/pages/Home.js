import { Container, Grid, Typography } from "@mui/material";
import cities from "../data.json";
import TourCard from "../components/TourCard";

export default function Home() {
  return (
    <>
      <Container>
        {cities.map((city) => (
          <>
            <Typography
              variant="h4"
              component="h2"
              marginBottom={3}
              marginTop={5}
            >
              Top {city.name} Tours
            </Typography>
            <Grid container spacing={5}>
              {city.tours.map((tour,index) => (
                <TourCard tour={tour} Key={index} />
              ))}
            </Grid>
          </>
        ))}
      </Container>
    </>
  );
}