/*
patch 和 render 一样，也是递归的处理元素、组件、文本。
patch 时要对比下 dom 中的和要渲染的 vdom 的一些信息，
然后决定渲染新的 dom，还是复用已有 dom，
所以 render 的时候要在 dom 上记录 instance、key 等信息。
 */

function Item(props) {
    return <li className="item" style={props.style}>{props.children}  <a href="#" onClick={props.onRemoveItem}>X </a></li>;
}

class List extends Component {
    constructor(props) {
        super();
        this.state = {
            list: [
                {
                    text: 'test1',
                    color: 'pink'
                },
                {
                    text: 'test2',
                    color: 'orange'
                },
                {
                    text: 'test3',
                    color: 'yellow'
                }
            ]
        }
    }

    handleItemRemove(index) {
        this.setState({
            list: this.state.list.filter((item, i) => i !== index)
        });
    }
    
    handleAdd() {
        this.setState({
            list: [
                ...this.state.list, 
                {
                    text: this.ref.value
                }
            ]
        });
    }

    render() {
        return <div>
            <ul className="list">
                {this.state.list.map((item, index) => {
                    return <Item style={{ background: item.color, color: this.state.textColor}} onRemoveItem={() => this.handleItemRemove(index)}>{item.text}</Item>
                })}
            </ul>
            <div>
                <input ref={(ele) => {this.ref = ele}}/>
                <button onClick={this.handleAdd.bind(this)}>add</button>
            </div>
        </div>;
    }
}

render(<List textColor={'#000'}/>, document.getElementById('root'));
