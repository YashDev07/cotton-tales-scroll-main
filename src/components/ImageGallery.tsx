interface ImageGalleryProps {
  images: Array<{
    src: string;
    alt: string;
    caption?: string;
    description?: string;
  }>;
  title?: string;
}

const ImageGallery = ({ images, title }: ImageGalleryProps) => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-green-50 to-amber-50">
      <div className="max-w-6xl mx-auto">
        {title && (
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12 animate-fade-in">
            {title}
          </h3>
        )}

        <div className="space-y-12">
          {images.map((image, index) => (
            <div 
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-8 animate-fade-in ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Image Side */}
              <div className="flex-1">
                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {image.caption && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <p className="text-white text-sm font-medium">{image.caption}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Text Side */}
              <div className="flex-1 space-y-4">
                <h4 className="text-2xl font-bold text-gray-800">
                  {image.caption || `Story ${index + 1}`}
                </h4>
                <div className="prose prose-lg text-gray-600">
                  {image.description ? (
                    <p>{image.description}</p>
                  ) : (
                    <div>
                      <p className="mb-4">
                        This image showcases the authentic cotton farming practices in Madhya Pradesh, 
                        highlighting the dedication and hard work of local farmers who form the backbone 
                        of India's cotton industry.
                      </p>
                      <p>
                        Through sustainable farming methods and traditional knowledge passed down through 
                        generations, these farmers continue to contribute significantly to both local 
                        communities and the global cotton market.
                      </p>
                    </div>
                  )}
                </div>

                {/* Teal Impact Story Text */}
                <div className="flex items-center space-x-2 text-sm text-[#236A74] font-medium">
                  <span className="w-2 h-2 bg-[#236A74] rounded-full"></span>
                  <span>Impact Story #{index + 1}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
