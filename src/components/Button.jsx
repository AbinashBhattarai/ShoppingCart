export default function Button({name, handleClick}) {
  return(
    <div className="pt-3">
      <button onClick={handleClick}
        className="bg-blue-500 text-white text-lg font-semibold rounded-lg px-4 py-1 active:bg-blue-400">
        {name}
      </button>
    </div>
  )
}