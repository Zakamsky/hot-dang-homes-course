import { gql } from "@apollo/client";
import client from "client";
import { cleanAndTransformBlocks } from "utils/cleanAndTransformBlocks";
import { BlockRenderer } from "./components/BlockRenderer";

export default function Home(props) {
  console.log('### props: ', props)
  return <div>
    <BlockRenderer blocks={props.blocks}/>
  </div>;
}

export const getStaticProps = async () => {
  const {data} = await client.query({
    query: gql`
    query NewQuery {
      nodeByUri(uri: "/") {
        ... on Page {
          id
          blocks {
            name
            attributesJSON
            innerBlocks {
              attributesJSON
              name
              dynamicContent
            }
            dynamicContent
          }
        }
      }
    }
    `
  })
  return {
    props: {
      blocks: cleanAndTransformBlocks(data.nodeByUri.blocks),
    }
  }
}