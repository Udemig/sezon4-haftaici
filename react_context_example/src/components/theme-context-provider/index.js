import { createContext, useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Yeni bir context oluştur ve initialized data'yı set et.
 * (Initialized data yani boş obje olsun şimdilik.)
 * `createContext()` fonksiyonundan bir obje döner ve bu objedeki `Provider`
 * isimli property'yi kullanacağız.
 */
export const ThemeContext = createContext({})

export default function ThemeContextProvider(props) {
    // burada contextin gerçek datasını set edeceğiz.
    const [theme, setTheme] = useState('light')

    const contextValue = {
        // TODO Property'leri buraya yaz.
        //theme: theme,
        //setTheme: setTheme,
        theme,
        setTheme,
    }

    /**
     * ThemeContext'teki `Provider` isimli property'yi return etmemiz gerekiyor.
     */
    return (
        <ThemeContext.Provider value={contextValue}>
            {props.children}
        </ThemeContext.Provider>
    )
}

