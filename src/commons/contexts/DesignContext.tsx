"use client";
// TODO: ちゃんとした名前考える

import React, { createContext, useContext, useState } from 'react';

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
        headerStatus: HeaderStatus.CLOSED,
        showMask: false,
        backgroundStatus: BackgroundStatus.WHITE,
    });

    function setHeaderStatus(status: HeaderStatus) {
        setState({ ...state, headerStatus: status });
    }

    function setShowMask(show: boolean) {
        setState({ ...state, showMask: show });
    }

    function setBackgroundStatus(status: BackgroundStatus) {
        setState({ ...state, backgroundStatus: status });
    }

    return {
        headerStatus: state.headerStatus,
        setHeaderStatus,
        showMask: state.showMask,
        setShowMask,
        backgroundStatus: state.backgroundStatus,
        setBackgroundStatus,
    };
}
