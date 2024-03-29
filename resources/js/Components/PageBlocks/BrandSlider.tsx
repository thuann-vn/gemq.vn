import {imageStorageUrl} from "@/Utils/Helper";
import Container from "@/Components/Layout/Container";
import {ProductCategory} from "@/types";
import {BrandLogoSliderBlock} from "@/types/blocks";
import Divider from "@/Components/Common/Divider";
import * as React from "react";

export default function BrandSlider({block}: { block: BrandLogoSliderBlock }) {
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
                className="mx-auto mt-10 mb-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {
                    block.brands.map((brand: ProductCategory) => (
                        <img
                            className="transition duration-500 md:h-32 object-contain ease-in-out transform group-hover:-translate-y-1 group-hover:scale-110"
                            src={imageStorageUrl(brand.image)}
                            alt={brand.name}/>
                    ))
                }
            </div>
        </Container>
    )
}
