import React, { memo } from "react";
import { ReaderContext } from "@/context";

const NavigationButton = memo(({ action, disabled }) => (
  <button
    style={{ width: "20%", minWidth: "100px", height: "100%" }}
    onClick={action}
    disabled={disabled}
  />
));

const NavigationOverlay = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        left: "0",
        top: "0",
      }}
    >
      <ReaderContext.Consumer>
        {({
          mangaMode,
          navigateBackward,
          navigateForward,
          isFirstPage,
          isLastPage,
        }) => (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <NavigationButton
              action={mangaMode ? navigateForward : navigateBackward}
              disabled={mangaMode ? isLastPage : isFirstPage}
            />
            <NavigationButton
              action={mangaMode ? navigateBackward : navigateForward}
              disabled={mangaMode ? isFirstPage : isLastPage}
            />
          </div>
        )}
      </ReaderContext.Consumer>
    </div>
  );
};

export default NavigationOverlay;