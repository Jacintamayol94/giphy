import React from 'react';
import ContenedorGif from './ContenedorGif';


function Gif(props) {

  const { gifUrls } = props;

    return (
        <>
          <div>
            {
            gifUrls.map((url, i) => {
                return <ContenedorGif gifUrl={url} key={url + i} />
            })
            }
          </div>
        
        </>
    )
}

export default Gif