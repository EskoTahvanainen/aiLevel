import React from 'react';
import { Glyphicon } from 'react-bootstrap';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { codesetService } from './codesetservice';


const CodeSetRow = ({ book,deleteBook,selectBook }) => <tr>
    <td><Link to={`/book/${book.Id}`}>{book.Id}</Link></td>
    <td onClick={() => selectBook(book)} style={{cursor:'pointer'}}>{book.Type}</td>
    <td>{book.Abbrevision}</td>
    <td style={{ color: 'green' }} className={'ratherBig'}>{book.Code}</td>
    <td>{book.Meaning}</td>
    <td>
        <input onClick={() => deleteBook(book)} type="button" value="Del" />
        <button style={{ color: 'red' }} onClick={() => deleteBook(book)}>
            <Glyphicon glyph="remove" /></button>
    </td>
</tr>

export class CodeSetList extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {codesets:[],TypeFilter:'',AbbrevisionFilter:'',bookSort:'Type'}; 
    }

    componentDidMount() {
        console.log("CodeSetList.componentDidMount")
        codesetService.getAll(codesets => this.setState({ codesets }))
    }

    valueChanged(ev) {
        //var nimi="titleFilter"
        //var x = { [nimi]: 'Terve' };
        this.setState({[ev.target.id]:ev.target.value});
    }

    deleteBook(book) {
        codesetService.deleteBook(book.Id, () => {
            codesetService.getAll(codesets => this.setState({codesets}));
        });
    }

    selectBook(book) {
        this.props.history.push(`/book/${book.Id}`);
    }

    render() {
        var { codesets, TypeFilter: tf, AbbrevisionFilter: af, bookSort:sort } = this.state;
        var filtered = codesets.filter(b => b.Type.includes(tf) && b.Abbrevision.includes(af));
        filtered.sort((a, b) => a[sort].localeCompare(b[sort]));
        var rows = filtered.map(b => <CodeSetRow selectBook={b => this.selectBook(b)} deleteBook={b => this.deleteBook(b)} book={b} key={b.Id} />);
        return <div><h2>Booklist</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th><select id="bookSort" onChange={ev => this.valueChanged(ev)} value={sort}>
                            <option value="Type">Type</option>
                            <option value="Abbrevision">Abbrevision</option>
                        </select></th>
                        <th><input id="TypeFilter" onChange={ev => this.valueChanged(ev)} value={tf} placeholder="Type" /></th>
                        <th><input id="AbbrevisionFilter" onChange={ev => this.valueChanged(ev)} value={af} placeholder="Abbrevision" /></th>
                        <th>Code</th>
                        <th>Meaning</th>
                        <th><input onClick={() => this.props.history.push('/book/00000000-0000-0000-0000-000000000000')} type="button" value={'lisää'} /></th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
            </div>
    }
}

