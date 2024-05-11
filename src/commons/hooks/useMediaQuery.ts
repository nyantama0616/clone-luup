/*
    参考
    https://zenn.dev/nabeliwo/articles/89099b39223eca
*/

import { useEffect, useState } from 'react'

export const mediaQuery = {
    sp: 'width < 768px',
    pc: '1122px <= width',
}

export const useMediaQuery = (query: string) => {
    const formattedQuery = `(${query})`
    const [match, setMatch] = useState(false);

    useEffect(() => {
        // windowオブジェクトとmatchMediaメソッドの存在を確認
        if (typeof window !== 'undefined' && window.matchMedia) {
            const mql = window.matchMedia(formattedQuery)

            if (mql.media === 'not all' || mql.media === 'invalid') {
                console.error(`useMediaQuery Error: Invalid media query`)
            }

            mql.onchange = (e) => {
                setMatch(e.matches)
            }

            // 初回実行時に現在のマッチ状態を設定
            setMatch(mql.matches)

            return () => {
                mql.onchange = null
            }
        }
    }, [formattedQuery])

    return match
}
