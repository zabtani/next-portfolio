import { ProjectProperties, Tech, SummarizedProjectProperties } from '../interface';
import REQUEST from './client';
import type { AxiosResponse } from 'axios';

const handle = (res: AxiosResponse) => res.data;

const API = {
  getTechs: async (): Promise<Tech[]> => REQUEST.get(`techs`).then(handle),
  getProject: async (id: string): Promise<ProjectProperties> => REQUEST.get(`project/?id=${id}`).then(handle),
  getSummarizedProjects: async (): Promise<SummarizedProjectProperties[]> =>
    REQUEST.get('projects').then(handle),
  getMainPorfolioInfo: async (): Promise<any> => REQUEST.get('settings').then(handle),
  sendForm: async (data: { message: string; name: string; company: string; phone: string }) =>
    await REQUEST.post('send/', data),
};
export default API;
