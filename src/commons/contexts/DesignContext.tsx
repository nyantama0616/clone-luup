"use client";
import { throttle } from 'lodash';
// TODO: ちゃんとした名前考える

import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';

export enum HeaderStatus {
    CLOSED,
    FIRST,
    SECOND,
}

export enum BackgroundStatus {
    WHITE,
    DARK,
}

export type DesignContextType = {
    headerStatus: HeaderStatus;
    showMask: boolean;
    setShowMask: (show: boolean) => void;
    toggleShowMask: () => void;
    backgroundStatus: BackgroundStatus;
    headerScrollPointFirstRef: React.RefObject<HTMLDivElement> | null;
    headerScrollPointSecondRef: React.RefObject<HTMLDivElement> | null;
    bgScrollPointFirstRef: React.RefObject<HTMLDivElement> | null;
    bgScrollPointSecondRef: React.RefObject<HTMLDivElement> | null;
};

const initialContext: DesignContextType = {
    headerStatus: HeaderStatus.CLOSED,
    showMask: false,
    setShowMask: () => { },
    toggleShowMask: () => { },
    backgroundStatus: BackgroundStatus.WHITE,
    headerScrollPointFirstRef: null,
    headerScrollPointSecondRef: null,
    bgScrollPointFirstRef: null,
    bgScrollPointSecondRef: null,
};

const DesignContext = createContext<DesignContextType>(initialContext);

export function useDesignContext() {
    return useContext(DesignContext);
}

interface DesignContextState {
    headerStatus: HeaderStatus;
    showMask: boolean;
    backgroundStatus: BackgroundStatus;
}

export function DesignContextProvider({ children }: { children: React.ReactNode }) {
    const context = useDesignContextController();
    return <DesignContext.Provider value={context}>{children}</DesignContext.Provider>;
}

function useDesignContextController(): DesignContextType {
    const [state, setState] = useState<DesignContextState>({
        headerStatus: HeaderStatus.FIRST,
        showMask: false,
        backgroundStatus: BackgroundStatus.WHITE,
    });

    const headerScrollPointFirstRef = useRef<HTMLDivElement>(null);
    const headerScrollPointSecondRef = useRef<HTMLDivElement>(null);
    const bgScrollPointFirstRef = useRef<HTMLDivElement>(null);
    const bgScrollPointSecondRef = useRef<HTMLDivElement>(null);

    function setShowMask(show: boolean) {
        setState(prev => {
            return {
                ...prev,
                showMask: show,
            }
        });
    }

    function toggleShowMask() {
        setState(prev => {
            return {
                ...prev,
                showMask: !prev.showMask
            };
        });
    };

    function setHeaderStatus(status: HeaderStatus) {
        setState(prev => {
            return {
                ...prev,
                headerStatus: status,
            }
        });
    }

    function setBackgroundStatus(status: BackgroundStatus) {
        setState(prev => {
            return {
                ...prev,
                backgroundStatus: status,
            }
        });
    }

    function handleHeaderScroll() {
        const threshold = 100;
        const windowY = window.scrollY;
        const headerSecondY = headerScrollPointSecondRef.current?.getBoundingClientRect().bottom || 0;

        if (windowY < threshold) {
            setHeaderStatus(HeaderStatus.FIRST);
        } else if (windowY >= threshold && headerSecondY > threshold) {
            setHeaderStatus(HeaderStatus.CLOSED);
        } else if (headerSecondY < threshold) {
            setHeaderStatus(HeaderStatus.SECOND);
        }
    }

    function handleBackgroundScroll() {
        const threshold = 450;

        const refYTop = bgScrollPointFirstRef.current?.getBoundingClientRect().top || 0;
        const refYBottom = bgScrollPointSecondRef.current?.getBoundingClientRect().bottom || 0;

        if (refYTop < threshold && refYBottom > threshold) {
            setBackgroundStatus(BackgroundStatus.DARK);
        } else if (refYTop >= threshold || refYBottom <= threshold) {
            setBackgroundStatus(BackgroundStatus.WHITE);
        }
    }

    const handleScroll = throttle(() => {
        handleHeaderScroll();
        handleBackgroundScroll();
    }, 200);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [state]);

    return {
        headerStatus: state.headerStatus,
        showMask: state.showMask,
        setShowMask,
        toggleShowMask,
        backgroundStatus: state.backgroundStatus,
        headerScrollPointFirstRef,
        headerScrollPointSecondRef,
        bgScrollPointFirstRef,
        bgScrollPointSecondRef,
    };
}
