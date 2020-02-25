/** @jsx jsx */
import { ReactElement } from 'react'
import { jsx } from 'theme-ui'
import { Section } from '../components'

type CareerSummaryProps = {
  objective: string
}

export function CareerSummarySection(props: CareerSummaryProps): ReactElement {
  const { objective } = props
  return <Section title="Career Summary">{objective}</Section>
}
