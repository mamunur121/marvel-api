import React, {useState, useRef} from 'react'


const Search = ({search}: {search: (q: string) => void}) => {
  const[text,setText] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null!);

  React.useEffect(()=>{
    inputRef.current.focus();
  }, []);
  const onSearch= (q: string)=>{
    setText(q)
    search(q)
  }

  return (
    <section className="search">
      <form>
        <input type="text"
               className="form-control"
               placeholder="Find a character"
               autoFocus
               onChange={(e)=>onSearch(e.target.value)}
               value={text}
               ref={inputRef}
        />
      </form>
    </section>
  )
}

export default Search
