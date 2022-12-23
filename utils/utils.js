import { useMediaQuery } from "react-responsive";

export const isTabletOrMobileDevice = () => {
    const mediaQuery = useMediaQuery({
        maxDeviceWidth: 1224,
        // alternatively...
        //query: "(max-device-width: 1224px)"
    });

    return mediaQuery;
}