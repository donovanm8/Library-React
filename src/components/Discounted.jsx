import { books } from "../data";
import Book from "./ui/Book";

export default function Discounted() {
  return (
    <section id="recent">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Discounted <span className="purple">Books</span>
          </h2>
          <div className="books">
            {books
              .filter((book) => book.salePrice > 0)
              .slice(0, 8)
              .map((book, index) => (
                <Book book={book} key={index} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
