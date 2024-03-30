import { useEffect } from 'react';

function useHideOnClickOutside(ref: any, onHide: () => void) {
  useEffect(() => {
    function handleClickOutside(event: Event) {
      if (ref.current && !ref.current.contains(event.target)) {
        onHide();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, onHide]);
}

export default useHideOnClickOutside;
