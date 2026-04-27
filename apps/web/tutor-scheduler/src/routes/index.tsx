import { createFileRoute } from '@tanstack/react-router'

import {
  Carousel,
  //CarouselContent,
  CarouselContentGrowToFit,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import {
  Card,
  //CardAction,
  CardContent,
  CardDescription,
  //CardDescription,
  //CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import libraryImg from "@/assets/library-card-img.jpg"
import lightbulbImg from "@/assets/lightbuld-card-img.jpg"
import loveImg from "@/assets/listen-learn-love-card-img.jpg"
import tutorImg from "@/assets/tutor-card-img.jpg"
//import { Car } from 'lucide-react'

export const Route = createFileRoute('/')({ component: App })

const cardContent = [
  {
    id: 1,
    title: "Card 1",
    description: "Description 1",
    image: libraryImg
  },
  {
    id: 2,
    title: "Card 2",
    description: "Description 2",
    image: lightbulbImg
  },
  {
    id: 3,
    title: "Card 3",
    description: "Description 3",
    image: loveImg
  },
  {
    id: 4,
    title: "Card 4",
    description: "Description 4",
    image: tutorImg
  }
]

function App() {
  return (
      <Carousel className="flex flex-1 w-full" 
        opts={{
          loop: true, 
          align: "start"
        }}
      >
        <CarouselContentGrowToFit className="flex flex-1 w-full">
          {cardContent.map((item, index) => (
            <CarouselItem
              key={index} 
              className="w-full max-h-dvh- basis-full"
            >
              <Card className="flex flex-col h-dvh p-6 w-full">
                <div className="relative w-full flex-1 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className={"w-full h-full object-cover opacity-50"} 
                  />
                </div>

                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>

                <CardContent className="flex items-center justify-center">
                  
                </CardContent>
              </Card>
          </CarouselItem>      
          ))}  
        </CarouselContentGrowToFit>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
  )
}
