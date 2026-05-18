import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

const LazyImage = ({
  src,
  alt,
  className = "",
  onClick = null,
  eager = false,
  ...props
}) => {
  const containerRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(eager);
  const [imageSrc, setImageSrc] = useState(null);
  const [isLoading, setIsLoading] = useState(eager);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (eager) {
      setShouldLoad(true);
      return undefined;
    }

    if (shouldLoad) {
      return undefined;
    }

    const container = containerRef.current;

    if (!container || !("IntersectionObserver" in window)) {
      setShouldLoad(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, [eager, shouldLoad]);

  useEffect(() => {
    if (!shouldLoad) {
      return undefined;
    }

    setImageSrc(null);
    setIsLoading(true);
    setIsError(false);

    const img = new Image();

    img.onload = () => {
      setImageSrc(src);
      setIsLoading(false);
    };

    img.onerror = () => {
      setIsError(true);
      setIsLoading(false);
    };

    img.src = src;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [shouldLoad, src]);

  if (isError) {
    return (
      <div
        ref={containerRef}
        className={`${className} flex items-center justify-center bg-gray-800`}
      >
        <span className="text-gray-400">Failed to load image</span>
      </div>
    );
  }

  if (!shouldLoad || isLoading) {
    return (
      <div
        ref={containerRef}
        className={`${className} flex items-center justify-center bg-gray-900`}
      >
        {isLoading && (
          <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        )}
      </div>
    );
  }

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={className}
      onClick={onClick}
      loading={eager ? "eager" : "lazy"}
      {...props}
    />
  );
};

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  eager: PropTypes.bool,
};

export default LazyImage;
