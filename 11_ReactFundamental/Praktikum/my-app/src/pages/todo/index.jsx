export default function Todos() {
    const list_todo = [
        { id: 1, title: "Membuat Sawah", completed: false },
        { id: 2, title: "Membuat Buku", completed: true },
        { id: 3, title: "Membuat Kue", completed: true },
        { id: 4, title: "Membuat Bakwan", completed: false },
        { id: 5, title: "Membuat Pisang Goreng", completed: true },
        { id: 6, title: "Membuat Seblak", completed: false },
    ];

    return (
        <>
            <div className='todo'>
                <div className='todo-list'>
                    {list_todo.map((item) => (
                        <button
                            key={item?.id}
                            className={
                                item.completed ? "" : "text-line-through"
                            }
                            style={{ borderRadius: 20 }}
                        >
                            {item?.title}
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
}
