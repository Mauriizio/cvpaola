export function ThemeScript() {
  const codeToRunOnClient = `
(function() {
  try {
    const storageKey = 'paola-cv-theme';
    const savedTheme = localStorage.getItem(storageKey);
    const theme = savedTheme || 'light';
    
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  } catch (e) {
    // Fallback al modo claro si hay error
    document.documentElement.classList.add('light');
  }
})()`

  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />
}
