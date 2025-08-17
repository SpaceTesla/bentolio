export interface Experience {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
  projects?: Array<{
    name: string;
    icon: string;
  }>;
}
