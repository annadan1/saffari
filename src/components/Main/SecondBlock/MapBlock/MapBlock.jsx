import styles from "./MapBlock.module.scss";
import pins from "../../../../assets/pins.json";
import { useMap } from "../../../../providers/map-provider";
import { useRef } from "react";
import { Mark } from "./Mark/Mark";

export const MapBlock = ({ activeButton }) => {
  const mapRef = useRef(null);

  const { reactifyYandexApi } = useMap();
  if (!reactifyYandexApi) return <div />;

  const { api } = reactifyYandexApi;
  const {
    YMap,
    YMapMarker,
    YMapDefaultSchemeLayer,
    YMapLayer,
    YMapDefaultFeaturesLayer,
  } = api;

  return (
    <div className={styles.map}>
      <YMap
        location={{
          center: [37.53922498324721, 55.74674820587817],
          zoom: 15,
        }}
        ref={mapRef}
      >
        <YMapDefaultSchemeLayer />
        <YMapDefaultFeaturesLayer />
        <YMapLayer />

        {pins?.map((pin) => (
          <YMapMarker
            coordinates={[pin.lat, pin.lng]}
            key={pin.id}
            title={pin.name}
          >
            <Mark pin={pin} activeButton={activeButton} />
          </YMapMarker>
        ))}
      </YMap>
    </div>
  );
};
