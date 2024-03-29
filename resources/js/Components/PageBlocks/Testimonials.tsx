import Container from "@/Components/Layout/Container";
import {TestimonialsBlock} from "@/types/blocks";
import Divider from "@/Components/Common/Divider";
import * as React from "react";
import TestimonialItem from "@/Components/PageBlocks/TestimonialItem";

export default function Testimonials({block}: { block: TestimonialsBlock }) {
    return (
        <Container>
            {
                block.title ? (
                    <>
                        <h2 className="text-center text-2xl font-semibold leading-8 text-gray-900 uppercase">
                            {block.title}
                        </h2>
                        <Divider/>
                    </>
                ) : null
            }
            <div
                className="mx-auto mt-10 grid max-w-lg sm:grid-cols-2 md:grid-cols-3 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:gap-x-10 lg:mx-0 lg:max-w-none">
                {
                    block.items.map((item) => (
                        <div key={item.id}>
                            <TestimonialItem item={item}/>
                        </div>
                    ))
                }
            </div>
        </Container>
    )
}
