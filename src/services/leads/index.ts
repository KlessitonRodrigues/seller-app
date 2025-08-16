import { sleep } from "src/utils/async";
import { readStorage, saveStorage } from "../localStorage";

export type ILead = {
  id?: string;
  name?: string;
  company?: string;
  email?: string;
  source?: string;
  score?: number;
  status?: string;
};

type ILeadFilters = {
  query?: string;
  status?: string;
  score?: string;
};

type ILeadPage = {
  page?: number;
  pageSize?: number;
};

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

const listLeads = async (filters: ILeadFilters, page: ILeadPage) => {
  await sleep(300);
  let leads = getLeads();

  if (filters.query) {
    const q = filters.query.toLowerCase();
    leads = leads.filter(
      (lead) =>
        lead?.name?.toLowerCase().includes(q) ||
        lead?.company?.toLowerCase().includes(q) ||
        lead?.email?.toLowerCase().includes(q)
    );
  }

  if (filters.status) {
    leads = leads.filter((lead) => lead.status === filters.status);
  }

  if (filters.score === "low") {
    leads = leads.sort((a, b) => (a.score ?? 0) - (b.score ?? 0));
  } else if (filters.score === "high") {
    leads = leads.sort((a, b) => (b.score ?? 0) - (a.score ?? 0));
  }

  const pageNum = page.page ?? 1;
  const pageSize = page.pageSize ?? 10;
  const start = (pageNum - 1) * pageSize;
  const end = start + pageSize;
  const pagedLeads = leads.slice(start, end);

  return {
    data: pagedLeads,
    total: leads.length,
    page: pageNum,
    pageSize,
    totalPages: Math.ceil(leads.length / pageSize),
  };
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

export {
  getLeads,
  saveLeads,
  getLead,
  listLeads,
  createLead,
  updateLead,
  deleteLead,
  searchLeads,
};
