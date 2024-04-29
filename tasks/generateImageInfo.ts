import * as fs from 'fs';
import * as path from 'path';
import * as sizeOf from 'image-size';

class ImageInfoGenerator {
  private static imagesPath = path.resolve(__dirname, '../../public/images');
  private static outputPath = path.resolve(__dirname, '../../src/commons/enums/images.gen.ts');

  public static generate() {
    const instances: string[] = [];
    this.addInstances(this.imagesPath, instances);

    //TODO: インデントが気になる
    let output = `
      import ImageInfo from "../classes/ImageInfo";
      const ImageInfos = {
    `;
    output += instances.join('\n');
    output += `
      }

      export default ImageInfos;
    `;
    fs.writeFileSync(this.outputPath, output);
  }

  private static addInstances(dirPath: string, instances: string[]) {
    const files = fs.readdirSync(dirPath);

    for (const file of files) {
      const filePath = path.join(dirPath, file);
      const stats = fs.statSync(filePath);

      if (stats.isDirectory()) {
        // フォルダの場合の処理
        this.addInstances(filePath, instances);
      } else {
        // ファイルの場合の処理
        const dimensions = sizeOf.imageSize(filePath);
        const width = dimensions.width;
        const height = dimensions.height;
        
        const relativePath = path.relative(this.imagesPath, filePath);
        const parsedPath = path.parse(relativePath);
        const relativePathWithoutExt = path.join(parsedPath.dir, parsedPath.name);
        const nameParts = relativePathWithoutExt.split('/');
        const instanceName = nameParts.map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join('');

        const imagesIndex = dirPath.indexOf('images');
        const dirPathFromImages = dirPath.slice(imagesIndex);
        const fileName = path.basename(filePath);

        instances.push(`\t\t${instanceName}: new ImageInfo("/${dirPathFromImages}/${fileName}", ${width}, ${height}),`);
      }
    }
  }

}

ImageInfoGenerator.generate();
