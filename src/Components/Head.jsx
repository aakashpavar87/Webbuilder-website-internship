const Head = ({heading, style}) => {
  return (
    <h1 className="text-4xl font-medium text-slate-800" style={style?style:{}}>
        {heading}
    </h1>
  )
}

export default Head 