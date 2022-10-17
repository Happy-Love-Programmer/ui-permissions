import api from './api';
import { endpoints } from 'appConstants';
import { PermissionCollectionResponse } from 'types/api';
import queryString from 'query-string';

const permissionsService = {
  getAll: async (areaIds?: number[], roleIds?: number[]): Promise<PermissionCollectionResponse[]> => {
    const areas = queryString.stringify({ areaIds: areaIds });
    const roles = queryString.stringify({ roleIds: roleIds });

    const response = await api.get<PermissionCollectionResponse[]>(`${endpoints.getPermissions}?${areas}&${roles}`);
    return response.data;
  },
  update: async (): Promise<PermissionCollectionResponse[]> => {
    const response = await api.get<PermissionCollectionResponse[]>(endpoints.updatePermissions);
    return response.data;
  },
  delete: async (): Promise<PermissionCollectionResponse[]> => {
    const response = await api.get(endpoints.deletePermissions);
    return response.data;
  },
};

export default permissionsService;