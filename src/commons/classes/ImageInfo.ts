class ImageInfo {
    path: string;
    width: number;
    height: number;
    
    constructor(path: string, width: number, height: number) {
        this.path = path;
        this.width = width;
        this.height = height;
    }

    get aspectRatio(): number {
        return this.width / this.height;
    }
}

export default ImageInfo;
