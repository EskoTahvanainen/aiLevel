//import { Service } from './demo.ajaxhelpers';
import axios from 'axios';

var books = [
    { id: 1, title: "OdysseiA", author: "Homeros", description: "Long way back", price: 12.30, published: new Date(22, 2, 4) },
    { id: 2, title: "HobbiT", author: "Tolkien", description: "There and back", price: 11.20, published: new Date(37, 1, 3) },
    { id: 3, title: "Two towerS", author: "Tolkien", description: "Some balls?", price: 13.40, published: new Date(54, 9, 6) },
    { id: 4, title: "Player pianO", author: "Vonnegut", description: "Engineers for-ever", price: 14.90, published: new Date(52, 8, 1) },
];

var codesets =
[
    {
      "Id": "2a9d75df-2f35-49ce-bcd2-8ee131f510bc",
      "Type": "PUNTYY",
      "Code": "11",
      "Abbrevision": "MIKROSYT",
      "Meaning": "MIKROSYTÄÄRINEN 2"
    },
    {
      "Id": "e38b08ee-1495-41ff-b5de-90978ab6c2b7",
      "Type": "PUNTYY",
      "Code": "12",
      "Abbrevision": "NORMOSYT",
      "Meaning": "NORMOSYTÄÄRINEN"
    },
    {
      "Id": "d204fe82-728f-46cb-bde1-2039a4f4184d",
      "Type": "PUNTYY",
      "Code": "13",
      "Abbrevision": "MAKROSYT",
      "Meaning": "MAKROSYTÄÄRINEN"
    },
    {
      "Id": "4d121918-e749-46d4-b7fd-84e16f9be6ba",
      "Type": "PUNTYY",
      "Code": "14",
      "Abbrevision": "ANISOSYT",
      "Meaning": "ANISOSYTOOSIA"
    },
    {
      "Id": "21f2d113-79bb-4ed5-8af6-89c3603ee0e9",
      "Type": "PUNTYY",
      "Code": "15",
      "Abbrevision": "ANISOKRO",
      "Meaning": "ANISOKROMASIAA"
    },
    {
      "Id": "d4664e56-7994-4665-8a81-00099e12c408",
      "Type": "PUNTYY",
      "Code": "16",
      "Abbrevision": "BASOF.PI",
      "Meaning": "BASOF.PILKK."
    },
    {
      "Id": "b7e22727-a69c-4b1f-b1ff-3e14600cffe2",
      "Type": "PUNTYY",
      "Code": "17",
      "Abbrevision": "ERYTROBL",
      "Meaning": "ERYTROBLASTEJA"
    },
    {
      "Id": "742bd75a-cbfa-4634-a122-c74fa2bec61b",
      "Type": "PUNTYY",
      "Code": "19",
      "Abbrevision": "STOMATOS",
      "Meaning": "STOMATOSYYTTEJÄ"
    },
    {
      "Id": "e5e71543-b2cd-4ab0-88a2-39e61e550378",
      "Type": "PUNTYY",
      "Code": "20",
      "Abbrevision": "FRAGMENT",
      "Meaning": "FRAGMENTAATIOTA"
    },
    {
      "Id": "eca0b608-1689-41b0-8a01-bd8e8ad99a4e",
      "Type": "PUNTYY",
      "Code": "21",
      "Abbrevision": "HYPOKROM",
      "Meaning": "HYPOKROMASIAA"
    },
    {
      "Id": "1e267f86-8c70-431e-b8a7-3847a207886a",
      "Type": "PUNTYY",
      "Code": "22",
      "Abbrevision": "JOLLYN T",
      "Meaning": "JOLLYN TUMIA"
    },
    {
      "Id": "3a1774bf-1d39-4581-93b6-7017337f27a3",
      "Type": "PUNTYY",
      "Code": "24",
      "Abbrevision": "OVALOSYY",
      "Meaning": "OVALOSYYTTEJÄ"
    },
    {
      "Id": "dd37e0d9-fb9d-4079-b8bf-8ec2341d8a27",
      "Type": "PUNTYY",
      "Code": "25",
      "Abbrevision": "PISARAPO",
      "Meaning": "PISARAPOIKILOS"
    },
    {
      "Id": "4c00ffb4-bf5a-4d9a-b023-82449544668d",
      "Type": "PUNTYY",
      "Code": "26",
      "Abbrevision": "POIKILOS",
      "Meaning": "POIKILOSYYTTEJÄ"
    },
    {
      "Id": "81a3fe1a-ef52-474a-8218-436d053ba4f2",
      "Type": "PUNTYY",
      "Code": "27",
      "Abbrevision": "POLYKROM",
      "Meaning": "POLYKROMASIAA"
    },
    {
      "Id": "51d06215-9a5a-4b76-b1ac-69be834b618d",
      "Type": "PUNTYY",
      "Code": "29",
      "Abbrevision": "TARGETSO",
      "Meaning": "TARGETSOLUJA"
    },
    {
      "Id": "17809a59-75d3-486e-8dd2-4224be00d9e0",
      "Type": "PUNTYY",
      "Code": "30",
      "Abbrevision": "RAHARULL",
      "Meaning": "RAHARULLAA"
    },
    {
      "Id": "79a56335-1f41-4769-a575-adb71702115d",
      "Type": "PUNTYY",
      "Code": "31",
      "Abbrevision": "AUTOAGLU",
      "Meaning": "AUTOAGLUTINAAT"
    },
    {
      "Id": "9358f7df-6cb6-408a-a786-50b0c0321512",
      "Type": "PUNTYY",
      "Code": "32",
      "Abbrevision": "KYNÄPOIK",
      "Meaning": "KYNÄPOIKILOS"
    },
    {
      "Id": "dc70e3e9-df39-4647-8074-0ed9095bffe7",
      "Type": "PUNTYY",
      "Code": "33",
      "Abbrevision": "PÄÄRYNÄSOL",
      "Meaning": "PÄÄRYNÄSOLU"
    },
    {
      "Id": "38ab9aa9-563f-4b57-92f5-a9a0a08e00d3",
      "Type": "PUNTYY",
      "Code": "34",
      "Abbrevision": "AKANTOSYYT",
      "Meaning": "AKANTOSYYTTI"
    }
  ];

// 06.06.2018 taisin tajuta!!
// tämä eka periytyy Service:stä ja käyttää ajax:ia
//
/*
class BookServiceHttp extends Service {
    constructor() {
        super("/api/books");
    }

    getAll(cb) {
        console.log('bsHttp:getAll');
        this.get().then(d => cb(d));
    }

    getBook(id, cb) {
        console.log('bsHttp:getBook');
        this.get(id).then(d => cb(d));
    }

    saveBook(book, cb) {
        console.log('bsHttp:saveBook');
        this.put(book.id, book).then(d => cb(d));
    }

    createBook(book, cb) {
        console.log('bsHttp:createBook');
        this.post('', book).then(d => cb(d));
    }

    deleteBook(id, cb) {
        console.log('bsHttp:deleteBook');
        this.delete(id).then(d => cb());
    }

}
export const bookServiceHttp = new BookServiceHttp();
*/


// tämä toinen on kaikkineen tässä filessä ja arvot tuossa ylhäällä
//
export const codesetService = {

    getAll(cb) {
        console.log('css:getAll');         
        //cb(codesets);

        const url = `http://localhost:80/EnersoftDemo.Api/api/codeset/getCodeSets/DIFSOL`

        axios.get(url)
          .then((response) => {
            cb(response.data)
            console.log(response)
          })
          .catch((error) => {
            console.log(error) 
          });
    },

    getBook(Id,cb) {
        console.log('css:getBook ' + Id); 
        //var book = codesets.find(b => b.Id == Id);
        //if (!book) cb({ Id: '', Type: 'Ei löydy', Code: '0', Abbrevision: '', Meaning: '' });
        //else cb(book);

        const url = `http://localhost:80/EnersoftDemo.Api/api/codeset/get/${Id}`

        axios.get(url)
          .then((response) => {
            cb(response.data)
            console.log(response)
          })
          .catch((error) => {
            cb({ Id: '', Type: 'Ei löydy', Code: '0', Abbrevision: '', Meaning: '' })
            console.log(error) 
          });
    },

    // 6.6.18 saas nähdä toimiiko tämä ?
    // put
    saveBook(book, cb) {
        //console.log('css:saveBook ' + book.Id);
        //var index = codesets.findIndex(b => b.Id == book.Id);
        //codesets[index] = book;
        //cb();

        const url = `http://localhost:80/EnersoftDemo.Api/api/codeset/update`
        axios.post(url, book)
          .then((response) => {
            console.log(response)
          })
          .catch((error) => {
            console.log(error) 
          });
        //console.log('css:saveBook ' + book.Id); 
        cb();
    },

    // delete
    deleteBook(Id, cb) {
        console.log('css:deleteBook ' + Id);  
        //var index = codesets.findIndex(b => b.Id == Id);
        //if (index >= 0) codesets.splice(index, 1);
        //cb();

        const url = `http://localhost:80/EnersoftDemo.Api/api/codeset/delete/${Id}`

        axios.delete(url)
          .then((response) => {
            console.log(response)
          })
          .catch((error) => {
            console.log(error) 
          });
        cb();
    },

    // ei toimi vielä!!
    // post
    createBook(book,cb) {
        //book.Id = books.reduce((a, b) => a.id > b.id ? a : b).id + 1;
        //codesets.push(book);
        //console.log('css:createBook ' + book.Id); 
        //cb(book);

        const url = `http://localhost:80/EnersoftDemo.Api/api/codeset/create`
        axios.put(url, book)
          .then((response) => {
            console.log("createBook"+response.data)
            cb(response.data)
          })
          .catch((error) => {
            console.log(error) 
            cb(book)
          });
        //console.log('css:createBook ' + book.Id); 
    }
    /*
    getAll(cb) {
        console.log('css:getAll'); 
        cb(books);
    },

    getBook(id,cb) {
        console.log('css:getBook '+id); 
        var book = books.find(b => b.id == id);
        if (!book) cb({ id: 0, title: 'Ei löydy', author: '', price: 0 });
        else cb(book);
    },

    // 6.6.18 saas nähdä toimiiko tämä ?
    saveBook(book, cb) {
        console.log('css:saveBook '+book.id);
        var index = books.findIndex(b => b.id == book.id);
        books[index] = book;
        cb();
    },

    deleteBook(id,cb) {
        console.log('css:deleteBook '+id); 
        var index = books.findIndex(b => b.id == id);
        if (index >= 0) books.splice(index, 1);
        cb();
    },

    createBook(book,cb) {
        book.id = books.reduce((a, b) => a.id > b.id ? a : b).id + 1;
        books.push(book);
        console.log('css:createBook '+book.id); 
        cb(book);
    }
    */
}
