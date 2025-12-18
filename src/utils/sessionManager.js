const HISTORY_KEY = 'hewar_history';
const USAGE_KEY = 'hewar_usage';

// --- History Management ---

/**
 * Saves a session's played question IDs to history.
 * Maintains a log of sessions.
 * @param {string[]} questionIds 
 */
export const saveSession = (questionIds) => {
    try {
        if (!questionIds || questionIds.length === 0) return;

        const historyJson = localStorage.getItem(HISTORY_KEY);
        let history = historyJson ? JSON.parse(historyJson) : [];

        // Add new session at the beginning
        history.unshift({
            timestamp: Date.now(),
            questions: questionIds
        });

        // Keep only last 10 sessions to save space
        if (history.length > 10) {
            history = history.slice(0, 10);
        }

        localStorage.setItem(HISTORY_KEY, JSON.stringify(history));

        // Update usage counts simultaneously
        updateUsageCounts(questionIds);

    } catch (e) {
        console.error("Failed to save session history:", e);
    }
};

/**
 * Returns a Set of IDs from the last N sessions.
 * @param {number} limit Number of recent sessions to check
 * @returns {Set<string>}
 */
export const getRecentHistory = (limit = 3) => {
    try {
        const historyJson = localStorage.getItem(HISTORY_KEY);
        if (!historyJson) return new Set();

        const history = JSON.parse(historyJson);
        const recentSessions = history.slice(0, limit);

        const recentIds = new Set();
        recentSessions.forEach(session => {
            session.questions.forEach(id => recentIds.add(id));
        });

        return recentIds;
    } catch (e) {
        console.error("Failed to get recent history:", e);
        return new Set();
    }
};

// --- Usage Count Management ---

/**
 * Increments usage count for provided IDs.
 * @param {string[]} questionIds 
 */
export const updateUsageCounts = (questionIds) => {
    try {
        const usageJson = localStorage.getItem(USAGE_KEY);
        let usage = usageJson ? JSON.parse(usageJson) : {};

        questionIds.forEach(id => {
            usage[id] = (usage[id] || 0) + 1;
        });

        localStorage.setItem(USAGE_KEY, JSON.stringify(usage));
    } catch (e) {
        console.error("Failed to update usage counts:", e);
    }
};

/**
 * Returns object mapping ID -> Count
 * @returns {Object.<string, number>}
 */
export const getUsageCounts = () => {
    try {
        const usageJson = localStorage.getItem(USAGE_KEY);
        return usageJson ? JSON.parse(usageJson) : {};
    } catch (e) {
        console.error("Failed to get usage counts:", e);
        return {};
    }
};
