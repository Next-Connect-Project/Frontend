export interface RecruitmentProps {
  recruitment: string;
  setRecruitment: React.Dispatch<React.SetStateAction<string>>;
}

export interface RecruitNumberProps {
  recruitNumber: string;
  setRecruitNumber: React.Dispatch<React.SetStateAction<string>>;
}

export interface ProgressProps {
  progress: string;
  setProgress: React.Dispatch<React.SetStateAction<string>>;
}

export interface SelectBoxProps {
  options: Option[];
  data: string;
  setData: React.Dispatch<React.SetStateAction<string>>;
}

export interface Option{
    value: string;
}