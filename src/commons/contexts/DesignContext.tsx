"use client";
import { throttle } from 'lodash';
// TODO: ちゃんとした名前考える

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

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
    setHeaderStatus: (status: HeaderStatus) => void;
    showMask: boolean;
    setShowMask: (show: boolean) => void;
    backgroundStatus: BackgroundStatus;
    setBackgroundStatus: (status: BackgroundStatus) => void;
};

const initialContext: DesignContextType = {
    headerStatus: HeaderStatus.CLOSED,
    setHeaderStatus: () => {},
    showMask: false,
    setShowMask: () => { },
    backgroundStatus: BackgroundStatus.WHITE,
    setBackgroundStatus: () => {},
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

    const setHeaderStatus = (status: HeaderStatus) => {
        if (status === state.headerStatus) return;
        setState({ ...state, headerStatus: status });
    };

    function setShowMask(show: boolean) {
        if (show === state.showMask) return;
        setState({ ...state, showMask: show });
    }

    function setBackgroundStatus(status: BackgroundStatus) {
        if (status === state.backgroundStatus) return;
        setState({ ...state, backgroundStatus: status });
    }

    const handleScroll = throttle(() => {
        const thredhold = 100;
        const windowY = window.scrollY;
        if (windowY > thredhold) {
            setHeaderStatus(HeaderStatus.CLOSED);
            console.log("CLOSED");
            
        } else if (windowY <= thredhold) {
            setHeaderStatus(HeaderStatus.FIRST);
            console.log("FIRST");
        }
        console.log(windowY);
        
    }, 200);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [state]);

    return {
        headerStatus: state.headerStatus,
        setHeaderStatus,
        showMask: state.showMask,
        setShowMask,
        backgroundStatus: state.backgroundStatus,
        setBackgroundStatus,
    };
}
