import {TextBlock} from "@/types/blocks";
import Divider from "@/Components/Common/Divider";

export default function Text({ block }: { block: TextBlock }) {
    return (
        <>
            {
                block.title ? (
                    <>
                        <h2 className="text-center text-2xl font-semibold leading-8 text-gray-900 uppercase"
                            dangerouslySetInnerHTML={{__html: block.title}}/>
                        <Divider/>
                    </>
                ) : null
            }
            {
                block.content ? (
                    <div className={"leading-8"} dangerouslySetInnerHTML={{__html: block.content}}></div>
                ) : null
            }
        </>

)
}
