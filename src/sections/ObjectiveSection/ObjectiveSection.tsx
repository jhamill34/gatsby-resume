/** @jsx jsx */
import { ReactElement } from 'react'
import { jsx } from 'theme-ui'
import { graphql } from 'gatsby'
import { Section } from '../../components'

type ObjectiveProps = {
  objective: string
}

export const query = graphql`
  fragment ObjectiveFragment on AirtableData {
    objective
  }
`

export function ObjectiveSection(props: ObjectiveProps): ReactElement {
  const { objective } = props
  return <Section title="Objective">{objective}</Section>
}
