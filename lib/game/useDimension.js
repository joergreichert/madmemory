import{ useEffect, useLayoutEffect, useState } from "react";

export default (targetRef) => {
    const [dimensions, setDimensions] = useState({ width:0, height: 0 });
    let resizeTimer = null;
    const resetTimeout = 100;
    const refreshDimensions = () => {
      if (targetRef.current) {
        const { offsetWidth, offsetHeight } = targetRef.current
        setDimensions({width: offsetWidth, height: offsetHeight})
      }
    }
    useLayoutEffect(() => {
      refreshDimensions();
    }, [])
    useEffect(() => {
      window.addEventListener('resize', () => {
        clearInterval(resizeTimer);
        resizeTimer = setTimeout(refreshDimensions, resetTimeout);
      });
    }, []);
    return dimensions;
}