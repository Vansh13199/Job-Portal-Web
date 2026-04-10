import { useEffect, useRef } from 'react';

export default function Toast({ message, onDone }) {
    const toastRef = useRef(null);

    useEffect(() => {
        if (!message) return;

        const el = toastRef.current;
        // Trigger enter animation
        requestAnimationFrame(() => {
            el.classList.remove('translate-y-20', 'opacity-0');
            el.classList.add('translate-y-0', 'opacity-100');
        });

        const timer = setTimeout(() => {
            el.classList.remove('translate-y-0', 'opacity-100');
            el.classList.add('translate-y-20', 'opacity-0');
            el.addEventListener('transitionend', () => {
                if (onDone) onDone();
            }, { once: true });
        }, 2600);

        return () => clearTimeout(timer);
    }, [message, onDone]);

    if (!message) return null;

    return (
        <div
            ref={toastRef}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 translate-y-20 bg-dark-bg text-white py-3.5 px-7 rounded-xl text-sm font-medium z-[9999] shadow-[0_8px_30px_rgba(0,0,0,0.25)] opacity-0 transition-all duration-300 pointer-events-none"
        >
            {message}
        </div>
    );
}
