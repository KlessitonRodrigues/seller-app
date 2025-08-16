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

export function getLeads(): ILead[] {
  return readStorage<ILead[]>(STORAGE_KEY) || [];
}

export function saveLeads(leads: ILead[]) {
  saveStorage(STORAGE_KEY, leads);
}

export function getLead(id: string): ILead | undefined {
  return getLeads().find((lead) => lead.id === id);
}

export function listLeads(): ILead[] {
  return getLeads();
}

export const createLead = (lead: ILead): ILead => {
  const leads = getLeads();
  lead.id = `${Date.now()}-${Math.random()}`;
  leads.push(lead);
  saveLeads(leads);
  return lead;
};

export function updateLead(updated: ILead): void {
  const leads = getLeads();
  const idx = leads.findIndex((lead) => lead.id === updated.id);
  if (idx !== -1) {
    leads[idx] = updated;
    saveLeads(leads);
  }
}

export function deleteLead(id: string): void {
  const leads = getLeads().filter((lead) => lead.id !== id);
  saveLeads(leads);
}

export function searchLeads(query: string): ILead[] {
  const q = query.toLowerCase();
  return getLeads().filter(
    (lead) =>
      lead?.name?.toLowerCase().includes(q) ||
      lead?.company?.toLowerCase().includes(q)
  );
}

export function filterLeadsByStatus(status: string): ILead[] {
  return getLeads().filter((lead) => lead.status === status);
}

export function sortLeadsByScoreDesc(leads?: ILead[]): ILead[] {
  const arr = leads ? [...leads] : getLeads();
  return arr.sort((a, b) => (b.score || 0) - (a.score || 0));
}
