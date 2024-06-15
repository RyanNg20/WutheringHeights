export default function ContentWrapper(props) {
  return (
    <div className="px-[calc(25%-50px)] relative min-h-[100svh]">
      {/* <Component {...pageProps}/> */}
      {props.children}
    </div>
  )
}