/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import { graphql } from 'gatsby'
import { FixedObject } from 'gatsby-image'
import { ColumnLayout, Layout, SEO } from '../components'
import {
  Banner,
  CareerSummary,
  SoftwareProjects,
  WorkExperience,
  Skills,
  Education,
  OtherProjects,
} from '../sections'
import { Resume, Data } from '../models/resume'
import { PrintStyles } from '../components/printStyles'
import { Social } from '../components/SocialList'

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
        <CareerSummary objective={objective} />
        <ColumnLayout
          main={[
            <SoftwareProjects key="software-projects" projects={projects} />,
            <WorkExperience experience={experience} key="work-experience" />,
          ]}
          side={[
            <Skills key="other-skills" skills={skills} />,
            <Education education={education} key="education" />,
            <OtherProjects
              key="other-projects"
              otherProjects={otherProjects}
            />,
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
          ...SocialFragment
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
