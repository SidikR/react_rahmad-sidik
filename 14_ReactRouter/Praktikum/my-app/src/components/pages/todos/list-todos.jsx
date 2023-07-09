export default function ListTodos({
    list_todos = [],
    handleDeleteTodo,
    handleCompleted,
}) {
    return (
        <>
            {list_todos.map((item) => (
                <div
                    className='row d-flex justify-content-between align-items-center mb-3 border border-primary p-2 rounded-2'
                    key={item.id}
                >
                    <div className='col-8'>
                        <div className='form-check'>
                            <input
                                type='checkbox'
                                onClick={() => {
                                    handleCompleted(item.id);
                                }}
                            />
                            <label
                                className={
                                    item.completed
                                        ? "form-check-label ms-3 text-decoration-line-through fst-italic text-black text-opacity-50"
                                        : "form-check-label ms-3"
                                }
                            >
                                {item.title}
                            </label>
                        </div>
                    </div>
                    <div className='col-4 d-flex justify-content-end'>
                        <button
                            onClick={() => {
                                handleDeleteTodo(item.id);
                            }}
                            className='btn btn-danger btn-sm rounded-2'
                        >
                            Hapus
                        </button>
                    </div>
                </div>
            ))}
        </>
    );
}
