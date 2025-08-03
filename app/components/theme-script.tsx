export function ThemeScript() {
  const codeToRunOnClient = `
(function() {
  function getInitialColorMode() {
    const persistedColorPreference = window.localStorage.getItem('paola-cv-theme');
    const hasPersistedPreference = typeof persistedColorPreference === 'string';
    
    if (hasPersistedPreference) {
      return persistedColorPreference;
    }
    
    return 'light';
  }
  
  const colorMode = getInitialColorMode();
  const root = document.documentElement;
  root.classList.add(colorMode);
})()`

  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />
}
