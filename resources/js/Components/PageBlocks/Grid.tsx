import {Block, GridBlock} from "@/types/blocks";
import PageBlock from "@/Components/PageBlocks/PageBlock";
import Container from "@/Components/Layout/Container";
import Divider from "@/Components/Common/Divider";
import * as React from "react";

export default function Grid({ block }: { block: GridBlock }) {
    return (
        <Container>
            <>
                <h2 className="text-center text-2xl font-semibold leading-8 text-gray-900 uppercase">
                    {block.title}
                </h2>
                <Divider/>
            </>
            <div className={`grid md:grid-cols-${block.columns.length} gap-x-2`}>
                {
                    block.columns.map((column: Block[], index: any) => (
                        <div>
                            {
                                column.map((item: Block, index: any) => (
                                    <PageBlock block={item}/>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        </Container>
    )
}
