import React, { Component } from 'react'
    //import the components we will need
    import PoemCard from './PoemCard'
    import PoemManager from '../../modules/PoemManager'

    class PoemList extends Component {
        //define what this component needs to render
        state = {
            poems: [],
        }

    componentDidMount(){
        console.log("POEM LIST: ComponentDidMount");
        //getAll from AnimalManager and hang on to that data; put it in state
        PoemManager.getAll()
        .then((poems) => {
            this.setState({
                poems: poems
            })
        })
    }

    render(){
        console.log("PoemList: Render");
      
        return(
          <div className="container-cards">
            {this.state.poems.map(poem =>
              <PoemCard key={poem.id} poem={poem} />
            )}
          </div>
        )
      }
}

export default PoemList