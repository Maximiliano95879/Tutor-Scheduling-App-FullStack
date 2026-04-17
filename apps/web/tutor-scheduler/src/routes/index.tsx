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
  //CardDescription,
  //CardFooter,
  //CardHeader,
  //CardTitle,
} from "@/components/ui/card"



export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
      <Carousel className="flex flex-1 w-full">
        <CarouselContentGrowToFit className="flex flex-1 w-full">
          <CarouselItem className="flex flex-1 w-full">
            <Card className="flex flex-1 p-6 w-full">
              <CardContent className="flex-1 flex items-center justify-center">
                <p>This is a test card</p>
              </CardContent>
            </Card>
          </CarouselItem>
        </CarouselContentGrowToFit>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
  )
}
