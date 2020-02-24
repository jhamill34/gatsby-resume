/** @jsx jsx */
import React from 'react'
import { Helmet } from 'react-helmet'
import { jsx } from 'theme-ui'
import { graphql } from 'gatsby'
import { FixedObject } from 'gatsby-image'
import { compareDesc, parseISO } from 'date-fns'
import { Global } from '@emotion/core'
import {
  FaBriefcase,
  FaGraduationCap,
  FaPencilRuler,
  FaMagic,
  FaBook,
  FaLink,
  FaGitlab,
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
    otherProjects,
    skills,
  } = props.data.resume.data

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
      </Helmet>
      <Global
        styles={{
          '@media print': {
            '@page': {
              size: '8.5in 11in',
            },

            body: {
              width: '100%',
              height: '100%',
              position: 'fixed',
              top: 0,
              left: 0,
              fontSize: '14px',
            },
          },
        }}
      />
      <Banner
        email={email}
        image={props.data.headshot.childImageSharp.fixed}
        name={name}
        social={props.data.site.siteMetadata.social}
      />
      <div sx={{ px: 2 }}>
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
              {projects.map(p => (
                <div
                  key={`project-${p.data.name}`}
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: '3em 1fr',
                  }}
                >
                  <TimelineItem />
                  <ProjectItem project={p.data} />
                </div>
              ))}
            </Section>
            <Section icon={<FaBriefcase />} title="Work Experience">
              {experience
                .sort((a, b) =>
                  compareDesc(parseISO(a.data.start), parseISO(b.data.start))
                )
                .map(e => (
                  <div
                    key={`experience-${e.data.name}`}
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: '3em 1fr',
                      '@media print': {
                        display: e.data.printable ? 'grid' : 'none',
                      },
                    }}
                  >
                    <TimelineItem />
                    <ExperienceItem experience={e.data} />
                  </div>
                ))}
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
            <Section title="Other Projects">
              {otherProjects.map(p => (
                <div
                  key={`other-project-${p.data.name}`}
                  sx={{
                    mb: 2,
                  }}
                >
                  <div
                    sx={{
                      fontSize: 2,
                      fontWeight: 'heading',
                      lineHeight: 'heading',
                      fontFamily: 'heading',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      mb: 1,
                    }}
                  >
                    {p.data.link ? (
                      <a
                        href={p.data.link}
                        sx={{
                          display: 'block',
                          color: 'text',
                          textDecoration: 'none',
                          outline: 'none',
                          borderBottom: '2px solid transparent',
                          transition:
                            'color 0.2s ease-in-out, border-bottom-color 0.2s ease-in-out',
                          ':hover, :focus': {
                            color: 'primary',
                            borderBottomColor: 'primary',
                          },
                        }}
                        title="Link to Project"
                      >
                        {p.data.name} <FaLink />
                      </a>
                    ) : (
                      p.data.name
                    )}
                    {p.data.repository ? (
                      <a
                        href={p.data.repository}
                        sx={{
                          display: 'block',
                          fontSize: 1,
                          color: 'secondary',
                          textDecoration: 'none',
                          outline: 'none',
                          my: 1,
                          borderBottom: '2px solid transparent',
                          transition:
                            'color 0.2s ease-in-out, border-bottom-color 0.2s ease-in-out',
                          ':hover, :focus': {
                            color: 'primary',
                            borderBottomColor: 'primary',
                          },
                        }}
                        title="Link to Repository"
                      >
                        <FaGitlab /> Link to Repo
                      </a>
                    ) : null}
                  </div>
                  <div sx={{ color: 'muted', fontSize: 1, mb: 2 }}>
                    {p.data.description}
                  </div>
                  <div sx={{ display: 'flex', flexWrap: 'wrap' }}>
                    {p.data.technologies.map(s => (
                      <SkillItem
                        key={`other-tech-${s.data.name}`}
                        skill={s.data}
                      />
                    ))}
                  </div>
                </div>
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
