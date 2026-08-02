export interface SubmitInfo {
  id: string;
  status: SubmitStatus;
  name: string;
  link: string;
  additionalInfo: string;
  reviewLink: string;
  date: string;
}

export interface PrivateSubmitInfo {
  id: string;
  status: SubmitStatus;
  name: string;
  link: string;
  additionalInfo: string;
  reviewLink: string;
  date: string;
  contact: string;
}

export type SubmitStatus = "unverified" | "pending" | "reviewed";
