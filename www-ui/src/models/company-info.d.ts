export interface ICompanyInfo {
  id: number;
  title: string;
  subTitle: string;
}

import {
  ICompanyPartner,
  ICompanyServices,
  IJobVacancy,
  IContact
} from '.';

export interface ICompanyDetailedInfo extends ICompanyInfo {
  partners: ICompanyPartner[];
  jobVacancies: IJobVacancy[];
  services: ICompanyServices[];
  contact: IContact;
}
