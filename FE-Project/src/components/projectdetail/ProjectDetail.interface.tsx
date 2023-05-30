export interface Detail {
  id: number;
  category: string;
  title: string;
  memberName: string;
  createdAt: string;
  deadline: string;
  tech: string[];
  free: string;
  owner: boolean;
  personnel: {
    backNumber: number;
    frontNumber: number;
    designNumber: number;
    otherNumber: number;
    pmNumber: number;
  };
  required: {
    purpose: string;
    progress: string;
    contact: string;
    duration: string;
    timeandplace: string;
    way: string;
  };
}

export interface StateButtonProps {
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  id: string | undefined;
}