import { Grid, useMediaQuery, Hidden } from "@material-ui/core";
import React from "react";
import AddSong from "./components/AddSong";
import Header from "./components/Header";
import SongList from "./components/SongList";
import SongPlayer from "./components/SongPlayer";
import songReducer from "./reducer";

export const SongContext = React.createContext({
  song: {
    id: "88f83922-1c28-40b5-ad6a-8055fdfc32d0",
    title: "Girls Like You",
    artist: "The Naked And Famous",
    thumbnail: "http://img.youtube.com/vi/WUIm01odei0/0.jpg",
    url: "https://www.youtube.com/watch?v=WUIm01odei0",
    duration: 247,
  },
  isPlaying: false,
});

function App() {
  const initialSongState = React.useContext(SongContext);
  const [state, dispatch] = React.useReducer(songReducer, initialSongState);
  const greaterThanMd = useMediaQuery(theme => theme.breakpoints.up("md"));
  const greaterThanSm = useMediaQuery(theme => theme.breakpoints.up("sm"));

  return (
    <SongContext.Provider value={{ state, dispatch }}>
      <Hidden only='xs'>
        <Header />
      </Hidden>
      <Grid container spacing={3}>
        <Grid
          style={{
            paddingTop: greaterThanSm ? 80 : 10,
          }}
          item
          xs={12}
          md={7}>
          <AddSong />
          <SongList />
        </Grid>
        <Grid
          style={
            greaterThanMd
              ? {
                  position: "fixed",
                  width: "100%",
                  right: 0,
                  top: 70,
                }
              : {
                  position: "fixed",
                  width: "100%",
                  left: 0,
                  bottom: 0,
                }
          }
          item
          xs={12}
          md={5}>
          <SongPlayer />
        </Grid>
      </Grid>
    </SongContext.Provider>
  );
}

export default App;
