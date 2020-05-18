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


class TodoList extends React.Component {
    constructor(props) {
        console.log("todolist")
        super(props);
        this.state = {list: props.list};

        this.handleAddTask = this.handleAddTask.bind(this);
    }
    handleAddTask(task) {
        console.log("add task clicked");
        this.state.list.push(task);
        this.setState({list: this.state.list})
    }
    handleDeleteTask = (taskId) => {
		console.log('delete button clicked');
		const list = this.state.list.filter((t) => t.id !== taskId);
		this.setState({ list: list });
    };
    
    handleChange = (taskId) => {
		console.log('checkbox clicked');
		this.setState({
			list: this.state.list.map((task) => {
				if (task.id === taskId) {
					return {
						...task,
						status: !task.status
					};
				} 
				return task;
				
			})
		});
	};

    render() {
        console.log("todolist render")
        return (
            <div>
                <h1>TODO List</h1>
                <ol>
                    {
                        this.state.list.map((t) =>
                            <Task key={t.id} name={t.name} dueDate={t.dueDate} onDelete={this.handleDeleteTask} onChange = {this.handleChange}task = {t} />)
                    }
                </ol>
                <TaskNameForm onAddTask={this.handleAddTask} />
            </div>
        );
    }
}