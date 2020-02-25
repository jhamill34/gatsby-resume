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
  Banner,
  ColumnLayout,
  EducationItem,
  ExperienceItem,
  Layout,
  PrintableRow,
  ProjectItem,
  SEO,
  Section,
  SkillList,
  TimelineItem,
} from '../components'
import { Resume, Data, Social } from '../models/resume'
import { PrintStyles } from '../components/printStyles'

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
    otherProjects,
    skills,
  } = props.data.resume.data

  return (
    <Layout>
      <SEO />
      <PrintStyles />
      <Banner
        email={email}
        image={props.data.headshot.childImageSharp.fixed}
        name={name}
        social={props.data.site.siteMetadata.social}
      />
      <div sx={{ px: 2 }}>
        <Section title="Career Summary">{objective}</Section>
        <ColumnLayout
          main={[
            <Section
              icon={<FaPencilRuler />}
              key="software-projects"
              title="Software Projects"
            >
              {projects.map(p => (
                <PrintableRow
                  key={`project-${p.data.name}`}
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: '3em 1fr',
                  }}
                >
                  <TimelineItem />
                  <ProjectItem project={p.data} />
                </PrintableRow>
              ))}
            </Section>,
            <Section
              icon={<FaBriefcase />}
              key="work-experience"
              title="Work Experience"
            >
              {experience
                .sort((a, b) =>
                  compareDesc(parseISO(a.data.start), parseISO(b.data.start))
                )
                .map(e => (
                  <PrintableRow
                    key={`experience-${e.data.name}`}
                    printable={e.data.printable}
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: '3em 1fr',
                    }}
                  >
                    <TimelineItem />
                    <ExperienceItem experience={e.data} />
                  </PrintableRow>
                ))}
            </Section>,
          ]}
          side={[
            <Section icon={<FaMagic />} key="other-skills" title="Other Skills">
              <SkillList
                skills={skills.filter(s => parseInt(s.data.level) > 0)}
              />
            </Section>,
            <Section icon={<FaBook />} key="interests" title="Interests">
              <SkillList
                skills={skills.filter(s => parseInt(s.data.level) === 0)}
              />
            </Section>,
            <Section
              icon={<FaGraduationCap />}
              key="education"
              title="Education"
            >
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
            </Section>,
            <Section key="other-projects" title="Other Projects">
              {otherProjects.map(p => (
                <ProjectItem
                  fontSize={2}
                  key={`small-project-${p.data.name}`}
                  project={p.data}
                />
              ))}
            </Section>,
          ]}
        />
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
        fixed(width: 75, height: 75) {
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
            printable
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
        otherProjects {
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
