class ImageInfo {
    path: string;
    width: number;
    height: number;
    
    constructor(path: string, width: number, height: number) {
        this.path = path;
        this.width = width;
        this.height = height;
    }

    changeWidth(width: number): ImageInfo {
        const height = width / this.aspectRatio;
        return new ImageInfo(this.path, width, height);
    }

    changeHeight(height: number): ImageInfo {
        const width = height * this.aspectRatio;
        return new ImageInfo(this.path, width, height);
    }

    get aspectRatio(): number {
        return this.width / this.height;
    }
}

export default ImageInfo;
