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
        //if (!Number(this.props.match.params.id))
        //    codesetService.createBook(this.state.book, b => this.props.history.goBack());
        //else
            codesetService.saveBook(this.state.book, b => this.props.history.goBack());
    }

    render() {
        return <div><h2>BookDetail ({this.props.match.params.id})</h2>
            Type <input id="Type" onChange={ev => this.valueChanged(ev)} value={this.state.book.Type}/><br />
            Abbrevision <input id="Abbrevision" onChange={ev => this.valueChanged(ev)} value={this.state.book.Abbrevision} /><br />
            <input onClick={() => this.goBack()} type="button" value="Back" />
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
