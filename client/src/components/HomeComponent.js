import React,{Component} from 'react';

class Home extends Component {

    constructor(props){
        super(props);
        this.state={
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
      }

render(){
    return(
        <div className="container home text-center align-self-center">
        <br/><br/><br/>
            
            <h1 className="main-txt" align="center"> Welcome to the UCSC Library</h1>
            
            <div className="row box darkbg justify-content-center">            
            <h6>
                The UCSC Library provides its service to the staff and students of the UCSC. There are more than 1,400 registered library members. The library hosts more than 10,000 books, a comprehensive collection of computer science books supported by the latest editions and books related to relavent subjects and recreational books. There is a high demand for the theses and dissertation collection of the library as many users are doing researches.
            </h6>
            
            <div className='row justify-content-center col-auto'>
                <table className='table-bordered'>
                    <tr> <th colspan="2"><h6>Library Timings</h6></th> </tr>
                    <tr> <td><h6>Opening Time</h6></td> <td>9.00 A.M.</td></tr>
                    <tr> <td><h6>Closing Time</h6> </td> <td> 7.30 P.M.</td></tr>
                    <tr> <td colspan="2">Closed on Sundays and public holidays</td></tr>
                </table>
            </div>
                
            
            </div>
                
        </div>
            
        );
}

}

export default Home;