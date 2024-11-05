export function upperCase(word: string | undefined | null): string {
    if (typeof word === 'string') {
        return word.toUpperCase(); 
    }
    return '';
}
