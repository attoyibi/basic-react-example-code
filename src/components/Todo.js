export default function Todo({
  id,
  title,
  checked,
  onClickItem,
  onDeleteItem,
}) {
  console.log("tile", title);
  console.log("onClickItem", onClickItem);
  return (
    <li className={checked ? "done todo-item" : "todo-item"} data-key={id}>
      <input onChange={onClickItem} id={id} type="checkbox" />
      <label htmlFor={id} className="tick js-tick"></label>
      <span>{title}</span>
      <button onClick={onDeleteItem} className="delete-todo js-delete-todo">
        <svg>
          <use href="#delete-icon"></use>
        </svg>
      </button>
    </li>
  );
}
