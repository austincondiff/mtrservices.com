import React from 'react'
import styled from 'styled-components'
import { BlocksControls, InlineBlocks } from 'react-tinacms-inline'
import { featureBlock } from './Feature'

const FeatureListBlocks = styled(InlineBlocks)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 3rem;
  grid-template-rows: auto;
`

function FeatureList({ index }) {
  return (
    <BlocksControls index={index} focusRing={{ offset: 0 }} insetControls>
      <div className="wrapper">
        <FeatureListBlocks name="features" blocks={FEATURE_BLOCKS} direction="row" className="feature-list" max={3} />
      </div>
    </BlocksControls>
  )
}

const FEATURE_BLOCKS = {
  feature: featureBlock,
}

export const featureListBlock = {
  Component: FeatureList,
  template: {
    label: 'Feature List',
    defaultItem: {
      _template: 'features',
      features: [
        {
          _template: 'feature',
          heading: 'heading 1',
          supporting_copy: 'supporting copy',
        },
        {
          _template: 'feature',
          heading: 'heading 2',
          supporting_copy: 'supporting copy',
        },
        {
          _template: 'feature',
          heading: 'heading 3',
          supporting_copy: 'supporting copy',
        },
      ],
    },
    fields: [],
  },
}
