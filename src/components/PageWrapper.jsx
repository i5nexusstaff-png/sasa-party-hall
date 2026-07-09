/**
 * Wraps each page with a fast CSS fade-in and top padding so content
 * clears the fixed navbar. (CSS animation — cheaper than a JS transition.)
 */
export default function PageWrapper({ children, noPad = false }) {
  return (
    <main className={`page-enter ${noPad ? '' : 'pt-20'}`}>
      {children}
    </main>
  );
}
