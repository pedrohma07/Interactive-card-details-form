
import Card from '../../components/Card'
import './style.sass'
import CardBack from '../../components/CardBack'
import FormLogin from '../../components/FormLogin'

const index = () => {
  return (
    <div className='container'>
      <Card />
      <CardBack />
      <FormLogin />
    </div>
  )
}

export default index