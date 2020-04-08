import { BookData } from 'src/interfaces/book-data/book-data.interface';
import { BookDataProvider } from './book-data-provider';

class GoodReadsProvider extends BookDataProvider {
  constructor() {
    super();
  }
  getBook( isbn: string ): BookData {
    throw new Error( "Method not implemented." );
  }
}
