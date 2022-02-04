import { ReactChild } from "react";

interface PageProps {
  children: ReactChild | ReactChild[]
  id?: string
  className?: string
  title?: string
  description?: string
  image?: string
  twitter?: string
  contentType?: string
  published?: string
  category?: string
  updated?: string
  noCrawl?: string
  tags?: string
  ogTitle?: string
  ogDescription?: string
}

export default PageProps