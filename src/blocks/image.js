import React from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image";
import get from "lodash.get"

export function Image({ data }) {
  return data.image &&
  data.image.childImageSharp && (
    <ImageWrapper>
      <GatsbyImage image={data.image.childImageSharp.gatsbyImageData} />
    </ImageWrapper>
  );
}

const ImageWrapper = styled.div`
  overflow: hidden;
`

export const ImageBlock = {
  label: "Image",
  name: "image",
  key: "test",
  defaultItem: {
    image: "",
  },
  fields: [
    {
      label: "Image",
      name: "image",
      component: "image",
      parse: filename => `../images/${filename}`,
      uploadDir: () => `/content/images/`,
      previewSrc: (formValues, fieldProps) => {
        const pathName = fieldProps.input.name.replace("rawJson", "jsonNode")
        const imageNode = get(formValues, pathName)
        if (!imageNode || !imageNode.childImageSharp) return ""
        return imageNode.childImageSharp.gatsbyImageData.src;
      },
    },
  ],
}
