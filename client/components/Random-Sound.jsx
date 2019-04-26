import React from "react"


const Sound1 = '/Sound1.mp3'
const Sound2 = '/Sound2.mp3'
const Sound3 = '/Sound3.mp3'
const Sound4 = '/Sound4.mp3'
const Sound5 = '/Sound5.mp3'

const soundArray = [Sound1, Sound2, Sound3, Sound4, Sound5];



class Sounds extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      play: false
      };
    //   this.url = Sound1,
      this.url= this.randomSound(),
      this.audio = new Audio(this.url)
    // this.refreshList = this.refreshList.bind(this) 
    };
     
    play(audio){
      this.setState({
      play:true 
      });
      audio.play()
    };
    randomSound(){
        return soundArray[(Math.floor(Math.random()*Math.floor(soundArray.length)))];
    }
    refreshList(){
        var url = this.randomSound()
        var audio = new Audio(url)
        this.play(audio)
        
    }
    

render(){
    // console.log(this.randomSound())
  return(
    <div>
        <button onClick={this.refreshList.bind(this)}>Yeet</button>
  {/* <audio src={this.state.url} type="audio/mp3" autoPlay="true" /> */}
</div>
  )
  }
}

export default Sounds