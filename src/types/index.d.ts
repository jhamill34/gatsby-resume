type Data<T> = {
  data: T
}

type EducationModel = {
  name: string
  location: string
  major: string
  description: string
  specialization: string
  start: string
  end: string
}

type ExperienceModel = {
  name: string
  position: string
  location: string
  description: string
  start: string
  end: string
  technologies: Data<SkillModel>[]
  printable: boolean
}

type ProjectModel = {
  name: string
  description: string
  link: string
  repository: string
  technologies: Data<SkillModel>[]
}

type SkillModel = {
  name: string
  level: string
}

type SocialModel = {
  github: string
  gitlab: string
  twitter: string
  linkedin: string
}

type ResumeModel = {
  name: string
  objective: string
  email: string
  education: Data<EducationModel>[]
  experience: Data<ExperienceModel>[]
  projects: Data<ProjectModel>[]
  otherProjects: Data<ProjectModel>[]
  skills: Data<SkillModel>[]
}
