import React from 'react';
import ReactDom from 'react-dom';
import { SSL_OP_PKCS1_CHECK_1 } from 'constants';
import 'bootstrap/dist/css/bootstrap.css';
import {Row, Col, Card, CardBody, CardText, CardTitle, CardImg} from 'reactstrap';
import './style.css';

class ContentFeed extends React.Component {
    constructor(){
        super();
        this.state = {
            'items':[]
        }
    }
    componentDidMount() {
        this.getItems();
    }

    getItems() {

        fetch('http://127.0.0.1:8000/api/item/')
            .then(results => results.json())
            .then( results  => this.setState({'items': results}));
    }

    render() {
        return (
            <ul>
                {this.state.items.map(function(item, index) {
                    return (
                        < ContentItem item={item} key={index}/>
)
                }
                )}
            </ul>
        );
    }
}

class ContentItem extends React.Component{
    render(){
        return(
        <Row className="ContentItem">
        <Col xs="3"/>
            <Col xs="12" sm="6">
                <Card>                        
                  <CardImg top width="100%" src={this.props.item.image }>
                 </CardImg> 
                    <CardBody>
                        <CardTitle>
                            { this.props.item.title }
                        </CardTitle>
                        <CardText>
                            { this.props.item.description }
                        </CardText>
                    </CardBody>
                </Card>
            </Col>
        </Row>)
    }
}

ReactDom.render(
    <ContentFeed />,
    document.getElementById('root')
);
