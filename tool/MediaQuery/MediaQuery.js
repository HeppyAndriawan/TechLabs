"use client";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export default function MediaQuery(
  style_desktop,
  style_tablet,
  style_mobile,
  style_mobileLandscape
) {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  const isMobile = useMediaQuery({
    minWidth: 320,
    maxWidth: 767,
    orientation: "portrait",
  });
  const isMobileLandscape = useMediaQuery({
    minWidth: 320,
    maxWidth: 767,
    orientation: "landscape",
  });

  // Store Styles
  const [styles, setStyles] = useState(null);

  // Export Style
  useEffect(() => {
    setStyles(null);

    // Desktop
    if (isDesktop === true) {
      setTimeout(() => {
        setStyles(style_desktop);
      }, 500);
    }

    // Tablet
    if (isTablet === true) {
      setTimeout(() => {
        setStyles(style_tablet);
      }, 500);
    }

    // Mobile
    if (isMobile === true) {
      setTimeout(() => {
        setStyles(style_mobile);
      }, 500);
    }

    // Mobile Landscape
    if (isMobileLandscape === true) {
      setTimeout(() => {
        setStyles(style_mobileLandscape);
      }, 500);
    }
  }, [isDesktop, isTablet, isMobile, isMobileLandscape]);

  return { styles };
}

/**
 * HOW TO USE
 * const { styles } = MediaQuery(desktop, tablet, mobile, tablet);
 *
 * RETURN COMPONENT NEED TO INCLUDE styles !== null && (COMPONENT)
 */
