import React,{Component} from "react";

class Equipe extends Component{
 render(props){
   return(
       <div className="Instrutor">
         <img src={this.props.photo} alt=""/>
         <div className="nom">
              <h2 className="fname">{this.props.fname}</h2>
              <h2 className="sname">{this.props.sname}</h2>
          </div>
          <h2 className="job">{this.props.job}</h2>
          <h2 className="job">{this.props.statut}</h2>
        </div>
   );

 }





}
export  default Equipe;