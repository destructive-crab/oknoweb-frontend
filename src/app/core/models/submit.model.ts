export interface SubmitPayload {
  name: string;
  link: string;
  additionalInfo: string;
  contact: string;
  tags: string[];
}

export interface SubmissionEditPayload {
  name: string;
  link: string;
  additionalInfo: string;
  contact: string;
  tags: string[];
  reviewLink: string;
  date: string;
}

export interface SubmitInfo {
  id: string;
  status: SubmitStatus;
  name: string;
  link: string;
  additionalInfo: string;
  tags: string[];
  reviewLink: string;
  date: string;
}

export interface PrivateSubmitInfo {
  id: string;
  status: SubmitStatus;
  name: string;
  link: string;
  additionalInfo: string;
  tags: string[];
  reviewLink: string;
  date: string;
  contact: string;
}

export interface SubmitEditPayload {
  name: string;
  link: string;
  additionalInfo: string;
  tags: string[];
  reviewLink: string;
  date: string;
  contact: string;
}

export interface TagInfo {
  tag: string;
  category: string;
}

export interface TagCategoryInfo {
  category: string;
  panelOnly: boolean;
  order: number;
}

export type SubmitStatus = "unverified" | "pending" | "reviewed";
