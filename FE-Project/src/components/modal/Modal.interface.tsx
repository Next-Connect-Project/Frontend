export interface ModalProps {
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    error: number;
}

export interface LoginModalProps {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ImportMeta{
  readonly env: ImportMetaEnv
}