export default function Divider({className = ''}: { className?: string }) {
    return (
        <img src={'/images/divider.png'} alt="divider" className={className + ' h-5 mx-auto my-6'}/>

    )
}
