import axios from "axios";
import { useParams } from "react-router-dom";
import useJsonplaceholderApi, {
  JHolderPhoto,
} from "../../hooks/useJsonplaceholderApi";
import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

export default function JHolderAlbumDetailPage() {
  const params = useParams();
  const api = useJsonplaceholderApi();
  const [photos, setPhotos] = useState<JHolderPhoto[] | null>(null);

  const [initialized, setInitialized] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const photos = await api.photos(parseInt(params.albumId as string));

      setPhotos(photos);
      setInitialized(true);
    })();
  }, []);

  if (!initialized) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }

  return (
    <>
      <h1>JHolderAlbumDetailPage</h1>

      <Splide
        options={{
          rewind: true,
          width: "100%",
          gap: "1rem",
        }}
      >
        {photos?.map((photo, index) => {
          return (
            <SplideSlide>
              <img src={photo.url} alt={photo.title} />
            </SplideSlide>
          );
        })}

        <SplideSlide>
          <img
            src="https://4kwallpapers.com/images/walls/thumbs_3t/4562.png"
            alt="Image 2"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src="https://4kwallpapers.com/images/walls/thumbs_3t/4562.png"
            alt="Image 2"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src="https://4kwallpapers.com/images/walls/thumbs_3t/4562.png"
            alt="Image 2"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src="https://4kwallpapers.com/images/walls/thumbs_3t/4562.png"
            alt="Image 2"
          />
        </SplideSlide>
      </Splide>
    </>
  );
}
