//postform
export interface TitleProps {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
}
export interface CategoryProps {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

export interface PurposeProps {
  purpose: string;
  setPurpose: React.Dispatch<React.SetStateAction<string>>;
}

export interface AbstractProps {
  abstact: string;
  setAbstract: React.Dispatch<React.SetStateAction<string>>;
}

export interface RecruitNumberProps {
  frontNumber: number;
  setFrontNumber: React.Dispatch<React.SetStateAction<number>>;
  backNumber: number;
  setBackNumber: React.Dispatch<React.SetStateAction<number>>;
  designNumber: number;
  setDesignNumber: React.Dispatch<React.SetStateAction<number>>;
  pmNumber: number;
  setPmNumber: React.Dispatch<React.SetStateAction<number>>;
  otherNumber: number;
  setOthernumber: React.Dispatch<React.SetStateAction<number>>;
}

export interface ProgressProps {
  progress: string;
  setProgress: React.Dispatch<React.SetStateAction<string>>;
}

export interface DurationProps {
  duration: string;
  setDuration: React.Dispatch<React.SetStateAction<string>>;
}

export interface TechStackProps {
  default: string;
  tech: string[];
  setTech: React.Dispatch<React.SetStateAction<string[]>>;
}
export interface DeadlineProps {
  deadline: Date | undefined;
  setDeadline: React.Dispatch<React.SetStateAction<Date | undefined>>;
}

export interface TimeAndPlaceProps {
  timeandplace: string;
  setTimeAndPlace: React.Dispatch<React.SetStateAction<string>>;
}

export interface WayProps {
  way: string;
  setWay: React.Dispatch<React.SetStateAction<string>>;
}

export interface ContactProps {
  default: string;
  contact: string;
  setContact: React.Dispatch<React.SetStateAction<string>>;
}

export interface IntroduceProps {
  free: any;
  setFree: any;
}

//form
export interface InputFormProps {
  example: string;
  data: string;
  setData: React.Dispatch<React.SetStateAction<string>>;
}
export interface SelectBoxProps {
  options: Option[];
  data: string;
  setData: React.Dispatch<React.SetStateAction<string>>;
}

export interface MultiSelectBoxProps {
  default: string;
  options: DetailOption[];
  data: string[];
  setData: React.Dispatch<React.SetStateAction<string[]>>;
}

export interface CheckBoxProps {
  options: CheckboxOption[];
  frontNumber: number;
  setFrontNumber: React.Dispatch<React.SetStateAction<number>>;
  backNumber: number;
  setBackNumber: React.Dispatch<React.SetStateAction<number>>;
  designNumber: number;
  setDesignNumber: React.Dispatch<React.SetStateAction<number>>;
  pmNumber: number;
  setPmNumber: React.Dispatch<React.SetStateAction<number>>;
  otherNumber: number;
  setOthernumber: React.Dispatch<React.SetStateAction<number>>;
}
export interface CheckboxOption {
  value: string;
  name: string;
}
export interface CalendarProps {
  data: Date | undefined;
  setData: React.Dispatch<React.SetStateAction<Date | undefined>>;
}

export interface Option {
  value: string;
}

export interface DetailOption {
  value: string;
  detail: Detail[];
}

export interface Detail {
  option: string;
}

export interface SelectAndInputBoxProps {
  default: string;
  options: Option[];
  data: string;
  setData: React.Dispatch<React.SetStateAction<string>>;
  select: boolean;
  setSelect: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface FreeFormProps {
  data: any;
  setData: any;
}
