const TRUCO_SCORE_STORAGE_KEY = "truco-score_score-data"

export const saveScoreData = (data: any) => {
    return localStorage.setItem(TRUCO_SCORE_STORAGE_KEY, JSON.stringify(data))
}

export const getScoreData = () => {
    const data = localStorage.getItem(TRUCO_SCORE_STORAGE_KEY)
    if (data) return JSON.parse(data)
}