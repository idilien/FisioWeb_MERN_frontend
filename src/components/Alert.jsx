

const Alert = ({alert}) => {
  return (
    <div className= {`${alert.error ? 'from-red-400 to-red-700' : 'from-green-400 to-green-600'} text-xs  p-2 text-white bg-gradient-to-b text-center rounded-full`} >
        {alert.msg}
    </div>
  )
}

export default Alert