import React from "react";
import PropTypes from "prop-types";
import Wrapp from "@/components/wrapp";
import OptionsConsumer from "@/components/options";
import KeyboardConsumer from "@/components/keyboard";
import UncompressConsumer from "@/components/uncompress";
import CanvasRenderConsumer from "@/components/render";
import { ReaderContext, ReaderProvider } from "@/context";
import NavigationOverlay from "./components/navigationOverlay";
// Styles
// import "@/css";

const Villain = ({ source, style, className, options, workerUrl }) => {
  return (
    <ReaderProvider externalOptions={options}>
      <Wrapp className={className} style={style}>
        {(container) => (
          <React.Fragment>
            <KeyboardConsumer container={container} />
            <OptionsConsumer options={options} />
            <UncompressConsumer source={source} workerUrl={workerUrl} />
            <CanvasRenderConsumer container={container} />
            <NavigationOverlay />
          </React.Fragment>
        )}
      </Wrapp>
    </ReaderProvider>
  );
};

Villain.propTypes = {
  source: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Blob)]),
  className: PropTypes.string,
  workerUrl: PropTypes.string,
  options: PropTypes.shape({
    theme: PropTypes.string,
    maxPages: PropTypes.number,
    allowFullscreen: PropTypes.bool,
    allowGlobalShortcuts: PropTypes.bool,
  }),
};

export default React.memo(Villain);
