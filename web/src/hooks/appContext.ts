import { createContext, useContext } from 'react';
import type { appContextType } from '@/types/types';

const AppContext = createContext<appContextType>({
    isAuthenticated: false,
    theme: 'light',
})

const useAuth = () => useContext(AppContext);

export { AppContext, useAuth };