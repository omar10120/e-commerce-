import * as React from "react";
import Image from "next/image";

interface GalleryProps {
  images: string[];
  alt: string;
}

export const Gallery: React.FC<GalleryProps> = ({ images, alt }) => {
  const [selected, setSelected] = React.useState(0);
  return (
    <div>
      <div className="mb-2">
        <Image
          src={images[selected]}
          alt={alt}
          width={600}
          height={400}
          className="rounded w-full object-cover"
        />
      </div>
      <div className="flex gap-2 overflow-x-auto">
        {images.map((img, i) => (
          <button
            key={img}
            className={`focus:outline-none border-2 rounded ${selected === i ? 'border-primary' : 'border-transparent'}`}
            onClick={() => setSelected(i)}
            aria-label={`Show image ${i + 1}`}
            tabIndex={0}
          >
            <Image
              src={img}
              alt={alt + ' thumbnail'}
              width={80}
              height={60}
              className="rounded object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}; 