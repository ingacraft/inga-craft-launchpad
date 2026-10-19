import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Volta ao topo ao trocar de rota ou rola até a âncora (#secao) quando houver. */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    // Aguarda a página renderizar antes de rolar até a seção
    const id = decodeURIComponent(hash.slice(1));
    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView();
    }, 50);
    return () => window.clearTimeout(timer);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
