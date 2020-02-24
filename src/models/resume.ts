export type Data<T> = {
  data: T
}

export type Social = {
  github: string
  gitlab: string
  twitter: string
  linkedin: string
}

export type Skill = {
  name: string
  level: string
}

export type Project = {
  name: string
  description: string
  link: string
  repository: string
  technologies: Data<Skill>[]
}

export type Experience = {
  name: string
  position: string
  location: string
  description: string
  start: string
  end: string
  technologies: Data<Skill>[]
  printable: boolean
}

export type Education = {
  name: string
  location: string
  major: string
  description: string
  specialization: string
  start: string
  end: string
}

export type Resume = {
  name: string
  objective: string
  email: string
  education: Data<Education>[]
  experience: Data<Experience>[]
  projects: Data<Project>[]
  otherProjects: Data<Project>[]
  skills: Data<Skill>[]
}
