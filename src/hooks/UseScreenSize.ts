
import ScreenSize from "../types/ScreenSize";
import useViewport from "./UseViewport"

const breakpoints = {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400
}




const useScreenSize = () : ScreenSize =>{
    const {width} = useViewport();
    if(width < breakpoints.sm) return ScreenSize.xs
    if(width < breakpoints.md) return ScreenSize.sm
    if(width < breakpoints.lg) return ScreenSize.md
    if(width < breakpoints.xl) return ScreenSize.lg
    if(width < breakpoints.xxl) return ScreenSize.lg
    return ScreenSize.xxl
}

export default useScreenSize;
