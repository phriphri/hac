import Image from 'next/image';

export default function SectionImage({ src, alt, aspectRatio = 'aspect-[16/10]', className = '' }) {
  const hasImage = src && src !== '';

  if (!hasImage) {
    return (
      <div className={`img-placeholder ${aspectRatio} ${className}`}>
        <span>{alt || 'Image requise'}</span>
      </div>
    );
  }

  return (
    <div className={`image-cover ${aspectRatio} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );
}
