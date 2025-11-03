import type { FuelEventType } from '../pages/NewFueling'

const RefuelCard = (props: FuelEventType) => {
  return (
    <div className='refuelCard'>
        <div>{props.fuelType}</div>
        <div>{props.km} km</div>
        <div>{props.price} HUF</div>
        <div>{props.volume} l</div>
    </div>
  )
}

export default RefuelCard