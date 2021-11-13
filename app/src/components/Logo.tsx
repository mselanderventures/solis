export default function Logo({height, ...props}: any) {
    height = height || '100%'
    return <img src={props.black ? "./noodles-black.png" : "./noodles-white.png"} height={height} {...props} />
}