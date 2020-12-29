import BlockContent from "@sanity/block-content-to-react";

const color = (props) => {
  return <span style={{ color: props.mark.hex }}>{props.children}</span>;
};

function SimpleBlockContent(props) {
  const { blocks } = props;
  if (!blocks) {
    console.error("Missing blocks");
    return null;
  }

  return <BlockContent blocks={blocks} serializers={{ marks: { color } }} />;
}

export default SimpleBlockContent;
