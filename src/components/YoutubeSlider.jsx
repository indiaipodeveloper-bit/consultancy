import React, { useRef } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";

const YoutubeSlider = () => {
  const videos = [
    { id: 1, url: "https://youtu.be/oNqUSe7S3C4?si=POE2DOjgpKHvY-4K" },
    { id: 2, url: "https://youtu.be/L_UJcMTgyI4?si=EMjEvs46lZXrM8Kk" },
    { id: 3, url: "https://youtu.be/kOzH2bPzMZU?si=GMAFagcLwsz8gayn" },
    { id: 4, url: "https://youtu.be/kOzH2bPzMZU?si=GMAFagcLwsz8gayn" },
  ];
  return (
    <>
      <div className="w-full m-auto px-4 relative">
        <Carousel
          opts={{ align: "start" }}
          className="w-full max-w-7xl mx-auto relative"
        >
          <CarouselContent className="w-full pl-5 items-center flex">
            {videos.map((video) => {
              const embedUrl = video.url
                .replace("watch?v=", "embed/")
                .replace("youtu.be/", "www.youtube.com/embed/");
              return (
                <CarouselItem
                  key={video.id}
                  className="basis-full md:basis-1/3 flex justify-center "
                >
                  <Card className="bg-transparent  border-none shadow-none w-full">
                    <CardContent className="flex w-full items-center justify-center p-4">
                      <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl transition-all duration-300">
                        <iframe
                          className="w-full h-full"
                          src={embedUrl}
                          title={`YouTube video ${video.url}`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              );
            })}
          </CarouselContent>

          <CarouselPrevious className="absolute left-1  top-1/2 text-black cursor-pointer z-50">
            <button className="bg-white/90  rounded-full w-10 h-10 flex items-center justify-center shadow-md">
              <FaArrowLeft />
            </button>
          </CarouselPrevious>

          <CarouselNext className="absolute right-1 top-1/2 text-black cursor-pointer  z-50">
            <button className="bg-white/90   rounded-full w-10 h-10 flex items-center justify-center shadow-md">
              <FaArrowRight />
            </button>
          </CarouselNext>
        </Carousel>
      </div>
    </>
  );
};

export default YoutubeSlider;
