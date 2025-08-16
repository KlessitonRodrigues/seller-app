import { getText } from "src/lib/common/Text/Text";
import { LEAD_STATUS } from "./enums/lead";

export const LeadStatusOptions = [
  { label: getText("lead_status_new"), key: LEAD_STATUS.NEW },
  { label: getText("lead_status_rejected"), key: LEAD_STATUS.REJECTED },
  { label: getText("lead_status_pending"), key: LEAD_STATUS.PENDING },
  { label: getText("lead_status_approved"), key: LEAD_STATUS.APPROVED },
];

export const LeadScoreOptions = [
  { label: getText("lead_score_low"), key: "low" },
  { label: getText("lead_score_high"), key: "high" },
];
