import { connect, useDispatch } from "react-redux"
import { Col, Container, Row } from "reactstrap"
import { bindActionCreators } from "redux"
import { useAppSelector } from "../app/hooks"
import { searchFor } from '../actions/search_for'
import { useHistory } from "react-router"
import { updateValue } from "../reducers/search_reducer"

type Props = {
    searchFor: (val: string) => void
}

const HistoryList = (props: Props) => {
    const history = useHistory()
    const historyList = useAppSelector(state => state.search.history)
    const dispatch = useDispatch()

    const search = (query: string): void => {
        history.push('/')

        dispatch(updateValue(query))
        props.searchFor(query)
    }

    return (
        <Container className="mt-5">
            <Row>
                <Col xs={12}>
                    <ul>
                        {historyList.map((query, idx) => (
                            <li key={idx}>
                                <a href="#" onClick={() => search(query)}>
                                    {query}
                                </a>
                            </li>
                        ))}
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}


const mapDispatchToProps = (dispatch: any) => bindActionCreators({ searchFor }, dispatch)
export default connect(null, mapDispatchToProps)(HistoryList)