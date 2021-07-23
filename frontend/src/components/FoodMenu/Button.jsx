export default function Button({name, active, setActive, id}) {
    return (
        <button
            onClick={() => setActive(id)}
            className={active === id ? "active" : null}
          >
            {name}
          </button>
    )
}
