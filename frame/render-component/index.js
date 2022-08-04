function Item(props) {
    return <li className="item" style={props.style} onClick={props.onClick}>{props.children}</li>;
}
/*function List(props) {
    return <ul className="list">
        {props.list.map((item, index) => {
            return <Item style={{ background: item.color }} onClick={() => alert(item.text)}>{item.text}</Item>
        })}
    </ul>;
}

const list = [
    {
        text: 'aaa',
        color: 'blue'
    },
    {
        text: 'ccc',
        color: 'orange'
    },
    {
        text: 'ddd',
        color: 'red'
    }
]*/

class List extends Component {
    constructor(props) {
        super();
        this.state = {
            list: [
                {
                    text: 'test1',
                    color: 'blue'
                },
                {
                    text: 'test2',
                    color: 'orange'
                },
                {
                    text: 'test3',
                    color: 'red'
                }
            ],
            textColor: props.textColor
        }
    }

    render() {
        return <ul className="list">
            {this.state.list.map((item, index) => {
                return <Item style={{ background: item.color, color: this.state.textColor}} onClick={() => alert(item.text)}>{item.text}</Item>
            })}
        </ul>;
    }
}

render(<List textColor={'pink'}/>, document.getElementById('root'));
