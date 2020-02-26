/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import { graphql } from 'gatsby'
import { FixedObject } from 'gatsby-image'

import { ColumnLayout } from '../components/ColumnLayout'
import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'

import {
  BannerSection,
  ObjectiveSection,
  SoftwareProjectsSection,
  WorkExperienceSection,
  SkillsSection,
  EducationSection,
  OtherProjectsSection,
} from '../sections'
import { PrintStyles } from '../components/printStyles'

type IndexPageProps = {
  data: {
    site: {
      siteMetadata: {
        social: SocialModel
      }
    }
    headshot: {
      childImageSharp: {
        fixed: FixedObject
      }
    }
    resume: Data<ResumeModel>
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

  const { fixed: headshot } = props.data.headshot.childImageSharp
  const { social } = props.data.site.siteMetadata

  return (
    <Layout>
      <SEO description={objective} title={`${name} | Resume`} />
      <PrintStyles />
      <BannerSection
        email={email}
        image={headshot}
        name={name}
        social={social}
      />
      <div sx={{ px: 2 }}>
        <ObjectiveSection objective={objective} />
        <ColumnLayout
          main={[
            <SoftwareProjectsSection
              key="software-projects"
              projects={projects}
            />,
            <WorkExperienceSection
              experience={experience}
              key="work-experience"
            />,
          ]}
          side={[
            <SkillsSection key="other-skills" skills={skills} />,
            <EducationSection education={education} key="education" />,
            <OtherProjectsSection
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
        ...BannerFragment
        ...ObjectiveFragment
        education {
          data {
            ...EducationFragment
          }
        }
        experience {
          data {
            ...WorkExperienceFragment
          }
        }
        projects {
          data {
            ...ProjectFragment
          }
        }
        otherProjects {
          data {
            ...ProjectFragment
          }
        }
        skills {
          data {
            ...SkillFragment
          }
        }
      }
    }
  }
`
