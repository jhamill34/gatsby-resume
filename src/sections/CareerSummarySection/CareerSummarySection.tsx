/** @jsx jsx */
import { ReactElement } from 'react'
import { jsx } from 'theme-ui'
import { graphql } from 'gatsby'
import { Section } from '../../components'

type CareerSummaryProps = {
  objective: string
}

export const query = graphql`
  fragment CareerSummaryFragment on AirtableData {
    objective
  }
`

export function CareerSummarySection(props: CareerSummaryProps): ReactElement {
  const { objective } = props
  return <Section title="Career Summary">{objective}</Section>
}
