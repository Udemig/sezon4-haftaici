import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { JHolderAlbum } from "../hooks/useJsonplaceholderApi";

/**
State'imizin içeriği şu şekilde olmalı:

{
    albums: {
        // userId : album dizisi
        1: [
            {
                album bilgileri
            },
            {
                albüm bilgileri
            }
        ],
        2: [
            { albüm bilgisi },
            { albüm bilgisi...}
        ],
        5: [

        ]
    }
}
*/

export type JHolderAlbumStateType = {
  albums: {
    [userId: number]: JHolderAlbum[] | undefined;
  };
};

const initialState: JHolderAlbumStateType = {
  albums: {},
};

//initialState.albums[1] = []

const jholderAlbumSlice = createSlice({
  name: "jholderAlbumSlice",
  initialState,
  reducers: {
    setUserAlbum: (
      state,
      action: PayloadAction<{
        userId: number;
        albums: JHolderAlbum[];
      }>
    ) => {
      console.log(">> Set User Album reducer called", action.payload);

      // Bu user'a ait olan albümleri set ediyoruz.
      state.albums[action.payload.userId] = action.payload.albums;
    },
  },
});

export default jholderAlbumSlice.reducer;

export const { setUserAlbum } = jholderAlbumSlice.actions;
