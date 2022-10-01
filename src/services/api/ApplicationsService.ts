import api from './api';
import { endpoints } from 'appConstants';
import { ApplicationResponse, CreateApplicationRequest, UpdateApplicationRequest } from 'types/api';

const applicationsService = {
  getAll: async (): Promise<ApplicationResponse[]> => {
    const response = await api.get<ApplicationResponse[]>(endpoints.getAreas).finally();
    return response.data;
  },
  get: async (id: number): Promise<ApplicationResponse> => {
    const response = await api.get<ApplicationResponse>(endpoints.getArea(id)).finally();
    return response.data;
  },
  create: async (body: CreateApplicationRequest): Promise<ApplicationResponse> => {
    const response = await api.post<ApplicationResponse>(endpoints.createRole, body).finally();
    return response.data;
  },
  delete: async (id: number): Promise<ApplicationResponse> => {
    const response = await api.delete<ApplicationResponse>(endpoints.deleteArea(id)).finally();
    return response.data;
  },
  update: async (id: number, body: UpdateApplicationRequest): Promise<ApplicationResponse> => {
    const response = await api.put<ApplicationResponse>(endpoints.updateArea(id), body).finally();
    return response.data;
  },
};

export default applicationsService;