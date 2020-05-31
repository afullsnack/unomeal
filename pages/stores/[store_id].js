import { Component } from 'react';
import withLayout from '../../components/withLayout';
import Router, { useRouter, withRouter } from 'next/router';

class SingleStore extends Component {


   render() {
      
      const { data } = this.props;
      
      return (
         <h1>The params data: {data}</h1>
      )
   }
}



export default withLayout(SingleStore);



export async function getServerSideProps({params, query}){
   // fetch store data and send to page props
   const { store_id } = params;
   console.log(params);

   return {props: {data: store_id}};
}