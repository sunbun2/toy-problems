function Task(props) {
    console.log("task dsiplay")
    return <li
    style={{

        color: props.task.status ? "red" : "black"
        
    }}
>
        
    
    {props.name}, {props.dueDate.toLocaleTimeString()} ,{' '}

    <input type = "checkbox" onChange = {() =>{
        props.onChange(props.task.id);
    }}
    />
    <button value = "Delete" onClick = {() =>
        props.onDelete(props.task.id)
    }>Delete</button>
    
    </li>
}