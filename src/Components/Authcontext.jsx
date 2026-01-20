import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

// Demo admin credentials
const ADMIN_CREDENTIALS = {
    email: 'admin@carvanax.com',
    password: 'admin123'
};

export const AuthProvider = ({ children }) => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [loading, setLoading] = useState(true);

    // Check if admin is logged in on mount
    useEffect(() => {
        const adminStatus = localStorage.getItem('isAdmin');
        if (adminStatus === 'true') {
            setIsAdmin(true);
        }
        setLoading(false);
    }, []);

    const login = (email, password) => {
        if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
            setIsAdmin(true);
            localStorage.setItem('isAdmin', 'true');
            return { success: true };
        }
        return { success: false, message: 'Invalid credentials' };
    };

    const logout = () => {
        setIsAdmin(false);
        localStorage.removeItem('isAdmin');
    };

    return (
        <AuthContext.Provider value={{ isAdmin, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within AuthProvider');
    }
    return context;
};