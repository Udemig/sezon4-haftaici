import { useContext } from "react";
import { Button } from "react-bootstrap";
import { ThemeContext } from "../../components/theme-context-provider";

export default function MainPage() {
    const themeContextData = useContext(ThemeContext)

    return (
        <main>
            Burası main bölgesi
            <br />

            {/*
        Buradaki `setTheme()` fonksiyonunu ThemeContext'ten almamız gerekiyor.
        */}
            <Button onClick={e =>
                themeContextData.setTheme(
                    themeContextData.theme === 'light' ? 'dark' : 'light'
                )}
            >
                Change Theme
            </Button>
        </main>
    )
}