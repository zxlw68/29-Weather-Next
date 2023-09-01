import Image from 'next/image'
const Weather = ({ data }) => {
  console.log(data)

  return (
    <div className=' border relative flex flex-col justify-between max-w-[500px] w-full h-[90vh] m-auto p-4 text-white '>
      {/* Top */}

      <div className='relative flex justify-between pt-12'>
        <div className='flex flex-col  items-center'>
          <Image
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            // make it bigger
            alt='/'
            width='100'
            height='100'
          />
          <p className=' border text-2xl font-bold'>{data.weather[0].main}</p>
        </div>

        {/* Bottom */}

        <div>
          <p>Weather in {data.name}</p>
          <div>
            <div>
              <p>{data.main.feels_like}&#176;</p>
              <p>Feels Like</p>
            </div>
            <div>
              <p>{data.main.humidity}% </p>
              <p>Humidity</p>
            </div>
            <div>
              <p>{data.wind.speed.toFixed(0)}MPH </p>
              <p>Winds</p>
            </div>
          </div>
        </div>
        <p className='text-9xl'>{data.main.temp.toFixed(0)}&#176;</p>
        {/* to avoid decimal number, character entity tag for special characters */}
      </div>
    </div>
  )
}
export default Weather
