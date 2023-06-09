export interface ModalProps {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  error: number;
}

export interface LoginModalProps {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface PostModalProps {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface DeleteModalProps {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id: string | undefined;
}
