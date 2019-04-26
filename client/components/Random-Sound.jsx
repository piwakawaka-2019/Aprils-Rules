import React from "react"


const Sound1 = '/Sound1.mp3'
// const Sound2 = '../../public/Sound2'
// // const Sound3 = '../../public/Sound3'
// const Sound4 = '../../public/Sound4'
// const Sound5 = '../../public/Sound5'

// const soundArray = [Sound1, Sound2, Sound4, Sound5];



class Sounds extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      play: false,
      url: Sound1,
      audio: new Audio(this.url)
      };
    //   this.url= soundArray[this.randomSound()]
      
    };
    play(){
      this.setState({
      play:true 
      });
      this.audio.play()
    };
    randomSound(){
        return Math.floor(Math.random()*Math.floor(soundArray.length));
    }
    

render(){
  return(
    <div>
        <audio autoPlay={true}>
            <source src={this.state.url} type="audio/mpeg"></source>
        </audio>
  {/* <audio src={this.state.url} type="audio/mp3" autoPlay="true" /> */}
</div>
  )
  }
}

export default Sounds