import React from 'react'

function ContenedorGif(props) {
    return (
        <>
            
                <div >
                    <img src={props.gifUrl} alt="GIF" />
                    <div >
                        <h4 className="card-title">GIF</h4>
                    </div>
                </div>
            

        </>
    )
}

export default ContenedorGif