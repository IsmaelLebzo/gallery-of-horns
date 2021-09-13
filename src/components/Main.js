import React from 'react'
import Hornedbeast from './HornedBeast'
import BeastArr from "./HornedBeast.json";

class Main extends React.Component {
    render() {

        return (
            <div>
                {BeastArr.map((Element,index)=>{
                    return( <Hornedbeast key = {index} title = {Element.title}
                        image_url = {Element.image_url} description = {Element.description}
                        keyword = {Element.keyword} horns = {Element.horns} />)
                })}
            </div>
        )
    }
}
export default Main;