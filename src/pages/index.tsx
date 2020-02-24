/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import { graphql } from 'gatsby'
import { FixedObject } from 'gatsby-image'
import { compareDesc, parseISO } from 'date-fns'
import {
  FaBriefcase,
  FaGraduationCap,
  FaPencilRuler,
  FaMagic,
  FaBook,
} from 'react-icons/fa'
import {
  Layout,
  Section,
  ExperienceItem,
  TimelineItem,
  EducationItem,
  ProjectItem,
  SkillItem,
  Banner,
} from '../components'
import { Resume, Data, Social } from '../models/resume'

type IndexPageProps = {
  data: {
    site: {
      siteMetadata: {
        social: Social
      }
    }
    headshot: {
      childImageSharp: {
        fixed: FixedObject
      }
    }
    resume: Data<Resume>
  }
}

export default function IndexPage(props: IndexPageProps): React.ReactElement {
  const {
    name,
    email,
    objective,
    experience,
    education,
    projects,
    skills,
  } = props.data.resume.data

  return (
    <Layout>
      <Banner
        email={email}
        image={props.data.headshot.childImageSharp.fixed}
        name={name}
        social={props.data.site.siteMetadata.social}
      />
      <div sx={{ px: 4 }}>
        <Section title="Career Summary">{objective}</Section>

        <div
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
          }}
        >
          <div
            sx={{
              flexBasis: 0,
              flexGrow: 99999,
              minWidth: 320,
            }}
          >
            <Section icon={<FaPencilRuler />} title="Software Projects">
              <div
                sx={{
                  display: 'grid',
                  gridTemplateColumns: '3em 1fr',
                }}
              >
                {projects.map(p => [
                  <TimelineItem key={`timeline-${p.data.name}`} />,
                  <ProjectItem
                    key={`project-${p.data.name}`}
                    project={p.data}
                  />,
                ])}
              </div>
            </Section>

            <Section icon={<FaBriefcase />} title="Work Experience">
              <div
                sx={{
                  display: 'grid',
                  gridTemplateColumns: '3em 1fr',
                }}
              >
                {experience
                  .sort((a, b) =>
                    compareDesc(parseISO(a.data.start), parseISO(b.data.start))
                  )
                  .map(e => [
                    <TimelineItem key={`timeline-${e.data.name}`} />,
                    <ExperienceItem
                      experience={e.data}
                      key={`experience-${e.data.name}`}
                    />,
                  ])}
              </div>
            </Section>
          </div>
          <div
            sx={{
              flexBasis: 250,
              flexGrow: 1,
            }}
          >
            <Section icon={<FaMagic />} title="Other Skills">
              <div sx={{ display: 'flex', flexWrap: 'wrap' }}>
                {skills
                  .filter(s => parseInt(s.data.level) > 0)
                  .map(s => (
                    <SkillItem key={`skill-${s.data.name}`} skill={s.data} />
                  ))}
              </div>
            </Section>
            <Section icon={<FaBook />} title="Interests">
              <div sx={{ display: 'flex', flexWrap: 'wrap' }}>
                {skills
                  .filter(s => parseInt(s.data.level) === 0)
                  .map(s => (
                    <SkillItem key={`skill-${s.data.name}`} skill={s.data} />
                  ))}
              </div>
            </Section>
            <Section icon={<FaGraduationCap />} title="Education">
              {education
                .sort((a, b) =>
                  compareDesc(parseISO(a.data.start), parseISO(b.data.start))
                )
                .map(e => (
                  <EducationItem
                    education={e.data}
                    key={`education-${e.data.name}`}
                  />
                ))}
            </Section>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    site {
      siteMetadata {
        social {
          github
          gitlab
          twitter
          linkedin
        }
      }
    }

    headshot: file(name: { eq: "headshot" }) {
      childImageSharp {
        fixed(width: 200, height: 200) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }

    resume: airtable(
      table: { eq: "Resume" }
      data: { name: { eq: "Joshua Rasmussen" } }
    ) {
      data {
        name
        objective
        email
        education {
          data {
            name
            location
            major
            description
            specialization
            start
            end
          }
        }
        experience {
          data {
            name
            position
            location
            description
            start
            end
            technologies {
              data {
                name
                level
              }
            }
          }
        }
        projects {
          data {
            name
            description
            link
            repository
            technologies {
              data {
                name
                level
              }
            }
          }
        }
        skills {
          data {
            name
            level
          }
        }
      }
    }
  }
`