import React, { Component } from 'react';
import './App.css';
import Equipe from './Equipe';
import amine from './photo/Amine.PNG';
import arsslen from './photo/Arsslen.PNG';
import sameh from './photo/Sameh.PNG';
import yahya from './photo/Yahya.PNG';
const Yahya={photo:yahya,fname:"yahya",sname: "Bouhlel",job:"Founder  GOMYCODE",statut:"CEO"};
const Amine={photo:amine,fname:"Amine",sname: "Bouhlel",job:"Founder GOMYCODE",statut:"COO"};
const Arsslen={photo:arsslen,fname:"Arsslen",sname:"Idadi",job:"Software Engineer",statut:"Part time manager"};
const Sameh={photo:sameh,fname:"Sameh",sname:" Ghanmi",job:"Software Engineer",statut:"Full time manager "};
const element=[Yahya ,Amine, Arsslen ,Sameh]

class App extends Component{
  constructor(props){
super(props);
this.state={

}
  }
  render() {
    const{photo="",fname="",sname="",job=""}=element
    return (
      <div className="App">
        <h1 className="titre">Notre Equipe</h1>
        <div className="equipe">
           {element.map((el,i)=>{
            return<Equipe photo={el.photo} fname={el.fname}  sname={el.sname} job={el.job} statut={el.statut}/>})
            };
       </div>
      </div>
    );
  }
}

export default App;
