import { StatusBar } from 'expo-status-bar';
import React,{useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';


import data from './data'
export default function App() {


  let detail=data;
 console.log(detail);
const [details, setDetails]=useState(detail[0]);
const [err, setErr]=useState("");

  useEffect(()=>{
   let x=async()=>{
     for(let i=detail.length-1;i>=0;i--){
      let m = Math.floor(Math.random() * (i+1));
     let temp = detail[i];
        detail[i] =detail[m];
       detail[m] = temp;
    }
    await  setDetails(detail[0]); 

  } 
  x();
 
  },[])

const checked= async(obj)=>{
    if(details.length===0){

     }
    if(details.answer===obj){
      setErr("");
     await detail.splice(0,1);
     await setDetails(detail[0]);
    }
    else{
    setErr("Guess correct answer");
    }

  }
 
  return (

     <View style={styles.container}>
      <Text  style={styles.header} >Welcome to quiz game</Text>
     <Text style={{color:'red', fontSize:20,marginVertical:10}}>{err}</Text>
      {detail.length==0 ? <Text style={{fontSize:20}}>You have completed quiz</Text>
      :
      <>
      <Image  source={{uri:details.img}} style={styles.img}></Image>
      <View style={styles.button}>
      {details.options.map(obj=>
   <View style={{margin:5}} >
         <Button title={obj} onPress={()=>checked(obj)} key={details.id} />
         </View>
       )} 
        </View>
   </>
      }
     
    </View>
  );
}

const styles = StyleSheet.create({
 
  container: {
    flex:1,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
  },
  header: {
  fontSize:25,
    backgroundColor: 'black',
    color: 'white',
    lineHeight:50
   
  },
  button:{
    flexDirection: 'row',
   padding:20
  },
  img: {
    width:200,
    height:200,
    marginTop:10
  }
});
