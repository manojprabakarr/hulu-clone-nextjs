import Image from 'next/image';

function Card({result}) {
      const baseUrl = "https://image.tmdb.org/t/p/original/";

    return (

          <div className="p-2 group cursor-pointer transition duration-100 ease-in transform sm:hover:scale-105 hover:z-50">
      
      <Image
        src={`${baseUrl}${result.backdrop_path || result.poster_path}`}
        layout="responsive"
        height={1080}
        width={1920}
      />
      <div className="p-2">
        <p className="truncate">{result.overview}</p>
        <h2 className="mt-1 text-2xl text-white  transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.title || result.orignal_title || result.orignal_name}
        </h2>

      </div>

        
        


            
        </div>
    )
}

export default Card
