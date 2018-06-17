import React from 'react';
import { Glyphicon } from 'react-bootstrap';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { codesetService } from './codesetservice';


const CodeSetRow = ({ book,deleteBook,selectBook }) => <tr>
    <td><Link to={`/book/${book.id}`}>{book.id}</Link></td>
    <td onClick={() => selectBook(book)} style={{cursor:'pointer'}}>{book.title}</td>
    <td>{book.author}</td>
    <td style={{ color: 'green' }} className={'ratherBig'}>{book.price}</td>
    <td>
        <input onClick={() => deleteBook(book)} type="button" value="Del" />
        <button style={{ color: 'red' }} onClick={() => deleteBook(book)}>
            <Glyphicon glyph="remove" /></button>
    </td>
</tr>

export class CodeSetList extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {books:[],titleFilter:'',authorFilter:'',bookSort:'title'}; 
    }

    componentDidMount() {
        console.log("CodeSetList.componentDidMount")
        codesetService.getAll(books => this.setState({ books }))
    }

    valueChanged(ev) {
        //var nimi="titleFilter"
        //var x = { [nimi]: 'Terve' };
        this.setState({[ev.target.id]:ev.target.value});
    }

    deleteBook(book) {
        codesetService.deleteBook(book.id, () => {
            codesetService.getAll(books => this.setState({books}));
        });
    }

    selectBook(book) {
        this.props.history.push(`/book/${book.id}`);
    }

    render() {
        var { books, titleFilter: tf, authorFilter: af, bookSort:sort } = this.state;
        var filtered = books.filter(b => b.title.includes(tf) && b.author.includes(af));
        filtered.sort((a, b) => a[sort].localeCompare(b[sort]));
        var rows = filtered.map(b => <CodeSetRow selectBook={b => this.selectBook(b)} deleteBook={b => this.deleteBook(b)} book={b} key={b.id} />);
        return <div><h2>Booklist</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th><select id="bookSort" onChange={ev => this.valueChanged(ev)} value={sort}>
                            <option value="title">Title</option>
                            <option value="author">Author</option>
                        </select></th>
                        <th><input id="titleFilter" onChange={ev => this.valueChanged(ev)} value={tf} placeholder="Title" /></th>
                        <th><input id="authorFilter" onChange={ev => this.valueChanged(ev)} value={af} placeholder="Author" /></th>
                        <th>Price</th>
                        <th><input onClick={() => this.props.history.push('/book/0')} type="button" value={'lisää'} /></th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
            </div>
    }
}

