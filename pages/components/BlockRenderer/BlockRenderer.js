export const BlockRenderer = ({blocks}) => {
    return blocks.map(block => {
        switch (block.name) {
            case 'core/cover': {
                return <div key={block.id}>Core cover {block.innerBlocks?.length ? 'with inner blocks' : ''} </div>
            }
            case 'core/paragraph': {
                return <div key={block.id}>Core paragraph</div>
            }
            default: 
                return null
        }
    })
}