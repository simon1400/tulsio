export interface NavItemProps {
  id: string
  title: string
  link: string
}

export interface TopNavProps {
  hits: NavItemProps[]
  mobile?: boolean
  menu?: boolean
}