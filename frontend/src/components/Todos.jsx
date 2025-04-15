

export function Todos({ todos }) {
    // export function Todos(props){
    //     const todos = props.todos;
    const markAsComplete = (_id) => {
        fetch("http://localhost:3000/completed", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ _id })
        })
            .then(async (res) => {
                const json = await res.json();
                alert("Todo marked as completed");
                // Optionally reload todos or signal parent to reload
            })
    };

    return <div>
        {todos.map(function (todo) {
            return <div key={todo._id}>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button style={{
                    padding: 10,
                    margin: 10
                }}
                    disabled={todo.completed}
                    onClick={() => markAsComplete(todo._id)} >{todo.completed == true ? "Completed" : "Mark as Complete"}</button>
            </div>
        })}

    </div>
}