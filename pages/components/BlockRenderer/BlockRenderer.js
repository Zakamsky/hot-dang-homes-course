import { Cover } from "../Cover"
import { Heading } from "../Heading"

export const BlockRenderer = ({blocks}) => {
    return blocks.map(block => {
        switch (block.name) {
            case 'core/heading' : {
                return <Heading key={block.id} level={block.level} content={block.content} textAlign={block.textAlign}/>
            }
            case 'core/cover': {
                console.log('## blosk: ', block)
                return (
                    <Cover key={block.id} alt={block.alt} bgImgUrl={block.url}>
                        <mark>
                        children: {block.innerBlocks.length}
                        </mark>
                        <hr className="border-white"/>
                        <BlockRenderer blocks={block.innerBlocks} />
                    </Cover>
                )
            }
            case 'core/paragraph': {
                return <p key={block.id}>{block.content}</p>
            }
            default: 
                return null
        }
    })
}