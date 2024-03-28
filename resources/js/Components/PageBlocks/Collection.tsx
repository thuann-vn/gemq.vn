import Container from "@/Components/Layout/Container";
import {CollectionBlock} from "@/types/blocks";
import ProductSlider from "@/Components/Products/ProductSlider";
import Divider from "@/Components/Common/Divider";

export default function Collection({block}: { block: CollectionBlock }) {
    return (
        <div className={"py-10"}>
            <Container>
                <div className="flex items-center justify-center">
                    <div className={"text-center self-center"}>
                        <h2 className="text-center text-2xl font-semibold leading-8 text-gray-900 uppercase">
                            {block.collection.name}
                        </h2>
                        <Divider/>
                        <p className="text-sm text-gray-900">{block.collection.description}</p>
                    </div>
                </div>
                <ProductSlider products={block.collection.home_products}/>
            </Container>
        </div>
    )
}
