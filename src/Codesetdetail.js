import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import { codesetService } from './codesetservice';

export class CodeSetDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = { book: { Id: '', Type: 'Ei löydy', Code: '0', Abbrevision: '', Meaning: '' } };
    }

    componentDidMount() {
        codesetService.getBook(this.props.match.params.id, book => this.setState({ book }))
    }

    valueChanged(ev) {
        this.state.book[ev.target.id] = ev.target.value;
        this.forceUpdate();
    }

    goBack() {
        if (!Number(this.props.match.params.id))
            codesetService.createBook(this.state.book, b => this.props.history.goBack());
        else
            codesetService.saveBook(this.state.book, b => this.props.history.goBack());
    }

    render() {
        return <div><h2>BookDetail ({this.props.match.params.id})</h2>
        <table className="table">
            <tr>
                <td>Type</td><td><input id="Type" onChange={ev => this.valueChanged(ev)} value={this.state.book.Type}/></td>
            </tr>
            <tr>
                <td>Abbrevision</td><td><input id="Abbrevision" onChange={ev => this.valueChanged(ev)} value={this.state.book.Abbrevision} /></td>
            </tr>
            <tr>
                <td>Code</td><td><input id="Code" onChange={ev => this.valueChanged(ev)} value={this.state.book.Code} /></td>
            </tr>
            <tr>
                <td>Meaning</td><td><input id="Meaning" onChange={ev => this.valueChanged(ev)} value={this.state.book.Meaning} /></td>
            </tr>
            <tr>
                <td></td><td><input onClick={() => this.goBack()} type="button" value="Back" /></td>
            </tr>
        </table>
        </div>
    }
}

const PrintableDetail = (props) => <div>
    Kirjan id {props.match.params.id}
    </div>

export const DetailContainer = ({ match }) => <div>
    <h2>Cont</h2>
    <div>
        <Link to={`${match.url}`}>Editable</Link>
        <Link to={`${match.url}/printable`}>Printable</Link>
    </div>
    <Switch>
        <Route exact path={`${match.path}`} component={CodeSetDetail} />
        <Route path={`${match.path}/printable`} component={PrintableDetail} />
    </Switch>
</div>
