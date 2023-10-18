



class Books {
    constructor(bookName,author,yearOfWriting,price) {
        this.bookName='Lost World';
        this.author='Arthur Conan Doyle';
        this.yearOfWriting=1887;
        this.price=20;
    }   AskForPrice(priceReduction) {
        const reductedPrice=this.price*(1-priceReduction);
        console.log(`BookName:${this.bookName}`);
        console.log(`Author:${this.author}`);
        console.log(`YearOfWriting:${this.yearOfWriting}`);
        console.log(`Price:${this.price} manat`);
        console.log(` Reducted Price(${priceReduction*100}% reducted): ${reductedPrice} 
        manat`);
  
 
    }
  }
  
  // Create an example book
  const book1 = new Books("Lost World", "Arthur Conan Doyle", "1887", 20.0);
  
  // Asking for 40% reduction
  book1.AskForPrice(0.40);  
