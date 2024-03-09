export const isValidImageExtension = (fileName) => {
    const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
    const fileExtension = fileName.slice(((fileName.lastIndexOf(".") - 1) >>> 0) + 2);
    return allowedExtensions.includes(`.${fileExtension.toLowerCase()}`);
};