const Photo = ({ webp, src, alt, width, height, className, imgClassName, loading, fetchPriority }) => {
  return (
    <picture className={className}>
      {webp ? <source srcSet={webp} type="image/webp" /> : null}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={imgClassName}
        loading={loading}
        fetchPriority={fetchPriority}
      />
    </picture>
  );
};

export default Photo;
