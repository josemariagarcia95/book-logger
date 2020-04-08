import { BookData } from 'src/interfaces/book-data/book-data.interface';

abstract class BookDataProvider {
  abstract getBook( isbn: string ): BookData;
}

class GoodReadsProvider extends BookDataProvider {
  getBook( isbn: string ): BookData {
    throw new Error( "Method not implemented." );
  }
}
