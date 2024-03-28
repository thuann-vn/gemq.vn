import {Testimonial} from "@/types";
import Container from "@/Components/Layout/Container";
import {imageStorageUrl} from "@/Utils/Helper";

export default function TestimonialItem({item}: { item: Testimonial }) {
    return (
        <section
            className="relative isolate overflow-hidden bg-main-50 rounded-lg p-3 py-6 hover:shadow-md transition-all">
            <Container>
                <figure>
                    <blockquote className="text-center font-semibold leading-8 text-gray-900">
                        <p>
                            “{item.content}”
                        </p>
                    </blockquote>
                    <figcaption className="mt-10">
                        <img
                            className="mx-auto h-16 w-16 rounded-full"
                            src={imageStorageUrl(item.image)}
                            alt={item.name}
                        />
                        <div className="mt-4 space-x-3 text-center">
                            <div className="font-semibold text-gray-900">{item.name}</div>
                            <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                                <circle cx={1} cy={1} r={1}/>
                            </svg>
                            <div className="text-gray-600">{item.position}</div>
                        </div>
                    </figcaption>
                </figure>
            </Container>
        </section>
    )
}
