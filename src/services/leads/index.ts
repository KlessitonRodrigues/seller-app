import { sleep } from "src/utils/async";
import { readStorage, saveStorage } from "../localStorage";

export interface ILead {
  id?: string;
  name?: string;
  company?: string;
  email?: string;
  source?: string;
  score?: number;
  status?: string;
}

const STORAGE_KEY = "leads";

const getLeads = (): ILead[] => {
  return JSON.parse(readStorage(STORAGE_KEY)) || [];
};

const saveLeads = (leads: ILead[]) => {
  saveStorage(STORAGE_KEY, JSON.stringify(leads));
};

const getLead = async (id: string): Promise<ILead | undefined> => {
  await sleep(300);
  return getLeads().find((lead) => lead.id === id);
};

const listLeads = async (): Promise<ILead[]> => {
  await sleep(300);
  return getLeads();
};

const createLead = async (lead: ILead): Promise<ILead> => {
  await sleep(300);
  const leads = getLeads();
  lead.id = `${Date.now()}-${Math.random()}`;
  leads.push(lead);
  saveLeads(leads);
  return lead;
};

const updateLead = async (updated: ILead): Promise<void> => {
  await sleep(300);
  const leads = getLeads();
  const idx = leads.findIndex((lead) => lead.id === updated.id);
  if (idx !== -1) {
    leads[idx] = updated;
    saveLeads(leads);
  }
};

const deleteLead = async (id: string): Promise<void> => {
  await sleep(300);
  const leads = getLeads().filter((lead) => lead.id !== id);
  saveLeads(leads);
};

const searchLeads = async (query: string): Promise<ILead[]> => {
  await sleep(300);
  const q = query.toLowerCase();
  return getLeads().filter(
    (lead) =>
      lead?.name?.toLowerCase().includes(q) ||
      lead?.company?.toLowerCase().includes(q)
  );
};

const filterLeadsByStatus = async (status: string): Promise<ILead[]> => {
  await sleep(300);
  return getLeads().filter((lead) => lead.status === status);
};

const sortLeadsByScoreDesc = (leads?: ILead[]): ILead[] => {
  const arr = leads ? [...leads] : getLeads();
  return arr.sort((a, b) => (b.score || 0) - (a.score || 0));
};

export {
  getLeads,
  saveLeads,
  getLead,
  listLeads,
  createLead,
  updateLead,
  deleteLead,
  searchLeads,
  filterLeadsByStatus,
  sortLeadsByScoreDesc,
};
