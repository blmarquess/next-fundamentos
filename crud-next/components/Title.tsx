interface TitleProps{ title: string }

export default function Title({ title }:TitleProps):JSX.Element{
  return(
    <span className="text-xl">{ title }</span>
  )
}
