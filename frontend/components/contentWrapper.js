export default function ContentWrapper(props) {
  return (
    <div className="mx-[calc(25%-50px)]">
      {/* <Component {...pageProps}/> */}
      {props.children}
    </div>
  )
}