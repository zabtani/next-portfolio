export type ProjectLinks = {
  demo_url: string;
  repo_url: string;
};
export interface ProjectProperties {
  id: number;
  name: string;
  info: string;
  summary: string;
  links: ProjectLinks;
  year: number;
  techs: Tech[];
  images: string[];
}
export interface Tech {
  id: number;
  name: 'string';
  image: string;
}
export type SummarizedProjectProperties = Pick<ProjectProperties, 'id' | 'name' | 'summary'> & {
  preview_image: string;
};
