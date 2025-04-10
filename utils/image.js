export function getFilePath(file){
    const filePath= file.path;
    const fileSplit= filePath.split("/");
    return `${fileSplit[0]}`;
}