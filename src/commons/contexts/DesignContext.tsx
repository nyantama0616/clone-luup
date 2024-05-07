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
    CREAM,
}

export type DesignContextType = {
    headerStatus: HeaderStatus;
    showMask: boolean;
    showWhyLuup: boolean;
    setShowMask: (show: boolean) => void;
    toggleShowMask: () => void;
    backgroundStatus: BackgroundStatus;
    headerScrollPointFirstRef: React.RefObject<HTMLDivElement> | null;
    headerScrollPointSecondRef: React.RefObject<HTMLDivElement> | null;
    bgScrollPointFirstRef: React.RefObject<HTMLDivElement> | null;
    bgScrollPointSecondRef: React.RefObject<HTMLDivElement> | null;
    whyLuupRef: React.RefObject<HTMLDivElement> | null;
    footerRef: React.RefObject<HTMLDivElement> | null;  
};

const initialContext: DesignContextType = {
    headerStatus: HeaderStatus.CLOSED,
    showMask: false,
    showWhyLuup: false,
    setShowMask: () => { },
    toggleShowMask: () => { },
    backgroundStatus: BackgroundStatus.WHITE,
    headerScrollPointFirstRef: null,
    headerScrollPointSecondRef: null,
    bgScrollPointFirstRef: null,
    bgScrollPointSecondRef: null,
    whyLuupRef: null,
    footerRef: null,
};

const DesignContext = createContext<DesignContextType>(initialContext);

export function useDesignContext() {
    return useContext(DesignContext);
}

interface DesignContextState {
    headerStatus: HeaderStatus;
    showMask: boolean;
    backgroundStatus: BackgroundStatus;
    showWhyLuup: boolean;
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
        showWhyLuup: false,
    });

    const headerScrollPointFirstRef = useRef<HTMLDivElement>(null);
    const headerScrollPointSecondRef = useRef<HTMLDivElement>(null);
    const bgScrollPointFirstRef = useRef<HTMLDivElement>(null);
    const bgScrollPointSecondRef = useRef<HTMLDivElement>(null);
    const whyLuupRef = useRef<HTMLDivElement>(null);
    const footerRef = useRef<HTMLDivElement>(null);

    function setShowMask(show: boolean) {
        setState(prev => {
            if (prev.showMask === show) return prev; // Column: これがないと無意味に再レンダリングされてしまう
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
            if (prev.headerStatus === status) return prev;
            
            return {
                ...prev,
                headerStatus: status,
            }
        });
    }

    function setBackgroundStatus(status: BackgroundStatus) {
        setState(prev => {
            if (prev.backgroundStatus === status) return prev;

            return {
                ...prev,
                backgroundStatus: status,
            }
        });
    }

    function setShowWhyLuup(show: boolean) {
        setState(prev => {
            if (prev.showWhyLuup === show) return prev;
            
            return {
                ...prev,
                showWhyLuup: show,
            }
        });
    }

    function handleHeaderScroll() {
        const threshold = 100;
        const windowY = window.scrollY;
        const headerSecondY = headerScrollPointSecondRef.current?.getBoundingClientRect().bottom || 0;
        const footerY = footerRef.current?.getBoundingClientRect().top || 0;

        // TODO: 条件分岐の順番を見直す
        if (footerY <= threshold) {
            setHeaderStatus(HeaderStatus.CLOSED);
        } else if (windowY < threshold) {
            setHeaderStatus(HeaderStatus.FIRST);
        } else if (windowY >= threshold && headerSecondY > threshold) {
            setHeaderStatus(HeaderStatus.CLOSED);
        } else if (headerSecondY < threshold) {
            setHeaderStatus(HeaderStatus.SECOND);
        }
    }

    function handleWhyLuupScroll() {
        const threshold = 800;

        const refYTop = whyLuupRef.current?.getBoundingClientRect().top || 0;

        if (refYTop < threshold) {
            setShowWhyLuup(true);
        } else if (refYTop >= threshold) {
            setShowWhyLuup(false);
        }
    }

    function handleBackgroundScroll() {
        const threshold = 450;

        const refYTop = bgScrollPointFirstRef.current?.getBoundingClientRect().top || 0;
        const refYBottom = bgScrollPointSecondRef.current?.getBoundingClientRect().bottom || 0;

        if (refYTop < threshold && refYBottom > threshold) {
            setBackgroundStatus(BackgroundStatus.DARK);
        } else if (refYTop >= threshold) {
            setBackgroundStatus(BackgroundStatus.WHITE);
        } else {
            setBackgroundStatus(BackgroundStatus.CREAM);
        }
    }

    const handleScroll = throttle(() => {
        handleHeaderScroll();
        handleBackgroundScroll();
        handleWhyLuupScroll();
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
        whyLuupRef,
        showWhyLuup: state.showWhyLuup,
        footerRef,
    };
}
