'use client';

import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export default function Media(props) {
  const [mobile, setMobile] = useState();
  const [tabletAndDesktop, setTabletAndDesktop] = useState();
  const [tablet, setTablet] = useState();
  const [desktop, setDesktop] = useState();
  const [desktopNav, setDesktopNav] = useState();
  const [mobileNav, setMobileNav] = useState();
  const [miniTab, setMiniTab] = useState();
  const [miniMobile, setMiniMobile] = useState();
  const [tablet2, setTablet2] = useState();
  const [desktop2, setDesktop2] = useState();
  const [tabletAndDesktop2, setTabletAndDesktop2] = useState();
  const [customTab, setCustomTab] = useState();
  const [customDesktop, setCustomDesktop] = useState();

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isMiniMobile = useMediaQuery({ maxWidth: 649 });
  const isMiniTab = useMediaQuery({ minWidth: 650, maxWidth: 838 });
  const isTabletAndDesktop = useMediaQuery({ minWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1116 });
  const isTablet2 = useMediaQuery({ minWidth: 839, maxWidth: 1116 });
  const isDeskTop = useMediaQuery({ minWidth: 1117 });
  const isDeskTopNav = useMediaQuery({ minWidth: 1050 });
  const isMobileNav = useMediaQuery({ maxWidth: 1049 });
  const isDeskTop2 = useMediaQuery({ minWidth: 1283 });
  const isTabletAndDesktop2 = useMediaQuery({ minWidth: 768, maxWidth: 1282 });
  const isCustomTab = useMediaQuery({ maxWidth: 990 });
  const isCustomDesktop = useMediaQuery({ minWidth: 991 });

  useEffect(() => {
    setMobile(isMobile);
    setTabletAndDesktop(isTabletAndDesktop);
    setTablet(isTablet);
    setDesktop(isDeskTop);
    setDesktopNav(isDeskTopNav);
    setMobileNav(isMobileNav);
    setMiniMobile(isMiniMobile);
    setMiniTab(isMiniTab);
    setTablet2(isTablet2);
    setDesktop2(isDeskTop2);
    setTabletAndDesktop2(isTabletAndDesktop2);
    setCustomTab(isCustomTab);
    setCustomDesktop(isCustomDesktop);
  }, [
    isMobile,
    isTabletAndDesktop,
    isTablet,
    isDeskTop,
    isDeskTopNav,
    isMobileNav,
    isMiniTab,
    isMiniMobile,
    isTablet2,
    isDeskTop2,
    isTabletAndDesktop2,
    isCustomTab,
    isCustomDesktop,
  ]);

  return {
    mobile,
    tabletAndDesktop,
    tablet,
    desktop,
    desktopNav,
    mobileNav,
    miniTab,
    miniMobile,
    tablet2,
    desktop2,
    tabletAndDesktop2,
    customTab,
    customDesktop,
  };
}
