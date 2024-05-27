
export const getFullYear = () => {
    return new Date().getFullYear();
};

export const getFooterCopy = (isIndex) => {
    if (isIndex) {
        return 'Holberton School';
    }
    return 'Holberton School main dashboard';
};

export const getLatestNotification = () => {
    return `Latest notification at ${new Date().toLocaleTimeString()}`;
}