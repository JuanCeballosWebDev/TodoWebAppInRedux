import {connect} from 'react-redux';
import * as actions from '../redux/actions/todoActions';
//import { v4 as uuidv4 } from 'uuid';

const Todo = (props) =>{

    const handleClick = (id) => {
        if (!id) return;
        props.submitDeleteTodo(id);
    };

    const handleOnChnage = () => {
        
        props.submitToggleTodo(props.id);
    };

    return (
        <>
            <li key={props.id}>  
                <input 
                  type="checkbox"
                  checked = { props.completed }
                  onChange = { handleOnChnage }
               />
                <span style= {{textDecoration: props.completed ? "line-through" : ""}}>{props.text}</span> 
                <button onClick={() => handleClick(props.id)}>X</button>
            </li>
        </>
    );
};

const mapDispatchToProps = dispatch => (
    {
         submitDeleteTodo: (id) => dispatch(actions.deleteTodo(id)),
         submitToggleTodo: (id) => dispatch(actions.toggleTodo(id))
    }
 );
 
 export default connect(null, mapDispatchToProps)(Todo);