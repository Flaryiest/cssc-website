import type { appContextType } from '@/types/types';
import { AppContext } from '@hooks/appContext';

export default function AppProvider({ children, value }: { children: React.ReactNode; value: appContextType }) {
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}