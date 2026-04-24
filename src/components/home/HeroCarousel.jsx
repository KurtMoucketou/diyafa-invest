import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';

// Import des styles Swiper
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1512813195386-6cf811ad3542?w=1600',
    alt: 'Casablanca Marina',
    title: 'Vue sur la Marina',
  },
  {
    url: 'https://images.unsplash.com/photo-1736194268062-64879810463a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Casablanca Centre ville',
    title: 'Centre ville animé',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1684175656278-3759b542bb21?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Quartier Gauthier',
    title: 'Quartier Gauthier',
  },
  {
    url: 'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?w=1600',
    alt: 'Villa de luxe',
    title: 'Architecture premium',
  },
  {
    url: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1600',
    alt: 'Appartement de luxe',
    title: 'Intérieur contemporain',
  },
];

export default function HeroCarousel() {
  return (
    <div className="absolute inset-0 z-0">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        speed={1500}
        loop={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        className="w-full h-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#1E1E1E]" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Styles personnalisés pour le carrousel */}
      <style jsx>{`
        :global(.swiper-pagination-bullet) {
          background-color: #D4AF37 !important;
          opacity: 0.5;
        }
        :global(.swiper-pagination-bullet-active) {
          opacity: 1;
          background-color: #D4AF37 !important;
        }
        :global(.swiper-pagination) {
          bottom: 30px !important;
          z-index: 20;
        }
      `}</style>
    </div>
  );
}