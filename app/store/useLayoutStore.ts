import { create } from 'zustand';

const initialState = {
  isMobileMenuClose: false,
};

interface Store {
  isMobileMenuClose: boolean;
  toggleMobileMenu: () => void;
}

const useLayoutStore = create<Store>((set) => ({
  ...initialState,
  toggleMobileMenu: () => {
    set((state) => ({ isMobileMenuClose: !state.isMobileMenuClose }));
  },
}));

export default useLayoutStore;
