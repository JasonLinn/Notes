
$(function(){
alert('hah');

var Hello = React.createClass({
    render:function(){
        return <div>Hello{this.props.name}</div>;
    }
})

React.render(<Hello name = "World"/>,
document.getElementById('container'));

})//end

function testJSX(){


	return (<div>test JSX</div>);
}
