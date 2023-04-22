import { Cover } from "../Cover"

export const BlockRenderer = ({blocks}) => {
    return blocks.map(block => {
        switch (block.name) {
            case 'core/cover': {
                return <Cover key={block.id} alt={block.alt} bgImgUrl={block.url}>TUC Core cover {block.innerBlocks?.length ? 'with inner blocks' : ''} </Cover>
            }
            case 'core/paragraph': {
                return <div key={block.id}>Core paragraph</div>
            }
            default: 
                return null
        }
    })
}