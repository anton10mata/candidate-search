const reportWebVitals = (onPerfEntry?: (entry: any) => void) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import("web-vitals").then((module) => {
      module.onCLS(onPerfEntry);
      module.onFID(onPerfEntry);
      module.onFCP(onPerfEntry);
      module.onLCP(onPerfEntry);
      module.onTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
