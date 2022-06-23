import React from 'react'
import './Demo.css'

const Demo = () => {
    return (
        <div className='demo' id='demo'>
            <div className='container'>
                <div >
                    <h5>
                    <p>One Philosophy best Food with best service One of the major keys to having a successful restaurant is to choose the right type of food, the quality of ingredients as well as how to present your dishes. From the beginning stages of your restaurant business you should hold your kitchen to consistent food preparation standards as well as find and partner with quality food suppliers. Today’s major suppliers are offering many items pre -portioned, such as salmon, meats, vegetables and more, which eliminates waste and reduces preparation labor..</p></h5>
                    <button className='button'>Give Feedback</button>
                </div>
                <div className='col-2'>
                    <iframe width='570' height='320' src='https://www.youtube.com/embed/oeqP5JtihMA' title='Youtube video player' frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                </div>
            </div>
        </div>
    )
}

export default Demo
