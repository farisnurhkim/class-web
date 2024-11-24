import {create} from "zustand";
import { User } from "next-auth"

type ModalType = "AI";

interface ModalData {
    user?: User | null | undefined;
}

interface ModalStore {
    isOpen: boolean;
    type: ModalType | null;
    data: ModalData;
    onOpen: (type: ModalType, data?: ModalData) => void;
    onClose: () => void;
}

export const useModal = create<ModalStore>() ((set) => ({
    isOpen: false,
    data: {},
    type: null,
    onOpen: (type: ModalType, data?: ModalData) => set({isOpen: true, type, data}),
    onClose: () => set({isOpen: false, type: null})
}))