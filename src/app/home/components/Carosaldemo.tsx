// import * as React from "react"

// import { Card, CardContent } from "@/components/ui/card"
// import {
//     Carousel,
//     CarouselContent,
//     CarouselItem,
//     CarouselNext,
//     CarouselPrevious,
// } from "@/components/ui/carousel"

// export function CarouselDemo() {
//     return (
//         <div className="flex items-center justify-center h-[100vh] w-[100vw]">
//             <Carousel className="w-full max-w-xs flex items-center justify-center bg-black">
//                 <CarouselContent>
//                     {Array.from({ length: 5 }).map((_, index) => (
//                         <CarouselItem key={index}>
//                             <div className="p-1">
//                                 <Card>
//                                     <CardContent className="aspect-square flex items-center justify-center p-6">
//                                         <span className="text-4xl font-semibold">{index + 1}</span>
//                                     </CardContent>
//                                 </Card>
//                             </div>
//                         </CarouselItem>
//                     ))}
//                 </CarouselContent>
//                 <CarouselPrevious />
//                 <CarouselNext />
//             </Carousel>
//         </div>
//     )
// }

// export default CarouselDemo;

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel"
import PieChartComponent from "@/app/components/PieChartComponent";


export function CarouselDemo() {
    // Example data and labels for the PieChartComponent
    const data = [12, 19, 3, 5, 2, 3];
    const labels = ['Pink', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];

    return (
        <div className="flex items-center justify-center h-[100vh] w-[100vw]">
            <Carousel className="w-full max-w-xs flex items-center justify-center bg-gray-200">
                <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                                <Card className="border-0">
                                    <CardContent className="aspect-square flex items-center justify-center p-6">
                                        {/* Render the PieChartComponent */}
                                        <PieChartComponent data={data} labels={labels} />
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

export default CarouselDemo;