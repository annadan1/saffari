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
      const [ymaps3React] = await Promise.all([
        ymaps3.import("@yandex/ymaps3-reactify"),
        ymaps3.ready,
      ]);
      const reactify = ymaps3React.reactify.bindTo(React, ReactDOM);
      setReactifyYandexApi({
        api: reactify.module(ymaps3),
      });
    })();
  }, []);

  return (
    <MountedMapsContext.Provider value={contextValue}>
      {props.children}
    </MountedMapsContext.Provider>
  );
};

export const useMap = () => useContext(MountedMapsContext);
