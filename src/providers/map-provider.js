import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import ReactDOM from "react-dom";

export const MountedMapsContext = createContext({
  reactifyYandexApi: null,
});

export const MapProvider = (props) => {
  const [reactifyYandexApi, setReactifyYandexApi] = useState(null);
  const contextValue = useMemo(() => ({ reactifyYandexApi }), [reactifyYandexApi]);

  useEffect(() => {
    (async () => {
      const { ymaps3 } = window;
      const [ymaps3React, ymaps3Markers] = await Promise.all([
        ymaps3.import("@yandex/ymaps3-reactify"),
        ymaps3.import("@yandex/ymaps3-markers@0.0.1"),
        ymaps3.ready,
      ]);
      const reactify = ymaps3React.reactify.bindTo(React, ReactDOM);
      setReactifyYandexApi({
        api: reactify.module(ymaps3),
        markersApi: reactify.module(ymaps3Markers),
      });
    })();
  }, []);

  return (
    <MountedMapsContext.Provider value={contextValue}>
      {props.children}
    </MountedMapsContext.Provider>
  );

  // return (
  //   <MountedMapsContext.Provider value={contextValue}>
  //     <script
  //       src={props.apiUrl}
  //       onLoad={async () => {
  //         const [ymaps3React] = await Promise.all([
  //           ymaps3.import("@yandex/ymaps3-reactify"),
  //           ymaps3.ready,
  //         ]);
  //         const reactify = ymaps3React.reactify.bindTo(React, ReactDOM);
  //         setreactifyYandexApi(reactify.module(ymaps3));
  //       }}
  //     />
  //     {props.children}
  //   </MountedMapsContext.Provider>
  // );
};

export const useMap = () => useContext(MountedMapsContext);
