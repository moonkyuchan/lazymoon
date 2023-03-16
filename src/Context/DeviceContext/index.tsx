import { useState, useEffect, createContext, ReactElement } from "react";
import UAParser from "ua-parser-js";

interface IDeviceContextProps {
  isMobile: boolean;
  browser: UAParser.IBrowser;
}

type Props = {
  children?: ReactElement;
};

const DeviceContext = createContext<any>({});
const parser = new UAParser();

export function DeviceProvider({ children }): ReactElement<Props> {
  const [device, setDevice] = useState<IDeviceContextProps>({
    isMobile: parser.getDevice().type === "mobile",
    browser: parser.getBrowser(),
  });

  useEffect(() => {
    const handleResize = () => {
      const newParser = new UAParser();
      const newValue = newParser.getDevice().type === "mobile";
      setDevice((state) => {
        if (state.isMobile !== newValue) {
          return {
            ...state,
            isMobile: newValue,
          };
        }
        return state;
      });
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <DeviceContext.Provider value={{ device, setDevice }}>
      {children}
    </DeviceContext.Provider>
  );
}

export default DeviceContext;
