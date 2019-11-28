import React,{Fragment,useEffect,useState,Component} from 'react';
//import styles from './nomeComponente.module.css';
import Modal from "../../components/UI/Modal/Modal"


// const errorHandler = (WrappedComponent, axios) =>{
    
//     return((props) =>{
//         const[error,setError] = useState(null);

//         useEffect(()=>{
//             axios.interceptors.request.use((req)=>{
//                 setError(err => null);
//                 return req;
                
//             });

//             axios.interceptors.response.use(res =>(res,err) =>{
//                 setError(error =>err);
//                 return res
                
//             }) ;        
//          });

//         const errorConfirmedHandler = ()=>{
//             setError(null);
//         };
//         return(
            
//             <Fragment>
//                 <Modal show={error? true:false} clicked = {errorConfirmedHandler}>
//                     {error? error.message:null}
//                 </Modal>
//                 <WrappedComponent {...props} /> 
//             </Fragment>

//         );
//     });
// };


// export default errorHandler;
const errorHandler = (WrappedComponent,axios)=>{
    return class extends Component {
        state = {
            error: null
        }

        componentWillMount () {
           this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            });
            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({error: error});
            });
        }

        componentWillUnmount(){
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        errorConfirmedHandler = () => {
            this.setState({error: null});
        }

        render () {
            return (
                <Fragment>
                    <Modal 
                        show={this.state.error}
                        clicked={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Fragment>
            );
        }
    }
}

export default errorHandler;