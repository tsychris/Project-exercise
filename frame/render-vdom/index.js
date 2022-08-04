// vdom
const vdom = {
    type: 'ul',
    props: {
        className: 'list'
    },
    children: [
        {
            type: 'li',
            props: {
                className: 'item',
                style: {
                    background: 'blue',
                    color: '#fff'
                },
                onClick: function() {
                    alert("test1");
                }
            },
            children: [
                'testitem1'
            ]
        },
        {
            type: 'li',
            props: {
                className: 'item'
            },
            children: [
                'testitem2'
            ]
        },
        {
            type: 'li',
            props: {
                className: 'item'
            },
            children: [
                'testitem3'
            ]
        }
    ]
};

render(vdom, document.getElementById('root'));
